"use client";
import React, {
	ChangeEventHandler,
	HTMLInputAutoCompleteAttribute,
	HTMLInputTypeAttribute,
	KeyboardEventHandler,
	useState,
} from "react";
import {FnBase, fnCss, HTMLInputModeAttribute, ImgSrc} from "nextjs-tools";
import Image from "next/image";

interface Props {
	imgSrc?: ImgSrc;
	placeholder?: string;
	regexp?: string;
	invalidMessage?: string;
	defaultValue?: string;
	onChange?: FnBase<string>;
	onKeyEnter?: FnBase<string>;
	disabled?: boolean;
	name?: string;
	className?: string;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	inputMode?: HTMLInputModeAttribute;
	type?: HTMLInputTypeAttribute;
	required?: boolean;
}

export default function ({
	placeholder = "",
	imgSrc,
	regexp,
	invalidMessage,
	defaultValue = "",
	onChange = () => {},
	onKeyEnter = () => {},
	name,
	disabled,
	className = "",
	autoComplete,
	inputMode,
	type,
	required,
}: Readonly<Props>) {
	const [invalid, setInvalid] = useState(false);
	const [value, setValue] = useState(defaultValue);
	const [focus, setFocus] = useState(false);

	const onKeyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key !== "Enter") return;
		onKeyEnter(value);
	};

	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
		onChange(e.target.value);
		setValue(e.target.value);
		setInvalid(!new RegExp(regexp || "").test(e.target.value));
	};

	return (
		<>
			<div
				className={fnCss.sum(
					"flex items-center border-all rounded-sm h-[2.5rem]",
					focus ? "border-(--primary)" : "",
					invalid && value ? "border-(--danger)" : "",
					className
				)}>
				{imgSrc && (
					<div
						className={fnCss.sum(
							"border-right h-full flex items-center pl-2 pr-2",
							disabled ? "bg-(--dark)" : "bg-(--primary)",
							focus ? "border-(--primary)" : ""
						)}>
						<Image
							className={fnCss.sum(
								"no-drag",
								disabled ? "filter-(--dark-alt-filter)" : "filter-(--primary-alt-filter)"
							)}
							src={imgSrc}
							alt="icon"
							width={25}
							height={25}
						/>
					</div>
				)}
				<div className="grow">
					<input
						{...{placeholder, disabled, name, defaultValue, autoComplete, inputMode, type, required}}
						onChange={onChangeHandler}
						className="outline-none w-full pl-2 pr-2"
						onKeyDown={onKeyDownHandler}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
					/>
				</div>
			</div>
			<div className="min-h-[1.5rem] text-(--danger) text-center">{invalid && invalidMessage}</div>
		</>
	);
}
