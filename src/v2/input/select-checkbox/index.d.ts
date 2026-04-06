import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
type Props = InputProps & Partial<InputAttribute>;
export interface SelectCheckboxItem {
    label: ReactNode;
    value: string;
}
interface InputProps {
    value: string[];
    onChange: FnBase<string[]>;
    items: SelectCheckboxItem[];
    label?: ReactNode;
    className?: string;
    gridClassName?: string;
}
interface InputAttribute {
    name: string;
}
export default function ({ value, items, label, onChange, className, gridClassName, name, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
