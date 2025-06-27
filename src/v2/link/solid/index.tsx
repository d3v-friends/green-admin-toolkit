"use client";
import React from "react";
import {ButtonSolidProps} from "@v2/button/solid";
import {useRouter} from "next/navigation";
import {ButtonSolid} from "@app/v2";

interface Props extends Omit<ButtonSolidProps, "onClick" | "onMiddleClick"> {
	href: string;
}

export default function (props: Readonly<Props>) {
	const router = useRouter();
	return (
		<ButtonSolid
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
