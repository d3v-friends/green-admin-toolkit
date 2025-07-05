import { ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
interface Props {
    value?: InputDatePeriodValue;
    onChange?: FnBase<InputDatePeriodValue>;
    imgSrc?: ImgSrc;
    className?: string;
    label?: ReactNode;
    timezone?: string;
    name?: {
        start: string;
        end: string;
    };
}
export type InputDatePeriodValue = Partial<{
    start: Date;
    end: Date;
}>;
export default function ({ className, label, imgSrc, value, onChange, timezone, name, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
