"use client";
import React, {
	MouseEventHandler,
	PointerEventHandler,
	ReactNode,
	TableHTMLAttributes,
	TouchEventHandler,
	useState,
} from "react";
import {concat, FnVoid, fnVoid} from "nextjs-tools";
import PCContextMenu from "./pc-context-menu";
import MobileContextMenu from "./mobile-context-menu";
import TheadTd from "./thead-td";

interface Props<T> extends Omit<TableHTMLAttributes<HTMLTableElement>, "children"> {
	list: T[];
	columns: TableColumn<T>[];
	multiSortable?: boolean;
	onClickRow?: TablePointerHandler<T>;
	onMiddleClickRow?: TablePointerHandler<T>;
	onContextMenuRow?: TableContextMenuRow<T>;
	emptyListMessage?: ReactNode;
}

export type TablePointerHandler<T> = (row: T) => void;
export type TableContextMenuRow<T> = (row: T, onClose: FnVoid) => ReactNode;

export type TableColumn<T> = {
	label: ReactNode;
	widthClassName: string;
	row: (row: T) => ReactNode;
	sortkey?: string;
	theadClassName?: string;
	tbodyClassName?: string;
};

type TablePointerEventHandler<T> = (row: T) => PointerEventHandler<HTMLTableRowElement>;
type TableTouchEventHandler<T> = (row: T) => TouchEventHandler<HTMLTableCellElement>;
type TableContextMenuEventHandler<T> = (row: T) => MouseEventHandler<HTMLTableRowElement>;

export default function <T>({
	list,
	columns,
	onClickRow = fnVoid,
	onMiddleClickRow = fnVoid,
	className,
	onContextMenuRow,
	multiSortable,
	emptyListMessage = "데이터가 없습니다.",
	...attr
}: Readonly<Props<T>>) {
	const touchDuration = 500;
	const [touch, onChangeTouch] = useState(0);
	className = className ? concat(className, "green") : "green";
	const onPointerUp: TablePointerEventHandler<T> = (row) => {
		return (e) => {
			switch (e.pointerType) {
				case "mouse":
					switch (e.button) {
						case 0:
							onClickRow(row);
							break;
						case 1:
							onMiddleClickRow(row);
							break;
					}
					return;
			}
		};
	};

	const onTouchStart: TableTouchEventHandler<T> = (row) => (e) => {
		onChangeTouch(Date.now());
		return;
	};

	const onTouchEnd: TableTouchEventHandler<T> = (row) => (e) => {
		if (!e.cancelable) return;

		if (Date.now() - touch < touchDuration) {
			onClickRow(row);
			return;
		}

		if (!onContextMenuRow) {
			return;
		}

		e.preventDefault();

		MobileContextMenu({
			row,
			children: onContextMenuRow,
		});
	};

	const onContextMenu: TableContextMenuEventHandler<T> = (row) => (e) => {
		if (!onContextMenuRow) {
			return;
		}

		e.preventDefault();
		PCContextMenu({
			clientX: e.clientX,
			clientY: e.clientY,
			scrollY: window.scrollY,
			row,
			children: onContextMenuRow,
		});
	};

	return (
		<table
			className={className}
			{...attr}>
			<thead>
				<tr>
					{columns.map((column, key) => (
						<td
							key={key}
							className={concat(column.widthClassName, column.theadClassName || "text-center font-bold")}>
							<TheadTd
								sortkey={column.sortkey}
								multiSortable={multiSortable}>
								{column.label}
							</TheadTd>
						</td>
					))}
				</tr>
			</thead>
			<tbody>
				{list.map((row, i1) => (
					<tr
						key={i1}
						onPointerUp={onPointerUp(row)}
						onContextMenu={onContextMenu(row)}>
						{columns.map((column, i2) => (
							<td
								key={i2}
								className={column.tbodyClassName}
								onTouchStart={onTouchStart(row)}
								onTouchEnd={onTouchEnd(row)}
								onTouchCancel={(e) => {}}>
								{column.row(row)}
							</td>
						))}
					</tr>
				))}
				{list.length === 0 && (
					<tr>
						<td
							className="text-center"
							colSpan={columns.length}>
							{emptyListMessage}
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}
