"use server";
import React from "react";
import {Panel} from "@app";
import BasicModal from "./_basic";
import Alert from "./_alert";

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
		</div>
	);
}
