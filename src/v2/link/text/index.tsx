"use client";
import React from "react";
import {useRouter} from "next/navigation";
import {ButtonText} from "../..";
import {ButtonTextProps} from "../../button/text";

interface Props extends Omit<ButtonTextProps, "onClick" | "onMiddleClick"> {
	href: string;
}

export default function (props: Readonly<Props>) {
	const router = useRouter();
	return (
		<ButtonText
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
