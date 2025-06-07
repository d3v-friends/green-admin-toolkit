import { ReactNode } from "react";
import { ImgSrc } from "nextjs-tools";
interface Props {
    title?: ReactNode;
    children?: ReactNode;
    className?: string;
    classNameTitle?: string;
    classNameContent?: string;
    collapsed?: boolean;
    imgSrc?: ImgSrc;
}
export default function ({ title, children, classNameTitle, classNameContent, className, collapsed, imgSrc, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
