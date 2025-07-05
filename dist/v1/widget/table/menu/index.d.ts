import React, { ReactNode } from "react";
import { TableCol } from "../../..";
import { ContextMenu } from "../../../modal/context-menu";
import { OnChangeTheadSorter, TableSorterValue } from "../base/thead-sorter";
interface Props<T> {
    className?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
    onMouseUp?: OnClickTable<T>;
    menu: ContextMenu<T>[];
    sorter?: TableSorterValue;
    onChangeSorter?: OnChangeTheadSorter;
}
export type OnClickTable<T> = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
export default function <T>({ className, cols, list, empty, onMouseUp, menu, sorter, onChangeSorter, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
