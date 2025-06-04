"use client";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Pager, Panel, TableList} from "@app/index";

const list: {name: string; age: number; content: string}[] = [
	{name: "apple", age: 10, content: "content a"},
	{name: "banana", age: 11, content: "content b"},
	{name: "citron", age: 12, content: "content c"},
	{name: "donut", age: 13, content: "content d"},
	{name: "egg", age: 14, content: "content e"},
];

export default function ({}: NextPageProps) {
	return (
		<>
			<Panel>
				<h4>Table</h4>
				<TableList
					list={list}
					cols={[
						{name: "name", colClassName: "w-1/3", parser: (v) => v.name},
						{name: "age", colClassName: "w-1/3", parser: (v) => v.age},
						{name: "content", colClassName: "w-1/3", parser: (v) => v.content},
					]}
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
