"use server";
import React from "react";
import {LinkOutline, LinkSolid, LinkText, Panel, ScreenCenter, Section} from "..";
import ImgLogo from "@asset/png/icon.png";
import Image from "next/image";
import ImgKey from "web-asset/svg/solid/fi-sr-key.svg";

export default async function () {
	return (
		<Section>
			<ScreenCenter>
				<Panel>
					<div className="flex items-center justify-center pr-[0.5rem] mb-2">
						<Image
							className="mr-2"
							src={ImgLogo}
							alt="logo"
							width={40}
							height={40}
						/>
						<h5>GreenAdminToolkit</h5>
					</div>

					<h6 className="mb-2 text-center">Welcome back!</h6>
					<p className="text-center">Sign in continue to GreenAdminToolkit</p>
					<div className="h-10" />

					<LinkSolid
						className="mb-2 w-full"
						href="/dashboard/widget/button">
						Sign in
					</LinkSolid>
					<LinkOutline
						className="mb-2 w-full"
						href="/">
						Join
					</LinkOutline>
					<LinkText
						imgSrc={ImgKey}
						href="/">
						Find password
					</LinkText>
				</Panel>
			</ScreenCenter>
		</Section>
	);
}
