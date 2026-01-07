import { ReactNode } from "react";
import { StaticImageData } from "next/image";
declare function Label({ children }: Readonly<{
    children?: ReactNode;
}>): import("react/jsx-runtime").JSX.Element | null;
declare function Outline({ isFocus, isInvalid, children, }: Readonly<{
    isFocus: boolean;
    isInvalid: boolean;
    children?: ReactNode;
}>): import("react/jsx-runtime").JSX.Element;
declare function Icon({ children, isDisabled, isFocus, }: Readonly<{
    children?: StaticImageData;
    isDisabled: boolean;
    isFocus: boolean;
}>): import("react/jsx-runtime").JSX.Element | null;
declare function InvalidMessage({ children, isInvalid }: Readonly<{
    children?: ReactNode;
    isInvalid: boolean;
}>): import("react/jsx-runtime").JSX.Element | null;
declare const _default: {
    Label: typeof Label;
    Outline: typeof Outline;
    Icon: typeof Icon;
    InvalidMessage: typeof InvalidMessage;
};
export default _default;
