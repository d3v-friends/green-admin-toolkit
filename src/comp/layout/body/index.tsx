"use server";
import React, {ReactNode} from "react";
import "@asset/style/index.scss";
import localFont from "next/font/local";
import {fnCss} from "nextjs-tools";

interface Props {
	children?: ReactNode | ReactNode[];
	lang?: string;
}

export default async function ({lang = "ko", children}: Readonly<Props>) {
	return (
		<html lang={lang}>
			<body
				className={fnCss.sum(
					"bg-(--color-bg-body) min-h-screen",
					"text-[14px] lg:text-[18px] text-(--text-3) font-roboto"
				)}>
				{children}
			</body>
		</html>
	);
}

const neoFont = localFont({
	display: "swap",
	preload: true,
	src: [
		{
			path: "../../../../asset/font/neo/light.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../../../asset/font/neo/light.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../../../asset/font/neo/regular.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../../../asset/font/neo/regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../../asset/font/neo/bold.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../../../asset/font/neo/bold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../../../asset/font/neo/extrabold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../../../asset/font/neo/extrabold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../../../asset/font/neo/heavy.ttf",
			weight: "900",
			style: "normal",
		},
	],
});

const robotoFont = localFont({
	display: "swap",
	preload: true,
	src: [
		{
			path: "../../../../asset/font/roboto/thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../../../asset/font/roboto/thin.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../../../asset/font/roboto/light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../../../asset/font/roboto/regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../../asset/font/roboto/regular.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../../../asset/font/roboto/medium.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../../../asset/font/roboto/bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../../../asset/font/roboto/bold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../../../asset/font/roboto/extrabold.ttf",
			weight: "900",
			style: "normal",
		},
	],
});

const d2Font = localFont({
	display: "swap",
	preload: true,
	src: [
		{
			path: "../../../../asset/font/d2/regular.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../../../asset/font/d2/regular.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../../../asset/font/d2/regular.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../../../asset/font/d2/regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../../asset/font/d2/regular.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../../../asset/font/d2/bold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../../../asset/font/d2/bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../../../asset/font/d2/bold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../../../asset/font/d2/bold.ttf",
			weight: "900",
			style: "normal",
		},
	],
});
