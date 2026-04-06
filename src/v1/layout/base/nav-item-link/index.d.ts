import { ReactNode } from "react";
import { ImgSrc } from "nextjs-tools";
interface Props {
    href: string;
    children?: ReactNode;
    imgSrc?: ImgSrc;
    style?: "normal" | "alt";
    alert?: number;
    className?: string;
}
export default function ({ href, children, imgSrc, style, alert, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
