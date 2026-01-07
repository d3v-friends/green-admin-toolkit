import { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    right?: ReactNode;
}
export default function ({ children, right }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
