"use server";
import React from "react";
import {Panel} from "@root";
import FormConfirm from "./_form-confirm";
import FormBase from "./_form-base";
import FormOTP from "./_form-otp";

export default async function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<h4>Form base</h4>
				<FormBase />
			</Panel>

			<Panel>
				<h4>Form confirm</h4>
				<p>Ask confirm before submit</p>
				<FormConfirm />
			</Panel>

			<Panel>
				<h4>Form otp</h4>
				<p>Ask OTP before submit</p>
				<FormOTP />
			</Panel>
		</div>
	);
}
