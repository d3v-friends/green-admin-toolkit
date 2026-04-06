import { MouseEventHandler, ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
import { ColorStyle } from "../../..";
export interface Props {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    style?: "solid" | "outlined" | "text";
    color?: ColorStyle;
    className?: string;
    imgSrc?: ImgSrc;
    onRef?: FnBase<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
}
export default function ({ children, onClick, style, className, color, imgSrc, onRef, type, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
