import { ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
interface Props {
    children?: ReactNode;
    items: DropdownItem[];
    onSelect?: FnBase<string>;
    imgSrc?: ImgSrc;
    name?: string;
    initIndex?: number;
    className?: string;
    textAlign?: "text-center" | "text-left" | "text-right";
}
export interface DropdownItem {
    value: string;
    imgSrc?: ImgSrc;
    label?: ReactNode;
}
export default function ({ items, imgSrc, initIndex, onSelect, className, textAlign, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | "items is empty";
export {};
