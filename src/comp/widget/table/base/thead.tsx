import React from "react";
import {TableCol} from "@app/index";
import {fnCss} from "nextjs-tools";

interface Props<T> {
	cols: TableCol<T>[];
}

export default function <T>({cols}: Props<T>) {
	return (
		<thead>
			<tr className="border-top">
				{cols.map((v, key) => (
					<th
						className={fnCss.sum(v.headerClassName || "", "pt-2 pb-2")}
						key={key}>
						{v.name}
					</th>
				))}
			</tr>
		</thead>
	);
}
