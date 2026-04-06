import { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
interface Props {
    children?: ReactNode;
    className?: string;
    onClose?: FnVoid;
}
export default function ({ children, className, onClose }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
