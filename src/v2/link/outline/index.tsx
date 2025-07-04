"use client";
import React from "react";
import {ButtonOutlineProps} from "@v2/button/outline";
import {useRouter} from "next/navigation";
import {ButtonOutline} from "@root";

interface Props extends Omit<ButtonOutlineProps, "onClick" | "onMiddleClick"> {
	href: string;
}

export default function (props: Readonly<Props>) {
	const router = useRouter();
	return (
		<ButtonOutline
			{...props}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				router.push(props.href);
			}}
			onMiddleClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				window.open(props.href, "_blank");
			}}
		/>
	);
}
