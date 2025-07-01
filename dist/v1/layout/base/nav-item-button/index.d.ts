import { MouseEventHandler, ReactNode } from "react";
import { ImgSrc } from "nextjs-tools";
interface Props {
    children?: ReactNode;
    imgSrc?: ImgSrc;
    style?: "normal" | "alt";
    alert?: number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}
export default function ({ children, imgSrc, style, alert, onClick, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
