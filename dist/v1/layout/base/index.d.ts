import { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    nav?: ReactNode;
    footer?: ReactNode;
    aside?: ReactNode;
    title?: ReactNode;
}
export default function ({ children, footer, aside, title, nav }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
