"use server";
import React from "react";
import {Panel} from "@app";
import BasicModal from "./_basic";
import Alert from "./_alert";
import V3Fn from "./_v3-fn";

// todo *.md 파일 읽어오는 기능 알아보기.
// https://nextjs.org/docs/pages/guides/mdx
export default async function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<h4>Modal basic</h4>
				<BasicModal />
			</Panel>
			<Panel>
				<h4>Alert</h4>
				<Alert />
			</Panel>
			<Panel>
				<h4>v3 fn</h4>
				<V3Fn />
			</Panel>
		</div>
	);
}
