import {ReactNode} from "react";

export * from "./v1";
export * from "./v2";
export * from "@var/tailwind";

export type ColorStyle = "primary" | "secondary" | "success" | "warning" | "danger" | "dark" | string;

export type TableCol<T> = {
	name: ReactNode;
	parser: (v: T, i: number) => ReactNode;
	columnKey?: string;
	colClassName?: string;
	headerClassName?: string;
	cellClassName?: string;
};

export type Component<T> = (v: T) => ReactNode;

export type Coordinate = {
	top: number;
	left: number;
};

export const InitCoordinate: Coordinate = {
	top: 0,
	left: 0,
};

export type Position = {
	top: number;
	left: number;
	width: number;
	height: number;
};

export const InitPosition: Position = {
	top: 0,
	left: 0,
	width: 0,
	height: 0,
};

export const InitFunction = () => {};
