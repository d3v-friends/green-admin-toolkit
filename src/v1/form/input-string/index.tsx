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
import {FnBase, fnCss, HTMLInputModeAttribute, ImgSrc} from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
import {InputParser} from "../../../fn/input";

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
	label?: ReactNode;
	inputParser?: InputParser;
	children?: ReactNode | ReactNode[];
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
	label,
	inputParser = (e) => e.target.value,
	children,
}: Readonly<Props>) {
	const [invalid, setInvalid] = useState(false);
	const [value, setValue] = useState(defaultValue);
	const [focus, setFocus] = useState(false);

	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	const onKeyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key !== "Enter") return;
		onKeyEnter(value);
	};

	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
		const str = inputParser(e);
		onChange(str);
		setValue(str);
		setInvalid(!new RegExp(regexp || "").test(str));
	};

	return (
		<div className={className}>
			{label && <p className="mb-[-5px]">{label}</p>}
			<div className="flex w-full items-top">
				<div
					className={fnCss.sum(
						"relative",
						"flex items-center border-all rounded-md h-[2.5rem] overflow-hidden",
						"grow",
						focus ? "border-(--primary)" : "",
						invalid && value ? "border-(--danger)" : ""
					)}>
					{imgSrc && (
						<div
							className={fnCss.sum(
								"border-right h-full flex pl-2 pr-2",
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

					<input
						{...{placeholder, disabled, name, autoComplete, inputMode, type, required}}
						onChange={onChangeHandler}
						className="outline-none w-full pl-2 pr-2 grow"
						onKeyDown={onKeyDownHandler}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						value={value}
						title={invalidMessage}
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
							className="absolute right-0 top-0 h-[2.5rem] no-drag mr-2 filter-(--text-2-filter) hover:filter-(--primary-filter)"
						/>
					)}
				</div>
				{children && <div className="ml-2">{children}</div>}
			</div>

			<div className="min-h-[1.5rem] pl-2 text-(--danger)">{invalid && invalidMessage}</div>
		</div>
	);
}
