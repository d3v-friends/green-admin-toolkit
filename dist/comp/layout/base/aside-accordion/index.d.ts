import { ReactNode } from "react";
import { ImgSrc } from "nextjs-tools";
interface Props {
    title?: ReactNode;
    group?: ReactNode;
    imgSrc?: ImgSrc;
    children?: ReactNode;
    isCollapsed?: boolean;
}
export default function ({ title, group, imgSrc, children, isCollapsed }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
