import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
import { Sorter } from "../../../../index";
interface Props {
    children?: ReactNode;
    onChange?: FnBase<Sorter>;
    columnKey?: string;
    value?: Sorter;
}
export default function ({ children, onChange, value }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
