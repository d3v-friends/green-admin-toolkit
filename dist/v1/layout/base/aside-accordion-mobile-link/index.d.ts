import { ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
interface Props {
    href: string;
    onClose: FnBase<boolean>;
    prefix?: string;
    children?: ReactNode;
    imgSrc?: ImgSrc;
    alert?: number;
}
export default function ({ href, onClose, prefix, imgSrc, children, alert }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
