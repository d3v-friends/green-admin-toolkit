import { ReactNode } from "react";
import { TableCol } from "../../../../index.js";
interface Props<T> {
    className?: string;
    empty?: ReactNode;
    linker: (row: T) => string;
    cols: TableCol<T>[];
    list: T[];
    trClassName?: string;
}
export default function <T>({ className, cols, list, linker, empty, trClassName, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
