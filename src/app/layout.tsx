"use server";
import React, {ReactNode} from "react";
import {HTML} from "@app/v2";

export default async function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <HTML>{children}</HTML>;
}
