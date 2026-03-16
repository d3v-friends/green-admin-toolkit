import { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
interface Props<T> {
    scrollY: number;
    clientX: number;
    clientY: number;
    children: (row: T, onClose: FnVoid) => ReactNode;
    row: T;
}
export default function <T>({ clientX, clientY, children, scrollY, row }: Readonly<Props<T>>): void;
export {};
