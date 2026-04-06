import React, { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
    value: string;
    onChange: FnBase<string>;
    label?: ReactNode;
}
export default function ({ value, onChange, label, className, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
