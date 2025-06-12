"use client";
import React, {useState} from "react";
import {NextPageProps} from "nextjs-tools";
import {Pager, Panel, TableSorter} from "@app/index";
import {TableSorterValue} from "@comp/widget/table/sorter";

const list: {name: string; age: number; content: string}[] = [
	{name: "apple", age: 10, content: "content a"},
	{name: "banana", age: 11, content: "content b"},
	{name: "citron", age: 12, content: "content c"},
	{name: "donut", age: 13, content: "content d"},
	{name: "egg", age: 14, content: "content e"},
];

export default function ({}: NextPageProps) {
	const [sort, setSort] = useState<TableSorterValue>({
		columnKey: "name",
		sorter: "NONE",
	});
	return (
		<>
			<Panel>
				<h4>Table</h4>
				<TableSorter
					value={sort}
					onClick={(e, col) => console.log(col)}
					list={list}
					cols={[
						{
							name: "이름",
							colClassName: "w-1/3",
							columnKey: "name",
							parser: (v) => v.name,
						},
						{name: "age", columnKey: "age", colClassName: "w-1/3", parser: (v) => v.age},
						{name: "content", colClassName: "w-1/3", parser: (v) => v.content},
					]}
					onChangeSort={(column, sorter) => console.log(column, sorter)}
				/>

				<Pager
					page={5}
					size={10}
					total={100}
					onClick={(e, page) => console.log(page)}
				/>
			</Panel>
		</>
	);
}
