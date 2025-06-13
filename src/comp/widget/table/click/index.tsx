"use client";
import React, {ReactNode} from "react";
import {TableCol} from "@app/index";
import Base from "../base";

interface Props<T> {
	className?: string;
	empty?: ReactNode;
	cols: TableCol<T>[];
	list: T[];
	onClick: OnClickTable<T>;
	onMouseDown?: OnClickTable<T>;
	onMouseUp?: OnClickTable<T>;
}

const {RowBuilder, Colgroup, Thead, Table, RowEmpty} = Base;

export type OnClickTable<T> = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: T) => void;

export default function <T>({
	className,
	cols,
	list,
	empty,
	onClick,
	onMouseUp = () => {},
	onMouseDown = () => {},
}: Props<T>) {
	return (
		<Table className={className}>
			<Colgroup cols={cols} />
			<Thead cols={cols} />
			<tbody>
				{list.map((row, key) => (
					<tr
						className="hover:bg-(--color-table-hover) h-14"
						key={key}
						onClick={(e) => onClick(e, row)}
						onMouseUp={(e) => onMouseUp(e, row)}
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
