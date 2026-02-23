import { ReactNode } from "react";
interface Props {
    className?: string;
    children: ReactNode;
}
export default function ({ children, className }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export {};
