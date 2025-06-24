import React, {ReactNode} from "react";
import {TableCol} from "@app/index";

interface Props<T> {
	cols: TableCol<T>[];
	children?: ReactNode;
}

export default function <T>({children, cols}: Readonly<Props<T>>) {
	return (
		<tr className="border-top">
			<td
				className="pt-2 pb-2 h-15"
				colSpan={cols.length}>
				{children || "내용이 없습니다."}
			</td>
		</tr>
	);
}
