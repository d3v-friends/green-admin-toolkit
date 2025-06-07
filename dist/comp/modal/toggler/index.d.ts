import { MouseEventHandler, ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props {
    children: ReactNode;
    open: boolean;
    onChange: FnBase<boolean>;
    disableEscapeKey?: boolean;
    onClickBackdrop?: MouseEventHandler<HTMLDivElement>;
}
export default function ({ open, onChange, children, disableEscapeKey, onClickBackdrop }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
