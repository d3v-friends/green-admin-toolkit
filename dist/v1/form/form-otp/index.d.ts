import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
import { ModalBasicProps } from "../../modal/basic";
interface Props extends Pick<ModalBasicProps, "disableEscapeKey" | "disableCloseButton" | "header"> {
    children: FormOtpChildren;
    action: (payload: FormData) => void;
    pending: boolean;
    otpContent?: ReactNode;
    modalClassName?: string;
}
export type FormOtpChildren = (onToggle: FnBase<boolean>) => ReactNode;
export default function ({ children, action, pending, disableCloseButton, disableEscapeKey, header, otpContent, modalClassName, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
