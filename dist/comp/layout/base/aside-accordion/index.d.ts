import { ReactNode } from "react";
import { ImgSrc } from "nextjs-tools";
interface Props {
    title?: ReactNode;
    group?: ReactNode;
    imgSrc?: ImgSrc;
    children?: ReactNode;
}
export default function ({ title, group, imgSrc, children }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
