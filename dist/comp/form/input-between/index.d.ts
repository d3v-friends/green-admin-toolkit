import { ReactNode } from "react";
import { FnBase, ImgSrc } from "nextjs-tools";
import { InputParser } from "../../../fn/input";
interface Props {
    imgSrc?: ImgSrc;
    className?: string;
    label?: ReactNode;
    value: InputBetweenValue;
    onChange: FnBase<InputBetweenValue>;
    name?: Partial<InputBetweenValue>;
    inputParser?: InputParser;
}
export type InputBetweenValue = Partial<{
    before: string;
    after: string;
}>;
export default function ({ label, className, imgSrc, value, onChange, name, inputParser }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
