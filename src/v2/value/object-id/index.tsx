import React from "react";
import type {Align} from "../base";
import Base from "../base";
import ImgId from "web-asset/svg/regular/fi-rr-id-badge.svg";

interface Props {
	align?: Align;
	children?: string;
	copyable?: boolean;
}

export default function ({children = "", align, copyable}: Readonly<Props>) {
	return (
		<Base
			align={align}
			image={ImgId}
			className="font-d2"
			copyable={copyable}
			ellipsis>
			{children}
		</Base>
	);
}
