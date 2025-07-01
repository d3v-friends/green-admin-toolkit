import { TableCol } from "../../../../index";
interface Props<T> {
    cols: TableCol<T>[];
}
export default function <T>({ cols }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
