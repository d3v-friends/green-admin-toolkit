import React, { ReactNode } from "react";
interface Props<T> {
    value: T;
    menu: ContextMenu<T>[];
    top: number;
    left: number;
}
export type ContextMenu<T> = {
    label: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, row: T) => void;
    borderTop?: boolean;
};
export default function <T>({ menu, top, left, value }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
