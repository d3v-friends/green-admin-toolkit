import { ReactNode } from "react";
import { StaticImageData } from "next/image";
interface Props {
    align?: Align;
    children?: ReactNode;
    image?: string | StaticImageData;
    copyable?: boolean;
    ellipsis?: boolean;
    className?: string;
    monospace?: boolean;
}
export type Align = "left" | "center" | "right";
export default function ({ align, children, image, copyable, ellipsis, className, monospace, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
