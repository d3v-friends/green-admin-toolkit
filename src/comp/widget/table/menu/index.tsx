"use client";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import {ModalContextMenu, TableCol} from "@app/index";
import Base from "../base";
import {Nullable} from "nextjs-tools";
import {ContextMenu} from "@comp/modal/context-menu";
import {OnChangeTheadSorter, TableSorterValue} from "@comp/widget/table/base/thead-sorter";

interface Props<T> {
	className?: string;
	empty?: ReactNode;
	cols: TableCol<T>[];
	list: T[];
	onMouseUp?: OnClickTable<T>;
	menu: ContextMenu<T>[];
	sorter?: TableSorterValue;
	onChangeSorter?: OnChangeTheadSorter;
}

const {RowBuilder, Colgroup, Thead, Table, RowEmpty, TheadSorter} = Base;

export type OnClickTable<T> = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;

export default function <T>({
	className,
	cols,
	list,
	empty,
	onMouseUp = () => {},
	menu,
	sorter = {
		columnKey: "",
		sorter: "NONE",
	},
	onChangeSorter = () => {},
}: Props<T>) {
	const [coordinate, setCoordinate] = useState<{top: number; left: number}>({
		top: 0,
		left: 0,
	});
	const [row, setRow] = useState<Nullable<T>>();
	const refSetRow = useRef(setRow);
	const [touchDuration, setTouchDuration] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			refSetRow.current(null);
		};

		const onMouseUp = (e: MouseEvent) => {
			if (e.button === 2) return;
			refSetRow.current(null);
		};

		window.addEventListener("mouseup", onMouseUp);
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div
			className={className}
			onMouseLeave={() => setRow(null)}>
			<Table>
				<Colgroup cols={cols} />
				<TheadSorter
					cols={cols}
					value={sorter}
					onChange={onChangeSorter}
				/>
				<tbody>
					{list.map((row, key) => (
						<tr
							style={{
								userSelect: "none",
								WebkitUserSelect: "none",
								WebkitTouchCallout: "none",
							}}
							className="hover:bg-(--color-table-hover) h-14"
							key={key}
							onMouseUp={(e) => onMouseUp(e, row)}
							onContextMenu={(e) => {
								e.preventDefault();
								setCoordinate({
									top: e.clientY,
									left: e.clientX,
								});
								setRow(row);
							}}
							onTouchStart={(e) => {
								setTouchDuration(Date.now());
							}}
							onTouchEnd={(e) => {
								const duration = Date.now() - touchDuration;
								if (!(2000 < duration && duration < 5000)) return;
								setRow(row);
							}}
							onTouchMove={(e) => {
								setTouchDuration(0);
								setRow(null);
							}}>
							<RowBuilder
								cols={cols}
								value={row}
								index={key}
							/>
						</tr>
					))}
					{list.length === 0 && <RowEmpty cols={cols}>{empty}</RowEmpty>}
				</tbody>
			</Table>

			{row && (
				<ModalContextMenu
					value={row}
					menu={menu}
					{...coordinate}
				/>
			)}
		</div>
	);
}
