"use client";
import React, {useState} from "react";
import {NextPageProps} from "nextjs-tools";
import {Pager, Panel, TableCol, TableMenu, TableSorter} from "@app/index";
import {TableSorterValue} from "@comp/widget/table/base/thead-sorter";

type Data = {name: string; age: number; content: string};

const list: Data[] = [
	{name: "apple", age: 10, content: "content a"},
	{name: "banana", age: 11, content: "content b"},
	{name: "citron", age: 12, content: "content c"},
	{name: "donut", age: 13, content: "content d"},
	{name: "egg", age: 14, content: "content e"},
];

const cols: TableCol<Data>[] = [
	{
		name: "이름",
		colClassName: "w-1/3",
		columnKey: "name",
		parser: (v) => v.name,
	},
	{name: "age", columnKey: "age", colClassName: "w-1/3", parser: (v) => v.age},
	{name: "content", colClassName: "w-1/3", parser: (v) => v.content},
];

export default function ({}: NextPageProps) {
	const [sort, setSort] = useState<TableSorterValue>({
		columnKey: "name",
		sorter: "NONE",
	});

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<h4>Table</h4>
				<TableSorter
					value={sort}
					onClick={(e, col) => console.log(col)}
					list={list}
					cols={cols}
					onChangeSort={(columnKey, sorter) => setSort({columnKey, sorter})}
				/>

				<Pager
					page={5}
					size={10}
					total={100}
					onClick={(e, page) => console.log(page)}
				/>
			</Panel>

			<Panel>
				<h4>Right button menu</h4>
				<TableMenu
					list={list}
					cols={cols}
					menu={[
						{label: "test1", onClick: (e, row) => console.log(row.name, "test1")},
						{
							label: "test2",
							onClick: (e, row) => console.log(row.name, "test2"),
						},
					]}
					sorter={sort}
					onChangeSorter={(columnKey, sorter) => setSort({columnKey, sorter})}
				/>
			</Panel>
		</div>
	);
}

/*
columnKey 입력해야 sorter 기능이 추가된다.
 */