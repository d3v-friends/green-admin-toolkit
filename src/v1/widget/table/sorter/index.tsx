"use client";
import React, {ReactNode} from "react";
import {TableCol} from "@root";
import Base from "../base";
import {OnChangeTheadSorter, TableSorterValue} from "@v1/widget/table/base/thead-sorter";

interface Props<T, S> {
	className?: string;
	empty?: ReactNode;
	cols: TableCol<T>[];
	list: T[];
	onClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
	onMouseDown?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
	onChangeSort?: OnChangeTheadSorter;
	value?: TableSorterValue;
}

const {RowBuilder, Colgroup, Table, RowEmpty, TheadSorter} = Base;

export default function <T, S>({
	className,
	cols,
	list,
	empty,
	onClick = () => {},
	onMouseDown = () => {},
	onChangeSort = () => {},
	value = {
		columnKey: "",
		sorter: "NONE",
	},
}: Props<T, S>) {
	return (
		<Table className={className}>
			<Colgroup cols={cols} />
			<TheadSorter {...{value, cols, onChange: onChangeSort}} />
			<tbody>
				{list.map((row, key) => (
					<tr
						className="hover:bg-(--color-table-hover) h-14"
						key={key}
						onClick={(e) => onClick(e, row)}
						onMouseDown={(e) => onMouseDown(e, row)}>
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
	);
}
