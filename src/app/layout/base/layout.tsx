import React, {ReactNode} from "react";
import {
	LayoutAsideAccordion,
	LayoutAsideAccordionLink,
	LayoutBase,
	LayoutElementNavItemLink,
	LayoutElementTitle,
} from "@app/index";
import ImgLogo from "@asset/png/icon.png";
import ImgSignOut from "web-asset/svg/solid/fi-sr-power.svg";
import ImgDot from "web-asset/svg/solid/fi-sr-bullet.svg";

export default function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return (
		<LayoutBase
			aside={<Aside />}
			nav={<Nav />}>
			{children}
		</LayoutBase>
	);
}

function Aside({}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return (
		<>
			<LayoutElementTitle imgSrc={ImgLogo}>AdminToolkit</LayoutElementTitle>
			<LayoutAsideAccordion
				imgSrc={ImgSignOut}
				title="ELEMENT"
				group="Base">
				<LayoutAsideAccordionLink
					href="/layout/base"
					prefix="/layout"
					imgSrc={ImgDot}
					alert={10}>
					아이템
				</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink
					href="/layout/base"
					imgSrc={ImgDot}>
					아이템
				</LayoutAsideAccordionLink>
				<LayoutAsideAccordionLink
					href="/layout/base"
					imgSrc={ImgDot}>
					아이템
				</LayoutAsideAccordionLink>
			</LayoutAsideAccordion>
		</>
	);
}

function Nav({}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return (
		<>
			<LayoutElementNavItemLink
				style="alt"
				href="/"
				imgSrc={ImgSignOut}>
				알트
			</LayoutElementNavItemLink>

			<div className="grow-1" />

			<LayoutElementNavItemLink
				href="/"
				imgSrc={ImgSignOut}
				alert={10}>
				로그아웃
			</LayoutElementNavItemLink>
		</>
	);
}
