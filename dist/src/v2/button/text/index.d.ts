import { MouseEventHandler, ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
import { ColorStyle } from "../../..";
export interface ButtonTextProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onMiddleClick?: MouseEventHandler<HTMLButtonElement>;
    color?: ColorStyle;
    className?: string;
    imgSrc?: ImgSrc;
    ref?: FnBase<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
}
export default function ({ children, onClick, onMiddleClick, className, color, imgSrc, ref, type, }: Readonly<ButtonTextProps>): import("react/jsx-runtime").JSX.Element;
