"use client";
import React from "react";
import {GTable} from "@src";

type Data = {name: string; age: number; content: string};

const list: Data[] = [
	{name: "apple", age: 1000, content: "content a"},
	{name: "banana", age: 1100, content: "content b"},
	{name: "citron", age: 1200, content: "content c"},
	{name: "donut", age: 1300, content: "content d"},
	{name: "egg", age: 1400, content: "content e"},
];

export default function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section className="green">
				<h3>GTable</h3>
				<GTable
					list={list}
					onClickRow={(row) => alert(`click: ${row.name}`)}
					onMiddleClickRow={(row) => alert(`middle click: ${row.name}`)}
					columns={[
						{
							label: "이름",
							widthClassName: "w-1/3",
							sortkey: "name",
							row: (row) => row.name,
						},
						{
							label: "나이",
							widthClassName: "w-1/3",
							row: (row) => row.age,
						},
						{
							label: "내용",
							widthClassName: "w-1/3",
							row: (row) => row.content,
						},
					]}
					onContextMenuRow={(row, onClose) => (
						<>
							<h4>{row.name}</h4>
							<button
								className="filled"
								onClick={() => {
									alert("hello");
								}}>
								alert
							</button>

							<button
								className="filled"
								onClick={onClose}>
								close
							</button>
						</>
					)}
				/>

				<div className="h-700"></div>
			</section>
		</div>
	);
}
