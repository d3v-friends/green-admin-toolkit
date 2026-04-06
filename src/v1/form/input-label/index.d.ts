import { ReactNode } from "react";
import { ImgSrc } from "nextjs-tools";
interface Props {
    imgSrc?: ImgSrc;
    className?: string;
    children?: ReactNode;
    label?: ReactNode;
}
export default function ({ imgSrc, className, children, label }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
