import { ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
import "../../../../asset/style/react-calendar.scss";
interface Props {
    value?: InputDatePeriodValue;
    onChange?: FnBase<InputDatePeriodValue>;
    imgSrc?: ImgSrc;
    className?: string;
    label?: ReactNode;
    timezone?: string;
}
export type InputDatePeriodValue = Partial<{
    start: Date;
    end: Date;
}>;
export default function ({ className, label, imgSrc, value, onChange, timezone, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
