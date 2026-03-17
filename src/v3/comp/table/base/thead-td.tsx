"use client";
import React, {ReactNode, useState} from "react";
import {useSearchParams} from "next/navigation";
import {useRouterTools} from "nextjs-tools";
import ImgCaretUp from "web-asset/svg/solid/fi-sr-caret-up.svg";
import ImgCaretDown from "web-asset/svg/solid/fi-sr-caret-down.svg";
import ImgCaretNone from "web-asset/svg/solid/fi-sr-minus-small.svg";
import Image, {StaticImageData} from "next/image";

interface Props {
	children: ReactNode;
	sortkey?: string;
}

export default function ({children, sortkey}: Readonly<Props>) {
	if (!sortkey) return children;

	const params = useSearchParams();
	const router = useRouterTools();
	const [dir, onChangeDir] = useState(getDirection(params.get(sortkey) || "none"));

	const onClick = () => {
		const next = getNextDirection(dir);
		router.pushBySearchParams({
			[sortkey]: next,
		});
		onChangeDir(next);
	};

	const getImage = (d: string): StaticImageData => {
		switch (d) {
			case "asc":
				return ImgCaretUp;
			case "desc":
				return ImgCaretDown;
			default:
				return ImgCaretNone;
		}
	};

	return (
		<button
			onClick={onClick}
			className="flex inline-flex items-center">
			{children}
			<Image
				className="ml-2 no-drag"
				src={getImage(dir)}
				alt="direction"
				width={15}
				height={15}
			/>
		</button>
	);
}

function getDirection(dir: string): string {
	switch (dir.toLowerCase()) {
		case "asc":
			return "asc";
		case "desc":
			return "desc";
		default:
			return "none";
	}
}

function getNextDirection(dir: string): string {
	switch (dir.toLowerCase()) {
		case "asc":
			return "desc";
		case "desc":
			return "none";
		default:
			return "asc";
	}
}
