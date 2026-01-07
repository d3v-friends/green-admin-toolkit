import { ReactNode } from "react";
import { StaticImageData } from "next/image";
interface Props {
    imgSrc?: string | StaticImageData;
    children?: ReactNode;
    href?: string;
}
export default function ({ imgSrc, children, href }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
