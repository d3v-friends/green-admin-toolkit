import React, { ReactNode } from "react";
import { TableCol } from "../../../../index";
interface Props<T> {
    className?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
    onClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
}
export default function <T>({ className, cols, list, empty, onClick }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
