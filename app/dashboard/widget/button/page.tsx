"use server";
import React, {ReactNode} from "react";
import {ButtonOutline, ButtonSolid, ButtonText, Panel} from "@app";
import ImgKey from "web-asset/svg/solid/fi-sr-key.svg";

export default async function () {
	const colorAll = ["primary", "secondary", "success", "dark", "danger", "warning"];
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<h4>Solid</h4>
				<Grid>
					{colorAll.map((color, i) => (
						<ButtonSolid
							imgSrc={ImgKey}
							color={color}
							key={i}>
							{color}
						</ButtonSolid>
					))}
				</Grid>
			</Panel>
			<Panel>
				<h4>Outline</h4>
				<Grid>
					{colorAll.map((color, i) => (
						<ButtonOutline
							imgSrc={ImgKey}
							color={color}
							key={i}>
							{color}
						</ButtonOutline>
					))}
				</Grid>
			</Panel>
			<Panel>
				<h4>Text</h4>
				<Grid>
					{colorAll.map((color, i) => (
						<ButtonText
							imgSrc={ImgKey}
							color={color}
							key={i}>
							{color}
						</ButtonText>
					))}
				</Grid>
			</Panel>
		</div>
	);
}

function Grid({children}: Readonly<{children?: ReactNode}>) {
	return <div className="p-2 lg:p-4 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">{children}</div>;
}
