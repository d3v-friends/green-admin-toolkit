"use server";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Button, ButtonLink, InputCheckbox, InputString, LayoutBlank, Panel, ScreenCenter} from "@app/index";
import ImgLogo from "@asset/png/icon.png";
import Image from "next/image";
import ImgA from "web-asset/svg/solid/fi-sr-user-robot.svg";
import ImgKey from "web-asset/svg/solid/fi-sr-key.svg";

export default async function ({}: NextPageProps) {
	return (
		<LayoutBlank>
			<ScreenCenter>
				<Panel className="w-[20rem]">
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
					<InputString
						placeholder="Username"
						regexp="^[0-9]{0,10}$"
						imgSrc={ImgA}
						invalidMessage="error"
					/>

					<InputString
						placeholder="Password"
						regexp="^[0-9]{0,10}$"
						imgSrc={ImgKey}
						invalidMessage="error"
						required
						type="password"
					/>

					<InputCheckbox className="mb-5">Remember me</InputCheckbox>

					<ButtonLink
						href="/widget/button"
						imgSrc={ImgKey}
						className="mb-2 w-full">
						Login
					</ButtonLink>

					<Button
						imgSrc={ImgKey}
						className="mb-2 w-full"
						style="outlined">
						Join
					</Button>

					<Button
						imgSrc={ImgKey}
						className="mb-2 w-full"
						style="text">
						Find password
					</Button>
				</Panel>
			</ScreenCenter>
		</LayoutBlank>
	);
}
