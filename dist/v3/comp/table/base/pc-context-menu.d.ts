import { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
interface Props<T> {
    clientX: number;
    clientY: number;
    children: (row: T, onClose: FnVoid) => ReactNode;
    row: T;
}
export default function <T>({ clientX, clientY, children, row }: Readonly<Props<T>>): void;
export {};
