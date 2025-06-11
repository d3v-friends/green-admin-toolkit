import { ReactNode } from "react";
import { ActionForm, FnBase, FnVoid } from "nextjs-tools";
import { ModalBasicProps } from "../../modal/basic";
interface Props<INPUT> extends Pick<ModalBasicProps, "disableEscapeKey" | "disableCloseButton" | "header"> {
    children: FormConfirmChildren;
    confirmModal: FormConfirmModalComponent;
    beforeSubmit?: (payload: FormData) => boolean;
    action: (payload: FormData) => void;
    pending: boolean;
    form: ActionForm<INPUT>;
    checkBeforeOpen?: boolean;
}
export type FormConfirmChildren = (onToggle: FnBase<boolean>) => ReactNode;
export type FormConfirmModalComponent = (onSubmit: FnVoid, onCancel: FnVoid) => ReactNode;
export default function <INPUT>({ children, confirmModal, action, pending, beforeSubmit, disableCloseButton, disableEscapeKey, header, form, checkBeforeOpen, }: Readonly<Props<INPUT>>): import("react/jsx-runtime").JSX.Element;
export {};
