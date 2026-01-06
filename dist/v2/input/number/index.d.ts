import { HTMLInputTypeAttribute, ReactNode } from "react";
import { FnBase, HTMLInputModeAttribute } from "nextjs-tools";
import { StaticImageData } from "next/image";
export type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;
interface InputProps {
    value: string;
    onChange: FnBase<string>;
    icon?: StaticImageData;
    label?: ReactNode;
    onKeyEnter?: FnBase<string>;
    className?: string;
}
interface InputConvenience {
    numberType: NumberType;
}
interface InputAttribute {
    name: string;
    disabled: boolean;
    required: boolean;
    placeholder: string;
    inputMode: HTMLInputModeAttribute;
    type: HTMLInputTypeAttribute;
}
export type NumberType = "integer" | "decimal";
export default function (props: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
