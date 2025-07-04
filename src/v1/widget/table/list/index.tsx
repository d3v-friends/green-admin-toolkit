import React, {ReactNode} from "react";
import {TableCol} from "@root";
import Base from "../base";
import {fnCss} from "nextjs-tools";

interface Props<T> {
	className?: string;
	trClassName?: string;
	empty?: ReactNode;
	cols: TableCol<T>[];
	list: T[];
}

const {RowBuilder, Colgroup, Thead, Table, RowEmpty} = Base;

export default function <T>({className, cols, list, empty, trClassName = "hover:bg-(--color-table-hover)"}: Props<T>) {
	return (
		<Table className={className}>
			<Colgroup cols={cols} />
			<Thead cols={cols} />
			<tbody>
				{list.map((row, key) => (
					<tr
						className={fnCss.sum(trClassName, "h-14")}
						key={key}>
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
