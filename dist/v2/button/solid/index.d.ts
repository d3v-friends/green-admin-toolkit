import { MouseEventHandler, ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
import { ColorStyle } from "../../..";
export interface ButtonSolidProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onMiddleClick?: MouseEventHandler<HTMLButtonElement>;
    color?: ColorStyle;
    className?: string;
    imgSrc?: ImgSrc;
    ref?: FnBase<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}
export default function ({ children, onClick, onMiddleClick, className, color, imgSrc, ref, type, disabled, }: Readonly<ButtonSolidProps>): import("react/jsx-runtime").JSX.Element;
