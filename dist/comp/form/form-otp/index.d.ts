import { ReactNode } from "react";
import { ActionForm, FnBase } from "nextjs-tools";
import { ModalBasicProps } from "../../modal/basic";
interface Props<INPUT> extends Pick<ModalBasicProps, "disableEscapeKey" | "disableCloseButton" | "header"> {
    children: FormOtpChildren;
    beforeSubmit?: (payload: FormData) => boolean;
    action: (payload: FormData) => void;
    pending: boolean;
    otpContent?: ReactNode;
    form: ActionForm<INPUT>;
    modalClassName?: string;
}
export type FormOtpChildren = (onToggle: FnBase<boolean>) => ReactNode;
export default function <INPUT>({ children, action, pending, beforeSubmit, disableCloseButton, disableEscapeKey, header, otpContent, form, modalClassName, }: Readonly<Props<INPUT>>): import("react/jsx-runtime").JSX.Element;
export {};
