"use client";
import React, {ReactNode} from "react";
import {Sorter, TableCol} from "@app/index";
import Base from "../base";
import {fnCss} from "nextjs-tools";
import Header from "./header";

interface Props<T, S> {
	className?: string;
	empty?: ReactNode;
	cols: TableCol<T>[];
	list: T[];
	onClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;
	onChangeSort?: (columnKey: string, sorter: Sorter) => void;
	value?: TableSorterValue;
}

const {RowBuilder, Colgroup, Table, RowEmpty} = Base;

export type TableSorterValue = {
	columnKey: string;
	sorter: Sorter;
};

export default function <T, S>({
	className,
	cols,
	list,
	empty,
	onClick,
	onChangeSort = () => {},
	value = {
		columnKey: "",
		sorter: "NONE",
	},
}: Props<T, S>) {
	return (
		<Table className={className}>
			<Colgroup cols={cols} />
			<thead>
				<tr className="border-top">
					{cols.map((v, key) => (
						<th
							className={fnCss.sum(v.headerClassName || "", "pt-2 pb-2")}
							key={key}>
							{v.columnKey ? (
								<Header
									columnKey={v.columnKey}
									onChange={(sorter) => {
										onChangeSort(v.columnKey!, sorter);
									}}
									value={v.columnKey === value?.columnKey ? value.sorter : "NONE"}>
									{v.name}
								</Header>
							) : (
								<div className="text-(--text-2)">{v.name}</div>
							)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{list.map((row, key) => (
					<tr
						className="hover:bg-(--color-table-hover) h-14"
						key={key}
						onClick={(e) => onClick(e, row)}>
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
