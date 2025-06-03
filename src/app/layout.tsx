"use server";
import React, {ReactNode} from "react";
import {LayoutBody} from "@app/index";

export default async function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <LayoutBody>{children}</LayoutBody>;
}
