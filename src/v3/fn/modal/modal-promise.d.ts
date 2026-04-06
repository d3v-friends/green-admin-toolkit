import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
export interface ModalPromiseOptions {
    backdrop: boolean;
    escape: boolean;
}
export type ModalPromiseChildren = (onClose: FnBase<boolean>) => ReactNode;
export declare const ModalCancel = "MODAL_CANCEL";
export default function (children: ModalPromiseChildren, opts?: Partial<ModalPromiseOptions>): Promise<boolean>;
