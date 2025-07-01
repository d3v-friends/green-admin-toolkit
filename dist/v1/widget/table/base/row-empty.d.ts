import { ReactNode } from "react";
import { TableCol } from "../../../../index";
interface Props<T> {
    cols: TableCol<T>[];
    children?: ReactNode;
}
export default function <T>({ children, cols }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
