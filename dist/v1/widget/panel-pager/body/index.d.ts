import { ReactNode } from "react";
interface Props {
    className?: string;
    children?: ReactNode;
}
export default function ({ children, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
