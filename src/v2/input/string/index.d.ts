import React, { HTMLInputTypeAttribute, ReactNode } from "react";
import { FnBase, HTMLInputModeAttribute } from "nextjs-tools";
import { StaticImageData } from "next/image";
type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;
interface InputProps {
    value: string;
    onChange: FnBase<string>;
    icon?: StaticImageData;
    label?: ReactNode;
    onKeyEnter?: FnBase<string>;
    className?: string;
}
export type InputInterceptor = (e: React.ChangeEvent<HTMLInputElement>) => string;
interface InputConvenience {
    invalidMessage: ReactNode;
    regexp: string;
    interceptor: InputInterceptor;
    onBlurInterceptor?: InputInterceptor;
}
interface InputAttribute {
    name: string;
    disabled: boolean;
    required: boolean;
    placeholder: string;
    inputMode: HTMLInputModeAttribute;
    type: HTMLInputTypeAttribute;
}
export default function ({ value, onChange, className, label, icon, invalidMessage, regexp, interceptor, onBlurInterceptor, name, disabled, required, placeholder, inputMode, type, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
