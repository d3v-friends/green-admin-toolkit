import React, { ReactNode } from "react";
import { Sorter, TableCol } from "../../../../index";
interface Props<T, S> {
    className?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
    onClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
    onChangeSort?: (columnKey: string, sorter: Sorter) => void;
    initValue?: {
        columnKey: string;
        sorter: Sorter;
    };
}
export default function <T, S>({ className, cols, list, empty, onClick, onChangeSort, initValue, }: Props<T, S>): import("react/jsx-runtime").JSX.Element;
export {};
