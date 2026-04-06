"use client";
import {ReactNode} from "react";
import {createRoot} from "react-dom/client";
import {FnBase} from "nextjs-tools";

export interface ModalPromiseOptions {
	backdrop: boolean;
	escape: boolean;
}

export type ModalPromiseChildren = (onClose: FnBase<boolean>) => ReactNode;

export const ModalCancel = "MODAL_CANCEL";

export default function (children: ModalPromiseChildren, opts: Partial<ModalPromiseOptions> = {}): Promise<boolean> {
	return new Promise<boolean>((resolve, reject) => {
		const cont = document.createElement("dialog");
		cont.className = "green";

		const escapeHandler = (e: KeyboardEvent) => {
			if (e.key !== "Escape") return;
			unmount();
			reject(new Error(ModalCancel));
		};

		const root = createRoot(cont);

		const unmount = () => {
			if (opts.escape) document.removeEventListener("keyup", escapeHandler);
			root.unmount();
			cont.remove();
		};

		// 화면에 마운트
		cont.onmouseup = (e) => {
			if (e.button !== 0) return;
			if (opts.backdrop) {
				unmount();
				reject(new Error(ModalCancel));
			}
		};

		if (opts.escape) {
			document.addEventListener("keyup", escapeHandler);
		}

		document.body.appendChild(cont);

		root.render(
			<div
				onMouseUp={(e) => {
					e.stopPropagation();
				}}>
				{children((value) => {
					unmount();
					resolve(value);
				})}
			</div>
		);
	});
}
