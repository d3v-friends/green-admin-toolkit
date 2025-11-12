import React from "react";
import type {Align} from "../base";
import Base from "../base";
import ImgId from "web-asset/svg/regular/fi-rr-user.svg";

interface Props {
	align?: Align;
	children?: string;
}

export default function ({children = "", align}: Readonly<Props>) {
	return (
		<Base
			align={align}
			image={ImgId}
			copyable>
			{children}
		</Base>
	);
}
