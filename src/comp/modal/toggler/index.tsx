"use client";
import React, {MouseEventHandler, ReactNode, useCallback, useEffect} from "react";
import {FnBase} from "nextjs-tools";
import Base from "../base";

interface Props {
	children: ReactNode;
	open: boolean;
	onChange: FnBase<boolean>;
	disableEscapeKey?: boolean;
	onClickBackdrop?: MouseEventHandler<HTMLDivElement>;
	backdropClassName?: string;
}

// todo 추후 엔터키 등록하기
export default function ({
	open,
	onChange,
	children,
	disableEscapeKey,
	onClickBackdrop,
	backdropClassName,
}: Readonly<Props>) {
	const onEscPress = useCallback(
		(e: KeyboardEvent) => {
			if (e.key == "Escape") {
				onChange(false);
			}
		},
		[onChange]
	);

	useEffect(() => {
		if (disableEscapeKey) {
			return;
		}

		if (open) {
			window.addEventListener("keydown", onEscPress);
		} else {
			window.removeEventListener("keydown", onEscPress);
		}

		return () => {
			window.removeEventListener("keydown", onEscPress);
		};
	}, [onEscPress, open, disableEscapeKey]);

	if (!open) return null;

	if (!children) return null;

	return (
		<Base
			onClick={onClickBackdrop}
			backdropClassName={backdropClassName}>
			{children}
		</Base>
	);
}
