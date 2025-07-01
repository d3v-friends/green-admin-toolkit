"use client";
import React, {MouseEventHandler, ReactNode, TouchEventHandler, useEffect, useState} from "react";
import {fnCss} from "nextjs-tools";
import {Component, Coordinate, InitCoordinate, InitFunction, ModalContextMenu, Sorter} from "@app/index";
import Image, {StaticImageData} from "next/image";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
import {ContextMenu} from "@comp/modal/context-menu";

interface Props<T> {
	className?: string;
	list: T[];
	cols: TableColumn<T>[];
	onClick?: OnClickTableEventHandler<T>;
	onMiddleClick?: OnClickTableEventHandler<T>;
	contextMenu?: ContextMenu<T>[];
	emptyLabel?: ReactNode;
	onChangeSort?: OnChangeTableSort;
	sort?: TableSortValue;
	cellPaddingClassName?: string;
}

export type TableColumn<T> = {
	label: ReactNode;
	className: string;
	parser: Component<T>;
	column?: string;
};

export type OnChangeTableSort = (e: React.MouseEvent, column: string, sorter: Sorter) => void;

export type OnClickTableEventHandler<T> = (e: React.MouseEvent, row: T) => void;

export type TableSortValue = {column: string; sorter: Sorter};

export default function <T>({
	className = "w-full border-bottom",
	cols,
	list,
	onClick = InitFunction,
	onMiddleClick = InitFunction,
	onChangeSort = InitFunction,
	contextMenu = [],
	emptyLabel = <div className="text-center">내용이 없습니다.</div>,
	sort = {column: "", sorter: "NONE"},
	cellPaddingClassName = "pb-2 pt-2 lg:pb-4 lg:pt-4",
}: Readonly<Props<T>>) {
	const [touchDuration, setTouchDuration] = useState(0);
	const [row, setRow] = useState<T | undefined>();
	const [coordinate, setCoordinate] = useState<Coordinate>(InitCoordinate);

	useEffect(() => {
		const onScrollEventListener = () => {
			setRow(undefined);
		};

		const onMouseUpEventListener = (e: MouseEvent) => {
			if (e.button === 2) return;
			setRow(undefined);
		};

		window.addEventListener("mouseup", onMouseUpEventListener);
		window.addEventListener("scroll", onScrollEventListener);

		return () => {
			window.removeEventListener("mouseup", onMouseUpEventListener);
			window.removeEventListener("scroll", onScrollEventListener);
		};
	}, []);

	const onMouseUp = (row: T): MouseEventHandler<HTMLTableRowElement> => {
		return (e) => {
			switch (e.button) {
				case 0:
					onClick(e, row);
					break;
				case 1:
					onMiddleClick(e, row);
					break;
			}
		};
	};

	const onContextMenu = (row: T): MouseEventHandler<HTMLTableRowElement> => {
		return (e) => {
			setCoordinate({
				top: e.clientY,
				left: e.clientX,
			});
			setRow(row);
		};
	};

	const onTouchStart: TouchEventHandler<HTMLTableRowElement> = (e) => {
		setTouchDuration(Date.now());
	};

	const onTouchEnd = (row: T): TouchEventHandler<HTMLTableRowElement> => {
		return (e) => {
			const duration = Date.now() - touchDuration;
			if (!(2000 < duration && duration < 5000)) return;
			setRow(row);
		};
	};

	const onTouchMove: TouchEventHandler<HTMLTableRowElement> = (e) => {
		setTouchDuration(0);
	};

	return (
		<>
			<table
				onMouseLeave={() => setRow(undefined)}
				className={fnCss.sum("w-full border-bottom border-top", className)}>
				<thead>
					<tr className="no-drag">
						{cols.map((col, key) => (
							<TheadButton
								{...col}
								cellPaddingClassName={cellPaddingClassName}
								onChangeSort={onChangeSort}
								key={key}
								sort={col.column === sort.column ? sort.sorter : "NONE"}
							/>
						))}
					</tr>
				</thead>
				<tbody className="no-drag">
					{list.length === 0 && (
						<tr className="border-top">
							<Cell
								cellPaddingClassName={cellPaddingClassName}
								colSpan={cols.length}
								className={""}>
								{emptyLabel}
							</Cell>
						</tr>
					)}

					{list.map((row, i1) => (
						<tr
							className="border-top hover:bg-(--color-table-hover)"
							key={i1}
							onMouseUp={onMouseUp(row)}
							onContextMenu={onContextMenu(row)}
							onTouchStart={onTouchStart}
							onTouchEnd={onTouchEnd(row)}
							onTouchMove={onTouchMove}>
							{cols.map((col, i2) => (
								<Cell
									cellPaddingClassName={cellPaddingClassName}
									className={col.className}
									key={i2}>
									{col.parser(row)}
								</Cell>
							))}
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>
							<ModalContextMenu
								value={row}
								menu={contextMenu}
								{...coordinate}
							/>
						</td>
					</tr>
				</tfoot>
			</table>
		</>
	);
}

function TheadButton<T>({
	label,
	className,
	column,
	onChangeSort,
	sort,
	cellPaddingClassName,
}: Readonly<
	TableColumn<T> & {
		onChangeSort: OnChangeTableSort;
		sort: Sorter;
		cellPaddingClassName: string;
	}
>) {
	if (!column) {
		return (
			<Cell
				className={fnCss.sum(className, "font-bold")}
				cellPaddingClassName={cellPaddingClassName}>
				{label}
			</Cell>
		);
	}

	let color: string;
	let img: StaticImageData;
	switch (sort) {
		case "ASC":
			color = "filter-(--danger-filter)";
			img = ImgAsc;
			break;
		case "DESC":
			color = "filter-(--success-filter)";
			img = ImgDesc;
			break;
		default:
			color = "filter-(--text-3-filter)";
			img = ImgDash;
	}

	const onToggle = (sorter: Sorter): Sorter => {
		const list: Sorter[] = ["ASC", "DESC", "NONE"];
		const idx = list.findIndex((v) => v === sorter);
		return list[(idx + 1) % list.length];
	};

	const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		onChangeSort(e, column, onToggle(sort));
	};

	return (
		<Cell
			className={className}
			cellPaddingClassName={cellPaddingClassName}>
			<button
				className="inline-flex items-baseline justify-center cursor-default"
				onClick={onClick}>
				<Image
					src={img}
					alt="direction"
					width={16}
					height={16}
					className={fnCss.sum("no-drag mr-1 w-[0.7rem]", color)}
				/>
				<div className={fnCss.sum(sort === "NONE" ? "text-(--text-2)" : "text-(--text-5)")}>{label}</div>
			</button>
		</Cell>
	);
}

function Cell({
	className,
	cellPaddingClassName,
	children,
	colSpan,
}: Readonly<{
	className: string;
	cellPaddingClassName: string;
	children: ReactNode;
	colSpan?: number;
}>) {
	return (
		<td
			colSpan={colSpan}
			className={fnCss.sum(className, cellPaddingClassName)}>
			{children}
		</td>
	);
}
