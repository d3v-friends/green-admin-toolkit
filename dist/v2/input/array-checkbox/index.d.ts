import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props {
    list: InputArrayCheckboxItem[];
    value?: string;
    onChange?: FnBase<string>;
    name?: string;
    children?: InputArrayCheckboxChildren;
    label?: ReactNode;
}
export type InputArrayCheckboxItem = {
    value: string;
    label: ReactNode;
};
export type InputArrayCheckboxChildren = (items: ReactNode[]) => ReactNode;
export default function ({ list, value, onChange, name, children, label }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
