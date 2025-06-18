"use client";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {MouseRightButtonMenu, Panel} from "@app/index";

export default function ({}: NextPageProps) {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<h5>Right button menu</h5>
				<MouseRightButtonMenu
					menu={[
						{label: "test1", onClick: () => console.log("test1")},
						{label: "test2", onClick: () => console.log("test2")},
						{label: "test3", onClick: () => console.log("test3"), borderTop: true},
						{label: "test4", onClick: () => console.log("test4")},
						{label: "test5", onClick: () => console.log("test5")},
					]}>
					<div className="bg-(--text-1) h-30">Mouse event</div>
				</MouseRightButtonMenu>
			</Panel>
		</div>
	);
}
