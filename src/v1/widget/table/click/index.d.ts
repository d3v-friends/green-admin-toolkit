import React, { ReactNode } from "react";
import { TableCol } from "../../..";
interface Props<T> {
    className?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
    onClick: OnClickTable<T>;
    onMouseDown?: OnClickTable<T>;
    onMouseUp?: OnClickTable<T>;
}
export type OnClickTable<T> = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
export default function <T>({ className, cols, list, empty, onClick, onMouseUp, onMouseDown, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
