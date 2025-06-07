import React, {ReactNode} from "react";
import {LayoutAsideAccordion, LayoutAsideAccordionLink, LayoutBase, LayoutNavItemLink, LayoutTitle} from "@app/index";
import ImgLogo from "@asset/png/icon.png";
import ImgButton from "web-asset/svg/regular/fi-rr-tip-button-hand.svg";
import ImgPowerOff from "web-asset/svg/regular/fi-rr-power.svg";
import ImgForm from "web-asset/svg/regular/fi-rr-form.svg";

interface Props {
	children?: ReactNode;
}

export default function ({children}: Readonly<Props>) {
	return (
		<LayoutBase
			nav={<Nav />}
			aside={<Aside />}>
			{children}
		</LayoutBase>
	);
}

function Nav({}: Readonly<{children?: ReactNode}>) {
	return (
		<>
			<LayoutNavItemLink
				imgSrc={ImgPowerOff}
				href="/">
				로그아웃
			</LayoutNavItemLink>
		</>
	);
}

function Aside({}: Readonly<{children?: ReactNode}>) {
	return (
		<>
			<LayoutTitle imgSrc={ImgLogo}>AdminToolkit</LayoutTitle>
			<LayoutAsideAccordion
				imgSrc={ImgButton}
				title="ELEMENT"
				group="Widget">
				<LayoutAsideAccordionLink href="/widget/button">Button</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/widget/input">Input</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/widget/table">Table</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/widget/modal">Modal</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>

			<LayoutAsideAccordion
				imgSrc={ImgForm}
				group="Server action">
				<LayoutAsideAccordionLink href="/action/form">Form</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>
		</>
	);
}
