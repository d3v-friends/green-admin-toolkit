"use server";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Panel} from "@app/index";
import FormConfirm from "./_form-confirm";
import FormBase from "./_form-base";

export default async function ({}: NextPageProps) {
	return (
		<>
			<Panel>
				<h4>Form base</h4>
				<FormBase />
			</Panel>

			<Panel>
				<h4>Form confirm</h4>
				<p>Ask confirm before submit</p>
				<FormConfirm />
			</Panel>
		</>
	);
}
