"use server";
import React from "react";
import {NextPageProps} from "nextjs-tools";

export default async function ({}: NextPageProps) {
	return (
		<>
			<h3>font</h3>
			<p className="font-roboto">Roboto font</p>
			<p className="font-neo">Neo font</p>
			<p className="font-d2">d2 font</p>
		</>
	);
}
