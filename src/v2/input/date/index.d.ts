import React, { ReactNode } from "react";
import { FnBase, Nullable } from "nextjs-tools";
import { StaticImageData } from "next/image";
type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;
export type OnSelectDateEventHandler = (value: Nullable<Date>, event: React.MouseEvent<HTMLButtonElement>) => Nullable<Date>;
interface InputProps {
    value: Nullable<Date>;
    onChange: FnBase<Nullable<Date>>;
    label?: ReactNode;
    className?: string;
    icon?: StaticImageData;
}
interface InputConvenience {
    format: string;
    onSelectDate: OnSelectDateEventHandler;
}
interface InputAttribute {
    name: string;
    disabled: boolean;
    required: boolean;
}
export default function ({ value, onChange, label, className, icon, format, onSelectDate, name, disabled, required, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
