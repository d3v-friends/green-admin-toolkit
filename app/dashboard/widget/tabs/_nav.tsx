import React from "react";
import {PanelPager} from "@root";

interface Props {}

const {Nav} = PanelPager;

export default function ({}: Readonly<Props>) {
	return (
		<Nav
			items={[
				{label: "Tab_01", href: "/dashboard/widget/tabs/t-01"},
				{label: "Tab_02", href: "/dashboard/widget/tabs/t-02"},
				{label: "Tab_03", href: "/dashboard/widget/tabs/t-03"},
			]}></Nav>
	);
}
