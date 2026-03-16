"use server";
import React, {ReactNode} from "react";

import ImgLogo from "../../asset/png/icon.png";
import ImgButton from "web-asset/svg/regular/fi-rr-tip-button-hand.svg";
import {LayoutAsideAccordion, LayoutAsideAccordionLink, LayoutBase, LayoutTitle} from "@src";
import Nav from "./aside-mobile";

export default async function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return (
		<LayoutBase
			nav={<Nav />}
			aside={<Aside />}>
			{children}
		</LayoutBase>
	);
}

function Aside() {
	return (
		<>
			<LayoutTitle imgSrc={ImgLogo}>V3</LayoutTitle>
			<LayoutAsideAccordion
				isCollapsed
				imgSrc={ImgButton}
				title="ELEMENT"
				group="Component">
				<LayoutAsideAccordionLink href="/v3/comp/table">GTable</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>
		</>
	);
}
