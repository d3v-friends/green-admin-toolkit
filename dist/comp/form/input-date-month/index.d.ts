import { ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
import "../../../../asset/style/react-calendar.scss";
interface Props {
    value: Date;
    onChange: FnBase<Date>;
    imgSrc?: ImgSrc;
    className?: string;
    label?: ReactNode;
    timezone?: string;
    name?: string;
}
export default function ({ className, label, imgSrc, value, onChange, timezone, name, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
