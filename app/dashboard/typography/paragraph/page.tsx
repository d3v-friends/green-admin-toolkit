"use server";
import React from "react";
import {Panel} from "@root";

export default async function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<h5>Header</h5>
				<hr />

				<h1>h1. Heading</h1>
				<h2>h2. Heading</h2>
				<h3>h3. Heading</h3>
				<h4>h4. Heading</h4>
				<h5>h5. Heading</h5>
				<h6>h6. Heading</h6>
				<p>Paragraph</p>
			</Panel>
		</div>
	);
}
