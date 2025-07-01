import React, {ReactNode} from "react";
import {LayoutAsideAccordion, LayoutAsideAccordionLink, LayoutBase, LayoutNavItemLink, LayoutTitle} from "@app/v1";
import ImgPowerOff from "web-asset/svg/regular/fi-rr-power.svg";
import ImgLogo from "@asset/png/icon.png";
import ImgButton from "web-asset/svg/regular/fi-rr-tip-button-hand.svg";
import ImgForm from "web-asset/svg/regular/fi-rr-form.svg";
import ImgDoc from "web-asset/svg/regular/fi-rr-a.svg";
import ImgControl from "web-asset/svg/regular/fi-rr-console-controller.svg";

export default function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
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
		<div>
			<LayoutNavItemLink
				className="w-20"
				imgSrc={ImgPowerOff}
				href="/">
				로그아웃
			</LayoutNavItemLink>
		</div>
	);
}

function Aside({}: Readonly<{children?: ReactNode}>) {
	return (
		<>
			<LayoutTitle imgSrc={ImgLogo}>AdminToolkit</LayoutTitle>
			<LayoutAsideAccordion
				isCollapsed
				imgSrc={ImgButton}
				title="ELEMENT"
				group="Widget">
				<LayoutAsideAccordionLink href="/dashboard/widget/button">Button</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/dashboard/widget/input">Input</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/dashboard/widget/table">Table</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/dashboard/widget/modal">Modal</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/dashboard/widget/chart">Chart</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/dashboard/widget/progress-bar">Progress bar</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink href="/dashboard/widget/wysiwyg">wysiwyg</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink
					href="/dashboard/widget/tabs/t-01"
					prefix="/dashboard/widget/tabs">
					Tab
				</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>

			<LayoutAsideAccordion
				imgSrc={ImgForm}
				group="Server action">
				<LayoutAsideAccordionLink href="/dashboard/action/form">Form</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>

			<LayoutAsideAccordion
				imgSrc={ImgDoc}
				group="Typography">
				<LayoutAsideAccordionLink href="/dashboard/typography/paragraph">Paragraph</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>

			<LayoutAsideAccordion
				imgSrc={ImgControl}
				group="Control">
				<LayoutAsideAccordionLink href="/dashboard/control/mouse">Mouse</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>
		</>
	);
}
