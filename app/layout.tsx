"use server";
import React, {ReactNode} from "react";
import {HTML} from "..";

export default async function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <HTML>{children}</HTML>;
}
