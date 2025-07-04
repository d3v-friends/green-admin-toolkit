import { TableCol } from "../../../../index.js";
interface Props<T> {
    cols: TableCol<T>[];
}
export default function <T>({ cols }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
