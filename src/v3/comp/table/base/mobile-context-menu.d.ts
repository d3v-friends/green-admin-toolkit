import { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
interface Props<T> {
    children: (row: T, onClose: FnVoid) => ReactNode;
    row: T;
}
export default function <T>({ children, row }: Readonly<Props<T>>): void;
export {};
