import { ReactNode } from "react";
import { ImgSrc } from "nextjs-tools";
import { ColorStyle } from "../../../index";
import "../../../../asset/style/button.scss";
interface Props {
    children?: ReactNode;
    style?: "solid" | "outlined" | "text";
    color?: ColorStyle;
    className?: string;
    imgSrc?: ImgSrc;
    href?: string;
}
export default function ({ children, style, className, color, imgSrc, href, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
