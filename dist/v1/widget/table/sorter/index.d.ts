import React, { ReactNode } from "react";
import { TableCol } from "../../..";
import { OnChangeTheadSorter, TableSorterValue } from "../base/thead-sorter";
interface Props<T, S> {
    className?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
    onClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
    onMouseDown?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
    onChangeSort?: OnChangeTheadSorter;
    value?: TableSorterValue;
}
export default function <T, S>({ className, cols, list, empty, onClick, onMouseDown, onChangeSort, value, }: Props<T, S>): import("react/jsx-runtime").JSX.Element;
export {};
