import React from "react";
interface Props {
    buttons?: number;
    page: number;
    size: number;
    total: number;
    onClick: OnPageMouseEvent;
    className?: string;
}
export type OnPageMouseEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
export default function ({ buttons, page, size, total, onClick, className }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
