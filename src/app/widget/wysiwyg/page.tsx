"use server";
import React from "react";
import {fnSearchParams, NextPageProps} from "nextjs-tools";
import {Panel} from "@app/index";
import Editor from "./_editor";

export default async function ({searchParams}: NextPageProps) {
	const {id} = await fnSearchParams.extract(searchParams, {
		id: fnSearchParams.parser.objectId("000000000000000000000000"),
	});
	return (
		<>
			<Panel>
				<h5>wysiwyg</h5>
				<Editor />
			</Panel>
		</>
	);
}
