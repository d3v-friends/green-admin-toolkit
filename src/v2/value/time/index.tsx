import React from "react";
import type {Align} from "../base";
import Base from "../base";
import ImgClock from "web-asset/svg/regular/fi-rr-clock-three.svg";
import {DateTime} from "luxon";

interface Props {
	children?: string;
	format?: string;
	align?: Align;
}

export default function ({children = "", format = "yyyy-MM-dd (HH:mm)", align}: Readonly<Props>) {
	if (children) {
		children = DateTime.fromISO(children).setZone("Asia/Seoul").toFormat(format);
	}

	return (
		<Base
			image={ImgClock}
			align={align}>
			{children}
		</Base>
	);
}
