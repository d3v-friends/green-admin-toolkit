import { Sorter, TableCol } from "../../..";
interface Props<T> {
    cols: TableCol<T>[];
    value?: TableSorterValue;
    onChange?: OnChangeTheadSorter;
}
export type OnChangeTheadSorter = (columnKey: string, sorter: Sorter) => void;
export type TableSorterValue = {
    columnKey: string;
    sorter: Sorter;
};
export default function <T>({ cols, onChange, value, }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
