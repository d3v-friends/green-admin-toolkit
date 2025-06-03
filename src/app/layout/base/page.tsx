"use server";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Panel, PanelBorder} from "@app/index";

export default async function ({}: NextPageProps) {
	return (
		<Panel>
			<h5>Layout base</h5>
			<p>hello</p>

			<PanelBorder className="mb-4">world</PanelBorder>
			<PanelBorder title="hello">world</PanelBorder>
		</Panel>
	);
}
