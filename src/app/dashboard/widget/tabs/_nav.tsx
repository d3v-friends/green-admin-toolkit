import React from "react";
import {PanelPager} from "@app/index";

interface Props {}

const {Nav} = PanelPager;
export default function ({}: Readonly<Props>) {
	return (
		<Nav
			items={[
				{label: "Tab_01", href: "/widget/tab/t-01"},
				{label: "Tab_02", href: "/widget/tab/t-02"},
				{label: "Tab_03", href: "/widget/tab/t-03"},
			]}></Nav>
	);
}
