"use server";
import React from "react";
import {fnSearchParams, NextPageProps} from "nextjs-tools";

export default async function ({searchParams}: NextPageProps) {
	const {id} = await fnSearchParams.extract(searchParams, {
		id: fnSearchParams.parser.objectId("000000000000000000000000"),
	});
	return <></>;
}
