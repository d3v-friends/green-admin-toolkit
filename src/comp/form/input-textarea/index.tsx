"use client";
import React, {
	ChangeEventHandler,
	HTMLInputAutoCompleteAttribute,
	HTMLInputTypeAttribute,
	KeyboardEventHandler,
	ReactNode,
	useEffect,
	useState,
} from "react";
import {FnBase, fnCss, HTMLInputModeAttribute} from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";

interface Props {
	label?: ReactNode;
	placeholder?: string;
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
	resize?: boolean;
}

export default function ({
	label,
	placeholder = "",
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
	resize = false,
}: Readonly<Props>) {
	const [value, setValue] = useState(defaultValue);
	const [focus, setFocus] = useState(false);

	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	const onKeyDownHandler: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
		if (e.key !== "Enter") return;
		onKeyEnter(value);
	};

	const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		onChange(e.target.value);
		setValue(e.target.value);
	};

	return (
		<div className={className}>
			{label && <p className="mb-[-5px]">{label}</p>}
			<div className={fnCss.sum("relative")}>
				<textarea
					className={fnCss.sum(
						"outline-none w-full min-h-[2.5rem] p-2 border-all rounded-md",
						focus ? "border-(--primary)" : "",
						resize ? "resize-y" : "resize-none"
					)}
					{...{placeholder, disabled, name, autoComplete, inputMode, type, required}}
					onChange={onChangeHandler}
					onKeyDown={onKeyDownHandler}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					value={value}
				/>

				{value && (
					<Image
						src={ImgCross}
						alt="clear"
						width={20}
						height={20}
						onClick={() => {
							setValue("");
							onChange("");
						}}
						className="absolute right-0 top-4 no-drag mr-2 w-[0.7rem] filter-(--text-2-filter) hover:filter-(--primary-filter)"
					/>
				)}
			</div>
		</div>
	);
}
