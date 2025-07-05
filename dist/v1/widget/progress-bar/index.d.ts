import { ReactNode } from "react";
import { ColorStyle } from "../../..";
interface Props {
    children?: ReactNode;
    color?: ColorStyle;
    className?: string;
    label?: ReactNode;
    size?: ProgressBarSize;
    style?: "outlined" | "solid";
    max: number;
    value: number;
    hiddenRate?: boolean;
    rateParser?: (value: number, max: number) => string;
}
export type ProgressBarSize = "h-5" | "h-10" | "h-15" | string;
export default function ({ color, className, label, size, style, max, value, hiddenRate, rateParser, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
