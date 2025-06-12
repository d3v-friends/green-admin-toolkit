import { ReactNode } from "react";
import { FnBase, ImgSrc, Nullable } from "nextjs-tools";
import "../../../../asset/style/react-calendar.scss";
interface Props {
    value: Nullable<Date>;
    onChange: FnBase<Nullable<Date>>;
    imgSrc?: ImgSrc;
    className?: string;
    label?: ReactNode;
    timezone?: string;
}
export default function ({ className, label, imgSrc, value, onChange, timezone, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
