import { MouseEvent, ReactNode } from "react";
import { FnBase } from "nextjs-tools";
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
export type OnClickCheckboxInterceptor = (e: MouseEvent<HTMLButtonElement>, value: boolean) => boolean;
declare function Checkbox({ value, children, onClickInterceptor, onChange, }: Readonly<{
    value: boolean;
    children: ReactNode;
    onChange: FnBase<boolean>;
    onClickInterceptor?: OnClickCheckboxInterceptor;
}>): import("react/jsx-runtime").JSX.Element;
declare const _default: {
    Label: typeof Label;
    Outline: typeof Outline;
    Icon: typeof Icon;
    InvalidMessage: typeof InvalidMessage;
    Checkbox: typeof Checkbox;
};
export default _default;
