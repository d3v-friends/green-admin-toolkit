import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
export interface ModalPromiseOptions {
    backdrop: boolean;
    escape: boolean;
}
export type ModalPromiseChildren = (onClose: FnBase<boolean>) => ReactNode;
export declare const ModalEscaped = "MODAL_ESCAPED";
export declare const ModalCanceled = "MODAL_CANCELLED";
export default function (children: ModalPromiseChildren, opts?: Partial<ModalPromiseOptions>): Promise<boolean>;
