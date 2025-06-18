import React, { ReactNode } from "react";
import { TableCol } from "../../../../index";
import { ContextMenu } from "../../../modal/context-menu";
interface Props<T> {
    className?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
    onMouseUp?: OnClickTable<T>;
    menu: ContextMenu<T>[];
}
export type OnClickTable<T> = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
export default function <T>({ className, cols, list, empty, onMouseUp, menu }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
