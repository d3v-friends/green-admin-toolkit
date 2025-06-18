import React, { ReactNode } from "react";
import { TableCol } from "../../../../index";
interface Props<T> {
    className?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
    onMouseUp: OnClickTable<T>;
    menu: RightButtonMenuItem<T>[];
}
export type OnClickTable<T> = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
export type RightButtonMenuItem<T> = {
    label: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, row: T) => void;
    borderTop?: boolean;
};
export default function <T>({ className, cols, list, empty, onMouseUp, menu }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
