import { ReactNode } from "react";
import { AsideChildrenComponent } from "./popup";
interface Props {
    children?: ReactNode;
    nav?: ReactNode;
    footer?: ReactNode;
    aside?: ReactNode;
    asideMobile?: AsideChildrenComponent;
    title?: ReactNode;
}
export default function ({ children, footer, aside, asideMobile, title, nav }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
