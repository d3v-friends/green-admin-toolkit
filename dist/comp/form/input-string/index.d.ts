import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode } from "react";
import { FnBase, HTMLInputModeAttribute, ImgSrc } from "nextjs-tools";
import { InputParser } from "../../../fn/input";
interface Props {
    imgSrc?: ImgSrc;
    placeholder?: string;
    regexp?: string;
    invalidMessage?: string;
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
    label?: ReactNode;
    inputParser?: InputParser;
}
export default function ({ placeholder, imgSrc, regexp, invalidMessage, defaultValue, onChange, onKeyEnter, name, disabled, className, autoComplete, inputMode, type, required, label, inputParser, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
