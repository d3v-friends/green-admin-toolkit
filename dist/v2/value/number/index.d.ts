import { ReactNode } from "react";
interface Props {
    children?: string | number;
    className?: string;
    symbol?: ReactNode;
}
export default function ({ children, className, symbol }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
