import { ReactNode } from "react";
import { TableCol } from "../../..";
interface Props<T> {
    className?: string;
    trClassName?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
}
export default function <T>({ className, cols, list, empty, trClassName }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
