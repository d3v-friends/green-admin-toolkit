import { ReactNode } from "react";
import { Undefined } from "nextjs-tools";
interface Props<T> {
    data: Undefined<T>;
    children: WaitChildren<T>;
    fallback?: ReactNode;
}
export type WaitChildren<T> = (data: T) => ReactNode;
export default function <T>({ data, children, fallback }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
