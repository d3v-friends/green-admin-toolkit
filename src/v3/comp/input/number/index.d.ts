import React, { ReactNode } from "react";
import { FnBase, Nullable } from "nextjs-tools";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
    value: Nullable<number>;
    onChange: FnBase<Nullable<number>>;
    label?: ReactNode;
}
export default function ({ value, onChange, onBlur, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
