import { ReactNode, TouchEventHandler } from "react";
import { FnVoid } from "nextjs-tools";
interface Props {
    children?: ReactNode;
    onRightClick: TouchEventHandler<HTMLDivElement>;
    onCancel?: FnVoid;
}
export default function ({ children, onRightClick, onCancel }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
