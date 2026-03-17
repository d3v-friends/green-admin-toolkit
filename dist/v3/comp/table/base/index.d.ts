import { ReactNode, TableHTMLAttributes } from "react";
import { FnVoid } from "nextjs-tools";
interface Props<T> extends Omit<TableHTMLAttributes<HTMLTableElement>, "children"> {
    list: T[];
    columns: TableColumn<T>[];
    multiSortable?: boolean;
    onClickRow?: TablePointerHandler<T>;
    onMiddleClickRow?: TablePointerHandler<T>;
    onContextMenuRow?: TableContextMenuRow<T>;
}
export type TablePointerHandler<T> = (row: T) => void;
export type TableContextMenuRow<T> = (row: T, onClose: FnVoid) => ReactNode;
export type TableColumn<T> = {
    label: ReactNode;
    widthClassName: string;
    row: (row: T) => ReactNode;
    sortkey?: string;
    theadClassName?: string;
    tbodyClassName?: string;
};
export default function <T>({ list, columns, onClickRow, onMiddleClickRow, className, onContextMenuRow, multiSortable, ...attr }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
