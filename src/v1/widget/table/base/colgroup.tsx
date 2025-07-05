import React from "react";
import {TableCol} from "../../..";

interface Props<T> {
	cols: TableCol<T>[];
}

export default function <T>({cols}: Readonly<Props<T>>) {
	return (
		<colgroup>
			{cols.map((col, key) => (
				<col
					className={col.colClassName}
					key={key}></col>
			))}
		</colgroup>
	);
}
