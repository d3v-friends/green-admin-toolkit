"use client";
import React from "react";
import {LayoutAsideAccordionMobileLink, LayoutNavItemLink, LayoutNavMobileMenuButton, LayoutTitle} from "../../src";
import ImgPowerOff from "web-asset/svg/regular/fi-rr-power.svg";
import ImgLogo from "../../asset/png/icon.png";

interface Props {}

export default function ({}: Readonly<Props>) {
	return (
		<div className="flex">
			<LayoutNavMobileMenuButton>
				{(onToggle) => (
					<>
						<LayoutTitle imgSrc={ImgLogo}>AdminToolkit</LayoutTitle>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/button"
							onClose={onToggle}>
							Button
						</LayoutAsideAccordionMobileLink>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/input"
							onClose={onToggle}>
							Input
						</LayoutAsideAccordionMobileLink>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/table"
							onClose={onToggle}>
							Table
						</LayoutAsideAccordionMobileLink>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/modal"
							onClose={onToggle}>
							Modal
						</LayoutAsideAccordionMobileLink>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/chart"
							onClose={onToggle}>
							Chart
						</LayoutAsideAccordionMobileLink>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/progress-bar"
							onClose={onToggle}>
							Progress bar
						</LayoutAsideAccordionMobileLink>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/wysiwyg"
							onClose={onToggle}>
							wysiwyg
						</LayoutAsideAccordionMobileLink>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/tabs/t-01"
							prefix="/dashboard/widget/tabs"
							onClose={onToggle}>
							Tab
						</LayoutAsideAccordionMobileLink>
						<LayoutAsideAccordionMobileLink
							href="/dashboard/widget/in"
							prefix="/dashboard/widget/in"
							onClose={onToggle}>
							Input V2
						</LayoutAsideAccordionMobileLink>
					</>
				)}
			</LayoutNavMobileMenuButton>
			<LayoutNavItemLink
				className="w-20 ml-2"
				imgSrc={ImgPowerOff}
				href="/">
				로그아웃
			</LayoutNavItemLink>
		</div>
	);
}
