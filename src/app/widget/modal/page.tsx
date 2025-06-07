"use server";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Panel} from "@app/index";
import BasicModal from "./_basic";

// todo *.md 파일 읽어오는 기능 알아보기.
// https://nextjs.org/docs/pages/guides/mdx
export default async function ({}: NextPageProps) {
	return (
		<>
			<Panel>
				<BasicModal />
			</Panel>
		</>
	);
}
