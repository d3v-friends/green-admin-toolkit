"use client";
import React, {useState} from "react";
import {Panel, Table, ValueNumber} from "@app";
import {TableSortValue} from "../../../../src/v2/table/base";

type Data = {name: string; age: number; content: string};

const list: Data[] = [
	{name: "apple", age: 1000, content: "content a"},
	{name: "banana", age: 1100, content: "content b"},
	{name: "citron", age: 1200, content: "content c"},
	{name: "donut", age: 1300, content: "content d"},
	{name: "egg", age: 1400, content: "content e"},
];

export default function () {
	const [sort, setSort] = useState<TableSortValue>({
		column: "name",
		sorter: "NONE",
	});

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<h4>Table</h4>
				<Table
					className="mb-4"
					list={list}
					onClick={(_, row) => {
						alert(`click: ${row.name}`);
					}}
					onMiddleClick={(_, row) => {
						alert(`middle click: ${row.name}`);
					}}
					onChangeSort={(_, column, sorter) => setSort({column, sorter})}
					sort={sort}
					contextMenu={[{label: "test1", onClick: (e, row) => alert(`context menu: ${row.name}`)}]}
					cols={[
						{
							label: "이름",
							className: "w-1/3 text-center",
							parser: (v) => v.name,
							column: "name",
						},
						{
							label: "나이",
							className: "w-1/3 text-center",
							parser: (v) => <ValueNumber symbol="살">{v.age}</ValueNumber>,
							column: "age",
						},
						{
							label: "내용",
							className: "w-1/3 text-center hidden lg:table-cell",
							parser: (v) => v.content,
							column: "content",
						},
					]}
				/>

				<Table
					list={[]}
					cols={[
						{
							label: "이름",
							className: "text-right w-1/3",
							parser: (v) => "",
						},
						{
							label: "나이",
							className: "text-right w-1/3",
							parser: (v) => "",
						},
						{
							label: "내용",
							className: "text-right w-1/3",
							parser: (v) => "",
						},
					]}
				/>
			</Panel>
		</div>
	);
}

/*
columnKey 입력해야 sorter 기능이 추가된다.
 */