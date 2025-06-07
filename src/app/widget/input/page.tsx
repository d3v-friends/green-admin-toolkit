"use server";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {InputCheckbox, InputDropdown, InputLabel, InputString, InputTextarea, Panel} from "@app/index";
import ImgAuth from "web-asset/svg/regular/fi-rr-circle-user.svg";
import ImgFruit from "web-asset/svg/regular/fi-rr-kiwi-fruit.svg";

export default async function ({}: NextPageProps) {
	return (
		<>
			<Panel>
				<h4 className="mb-4">Input</h4>
				<InputString
					label="input"
					placeholder="text"
				/>
				<InputString
					imgSrc={ImgAuth}
					placeholder="img text"
				/>

				<InputLabel label="input style label">Hello</InputLabel>

				<InputTextarea
					label="textarea"
					resize
				/>

				<p>Checkbox</p>
				<InputCheckbox className="mb-4">Checkbox</InputCheckbox>

				<p>Dropdown</p>
				<div className="grid gap-2 lg:gap-4 grid-cols-4">
					<InputDropdown
						textAlign="text-left"
						className="mb-4"
						items={[{value: "apple"}, {value: "banana"}, {value: "citron"}]}
					/>
					<InputDropdown
						imgSrc={ImgFruit}
						items={[{value: "apple"}, {value: "banana"}, {value: "citron"}]}
					/>
				</div>
			</Panel>
		</>
	);
}
