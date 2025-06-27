import React, {ReactNode} from "react";
import {TableCol} from "@app/index";
import Base from "../base";
import Row from "./row";

interface Props<T> {
	className?: string;
	empty?: ReactNode;
	linker: (row: T) => string;
	cols: TableCol<T>[];
	list: T[];
	trClassName?: string;
}

const {RowBuilder, Colgroup, Thead, Table, RowEmpty} = Base;

export default function <T>({
	className,
	cols,
	list,
	linker,
	empty,
	trClassName = "hover:bg-(--color-table-hover)",
}: Props<T>) {
	return (
		<Table className={className}>
			<Colgroup cols={cols} />
			<Thead cols={cols} />
			<tbody>
				{list.map((row, key) => (
					<Row
						className={trClassName}
						href={linker(row)}
						key={key}>
						<RowBuilder
							cols={cols}
							value={row}
							index={key}
						/>
					</Row>
				))}
				{list.length === 0 && <RowEmpty cols={cols}>{empty}</RowEmpty>}
			</tbody>
		</Table>
	);
}
