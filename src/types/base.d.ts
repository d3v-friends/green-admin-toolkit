import { ReactNode } from "react";
export type ColorStyle = "primary" | "secondary" | "success" | "warning" | "danger" | "dark" | string;
export type Component<T> = (v: T) => ReactNode;
