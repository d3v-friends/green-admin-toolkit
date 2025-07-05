import { ReactNode } from "react";
import { ImgSrc } from "nextjs-tools";
interface Props {
    href: string;
    prefix?: string;
    children?: ReactNode;
    imgSrc?: ImgSrc;
    alert?: number;
}
export default function ({ href, prefix, imgSrc, children, alert }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
