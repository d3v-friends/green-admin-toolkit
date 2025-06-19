import React, {ReactNode} from "react";
import Nav from "./_nav";
import {PanelPager} from "@app/index";

const {Body} = PanelPager;
export default function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return (
		<>
			<Nav />
			<Body>{children}</Body>
		</>
	);
}
