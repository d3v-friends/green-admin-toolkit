import { TableCol } from "../../../../index";
interface Props<T> {
    cols: TableCol<T>[];
    index: number;
    value: T;
}
export default function <T>({ cols, value, index }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element[];
export {};
