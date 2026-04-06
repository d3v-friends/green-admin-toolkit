import { MouseEventHandler, ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props {
    children: ReactNode;
    open: boolean;
    onChange: FnBase<boolean>;
    disableEscapeKey?: boolean;
    onClickBackdrop?: MouseEventHandler<HTMLDivElement>;
    backdropClassName?: string;
}
export default function ({ open, onChange, children, disableEscapeKey, onClickBackdrop, backdropClassName, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
