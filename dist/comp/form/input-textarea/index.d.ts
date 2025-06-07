import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode } from "react";
import { FnBase, HTMLInputModeAttribute } from "nextjs-tools";
interface Props {
    label?: ReactNode;
    placeholder?: string;
    defaultValue?: string;
    onChange?: FnBase<string>;
    onKeyEnter?: FnBase<string>;
    disabled?: boolean;
    name?: string;
    className?: string;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    inputMode?: HTMLInputModeAttribute;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
    resize?: boolean;
}
export default function ({ label, placeholder, defaultValue, onChange, onKeyEnter, name, disabled, className, autoComplete, inputMode, type, required, resize, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
