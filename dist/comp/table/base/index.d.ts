import React, { ReactNode } from "react";
import { Component, Sorter } from "../../../index";
import { ContextMenu } from "../../modal/context-menu";
interface Props<T> {
    className?: string;
    list: T[];
    cols: TableColumn<T>[];
    onClick?: OnClickTableEventHandler<T>;
    onMiddleClick?: OnClickTableEventHandler<T>;
    contextMenu?: ContextMenu<T>[];
    emptyLabel?: ReactNode;
    onChangeSort?: OnChangeTableSort;
    sort?: TableSortValue;
    cellPaddingClassName?: string;
}
export type TableColumn<T> = {
    label: ReactNode;
    className: string;
    parser: Component<T>;
    column?: string;
};
export type OnChangeTableSort = (e: React.MouseEvent, column: string, sorter: Sorter) => void;
export type OnClickTableEventHandler<T> = (e: React.MouseEvent, row: T) => void;
export type TableSortValue = {
    column: string;
    sorter: Sorter;
};
export default function <T>({ className, cols, list, onClick, onMiddleClick, onChangeSort, contextMenu, emptyLabel, sort, cellPaddingClassName, }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
