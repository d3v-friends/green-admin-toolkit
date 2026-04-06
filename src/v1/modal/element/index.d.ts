import { MouseEventHandler, ReactNode } from "react";
import { FnBase } from "nextjs-tools";
declare function Body({ children, className, }: Readonly<{
    children?: ReactNode;
    className?: string;
}>): import("react/jsx-runtime").JSX.Element;
declare function Header({ children, className, disableCloseButton, onChange, }: Readonly<{
    children?: ReactNode;
    className?: string;
    disableCloseButton?: boolean;
    onChange?: FnBase<boolean>;
}>): import("react/jsx-runtime").JSX.Element;
declare function Content({ className, children }: Readonly<{
    children?: ReactNode;
    className?: string;
}>): import("react/jsx-runtime").JSX.Element;
declare function Ok({ children, onClick, }: Readonly<{
    children?: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}>): import("react/jsx-runtime").JSX.Element;
declare function OkCancel({ ok, cancel, onClickOk, onClickCancel, }: Readonly<{
    ok?: ReactNode;
    cancel?: ReactNode;
    onClickOk: MouseEventHandler<HTMLButtonElement>;
    onClickCancel: MouseEventHandler<HTMLButtonElement>;
}>): import("react/jsx-runtime").JSX.Element;
declare const _default: {
    Body: typeof Body;
    Header: typeof Header;
    Content: typeof Content;
    Ok: typeof Ok;
    OkCancel: typeof OkCancel;
};
export default _default;
