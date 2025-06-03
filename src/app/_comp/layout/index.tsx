import React from "react";
import {ChildNode} from "nextjs-tools";
import {LayoutAsideAccordion, LayoutAsideAccordionLink, LayoutBase, LayoutElementTitle} from "@app/index";
import ImgLogo from "@asset/png/icon.png";
import ImgButton from "web-asset/svg/regular/fi-rr-tip-button-hand.svg";

interface Props {
	children?: ChildNode;
}

export default function ({children}: Readonly<Props>) {
	return <LayoutBase aside={<Aside />}>{children}</LayoutBase>;
}

function Aside({}: Readonly<{children?: ChildNode}>) {
	return (
		<>
			<LayoutElementTitle imgSrc={ImgLogo}>AdminToolkit</LayoutElementTitle>
			<LayoutAsideAccordion
				imgSrc={ImgButton}
				title="ELEMENT"
				group="Widget">
				<LayoutAsideAccordionLink
					href="/widget/button"
					prefix="/widget/button">
					Button
				</LayoutAsideAccordionLink>

				<LayoutAsideAccordionLink
					href="/widget/form"
					prefix="/widget/form">
					Form
				</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>
		</>
	);
}
