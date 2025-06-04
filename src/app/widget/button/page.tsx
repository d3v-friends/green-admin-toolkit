"use server";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Button, ButtonLink, Panel, PanelBorder} from "@app/index";
import ImgKey from "web-asset/svg/solid/fi-sr-key.svg";

export default async function ({}: NextPageProps) {
	const colorAll = ["primary", "secondary", "success", "dark", "danger", "info", "warning"];
	return (
		<>
			<Panel className="mb-4">
				<h4 className="mb-4">Button</h4>
				<PanelBorder
					imgSrc={ImgKey}
					title="Solid"
					className="mb-4"
					classNameContent="p-2 lg:p-4 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
					{colorAll.map((color, i) => (
						<Button
							imgSrc={ImgKey}
							color={color}
							key={i}>
							{color}
						</Button>
					))}
				</PanelBorder>

				<PanelBorder
					title="Outlined"
					className="mb-4"
					classNameContent="p-2 lg:p-4 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
					{colorAll.map((color, i) => (
						<Button
							imgSrc={ImgKey}
							color={color}
							key={i}
							style="outlined">
							{color}
						</Button>
					))}
				</PanelBorder>

				<PanelBorder
					title="Text"
					className="mb-4"
					classNameContent="p-2 lg:p-4 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
					{colorAll.map((color, i) => (
						<Button
							imgSrc={ImgKey}
							color={color}
							key={i}
							style="text">
							{color}
						</Button>
					))}
				</PanelBorder>
			</Panel>

			<Panel>
				<h4 className="mb-4">Link</h4>
				<PanelBorder
					title="Solid Link"
					className="mb-4"
					classNameContent="p-2 lg:p-4 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
					{colorAll.map((color, i) => (
						<ButtonLink
							imgSrc={ImgKey}
							color={color}
							key={i}>
							{color}
						</ButtonLink>
					))}
				</PanelBorder>

				<PanelBorder
					title="Outlined Link"
					className="mb-4"
					classNameContent="p-2 lg:p-4 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
					{colorAll.map((color, i) => (
						<ButtonLink
							imgSrc={ImgKey}
							color={color}
							key={i}
							style="outlined">
							{color}
						</ButtonLink>
					))}
				</PanelBorder>

				<PanelBorder
					title="Text Link"
					className="mb-4"
					classNameContent="p-2 lg:p-4 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
					{colorAll.map((color, i) => (
						<ButtonLink
							imgSrc={ImgKey}
							color={color}
							key={i}
							style="text">
							{color}
						</ButtonLink>
					))}
				</PanelBorder>
			</Panel>
		</>
	);
}
