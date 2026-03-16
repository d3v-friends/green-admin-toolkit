"use client";
import React from "react";
import {LayoutAsideAccordionMobileLink, LayoutNavItemLink, LayoutNavMobileMenuButton, LayoutTitle} from "@src";
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
							href="/v3/comp/table"
							onClose={onToggle}>
							GTable
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
