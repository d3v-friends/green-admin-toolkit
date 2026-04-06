import { ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
interface Props<T> {
    items: GInputDropdownItem<T>[];
    value: T;
    onChange: FnBase<T>;
    imgSrc?: ImgSrc;
    className?: string;
    textAlign?: "text-center" | "text-left" | "text-right";
    label?: ReactNode;
}
export interface GInputDropdownItem<T> {
    value: T;
    label: ReactNode;
    imgSrc?: ImgSrc;
}
export default function <T>({ items, imgSrc, value, onChange, className, textAlign, label, }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element | "items is empty" | "invalid value";
export {};
