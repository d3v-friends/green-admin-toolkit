import React, {ReactNode} from "react";
import Nav from "./_nav";
import {PanelPager} from "@app";

const {Body} = PanelPager;
export default function ({children}: Readonly<{children?: ReactNode}>) {
	return (
		<>
			<Nav />
			<Body>{children}</Body>
		</>
	);
}
