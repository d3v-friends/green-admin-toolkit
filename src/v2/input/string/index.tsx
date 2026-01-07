<<<<<<< HEAD
"use client";
import React, {HTMLInputTypeAttribute, ReactNode, useEffect, useState} from "react";
import {FnBase, fnCss, HTMLInputModeAttribute} from "nextjs-tools";
import Image, {StaticImageData} from "next/image";

type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;

interface InputProps {
	value: string;
	onChange: FnBase<string>;
	icon?: StaticImageData;
	label?: ReactNode;
	onKeyEnter?: FnBase<string>;
	className?: string;
}

export type InputInterceptor = (e: React.ChangeEvent<HTMLInputElement>) => string;

const DefaultInterceptor: InputInterceptor = (e) => e.target.value;

interface InputConvenience {
	invalidMessage: ReactNode;
	regexp: string;
	interceptor: InputInterceptor;
	onBlurInterceptor?: InputInterceptor;
}

interface InputAttribute {
	name: string;
	disabled: boolean;
	required: boolean;
	placeholder: string;
	inputMode: HTMLInputModeAttribute;
	type: HTMLInputTypeAttribute;
}

export default function ({
	value,
	onChange,
	className,
	label,
	icon,

	// convenience
	invalidMessage,
	regexp,
	interceptor = DefaultInterceptor,
	onBlurInterceptor = DefaultInterceptor,

	// attributes
	name,
	disabled = false,
	required,
	placeholder,
	inputMode,
	type,
}: Readonly<Props>) {
	const [isFocus, setIsFocus] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);

	useEffect(() => {
		if (!regexp) return;
		if (value === "") {
			setIsInvalid(false);
			return;
		}

		setIsInvalid(!new RegExp(regexp).test(value));
	}, [value]);

	return (
		<div className={className}>
			<Label>{label}</Label>

			<Outline
				isFocus={isFocus}
				isInvalid={isInvalid}>
				<Icon
					isFocus={isFocus}
					isDisabled={disabled}>
					{icon}
				</Icon>

				<input
					{...{name, disabled, required, placeholder, inputMode, type}}
					className="outline-none grow pl-2 pr-2"
					value={value}
					onChange={(e) => onChange(interceptor(e))}
					onFocus={() => setIsFocus(true)}
					onBlur={(e) => {
						setIsFocus(false);
						onChange(onBlurInterceptor(e));
					}}
				/>
			</Outline>

			<InvalidMessage isInvalid={isInvalid}>{invalidMessage}</InvalidMessage>
		</div>
	);
}

function Label({children}: Readonly<{children?: ReactNode}>) {
	if (!children) return null;
	return <p className="mb-[-5px]">{children}</p>;
}

function Outline({
	isFocus,
	isInvalid,
	children,
}: Readonly<{isFocus: boolean; isInvalid: boolean; children?: ReactNode}>) {
	let border = isFocus ? "border-(--primary)" : "";
	if (isInvalid) border = "border-(--danger)";

	return (
		<div className={fnCss.sum("flex items-center border-all rounded-md h-[2.5rem] overflow-hidden", border)}>
			{children}
		</div>
	);
}

function Icon({
	children,
	isDisabled,
	isFocus,
}: Readonly<{children?: StaticImageData; isDisabled: boolean; isFocus: boolean}>) {
	if (!children) return null;
	return (
		<div
			className={fnCss.sum(
				"border-right h-full flex pl-2 pr-2",
				isDisabled ? "bg-(--dark)" : "bg-(--primary)",
				isFocus ? "border-(--primary)" : ""
			)}>
			<Image
				className={fnCss.sum(
					"no-drag",
					isDisabled ? "filter-(--dark-alt-filter)" : "filter-(--primary-alt-filter)"
				)}
				src={children}
				alt="icon"
				width={25}
				height={25}
			/>
		</div>
	);
}

function InvalidMessage({children, isInvalid}: Readonly<{children?: ReactNode; isInvalid: boolean}>) {
	if (!children) return null;
	if (!isInvalid) return null;

	return <div className="min-h-[1.5rem] text-(--danger)">{children}</div>;
}
=======
// "use client";
// import React, {ChangeEventHandler, KeyboardEventHandler, ReactNode, useState} from "react";
// import {FnBase, fnCss, ImgSrc, InputAttributes} from "nextjs-tools";
// import Image from "next/image";
// import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
// import {InputParser} from "@fn/input";
//
// interface Props<T> extends InputAttributes<T> {
// 	imgSrc?: ImgSrc;
// 	placeholder?: string;
// 	onChange?: FnBase<string>;
// 	onKeyEnter?: OnKeyEnterInput<T>;
// 	disabled?: boolean;
// 	className?: string;
// 	required?: boolean;
// 	label?: ReactNode;
// 	inputParser?: InputParser;
// 	children?: ReactNode;
// }
//
// export type OnKeyEnterInput<T> = (e: React.ChangeEvent<HTMLInputElement>, value: T) => void;
//
// export default function <T>({
// 	placeholder = "",
// 	imgSrc,
// 	regexp,
// 	invalidMessage,
// 	value,
// 	defaultValue = "",
// 	onChange = () => {},
// 	onKeyEnter = () => {},
// 	name,
// 	disabled,
// 	className = "",
// 	autoComplete,
// 	inputMode,
// 	type,
// 	required,
// 	label,
// 	inputParser = (e) => e.target.value,
// 	children,
// }: Readonly<Props<T>>) {
// 	const [invalid, setInvalid] = useState(false);
// 	const [focus, setFocus] = useState(false);
//
// 	const onKeyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
// 		if (e.key !== "Enter") return;
// 		onKeyEnter(e, value);
// 	};
//
// 	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
// 		const str = inputParser(e);
// 		onChange(str);
// 		setValue(str);
// 		setInvalid(!new RegExp(regexp || "").test(str));
// 	};
//
// 	return (
// 		<div className={className}>
// 			{label && <p className="mb-[-5px]">{label}</p>}
// 			<div className="flex w-full items-top">
// 				<div
// 					className={fnCss.sum(
// 						"relative",
// 						"flex items-center border-all rounded-md h-[2.5rem] overflow-hidden",
// 						"grow",
// 						focus ? "border-(--primary)" : "",
// 						invalid && value ? "border-(--danger)" : ""
// 					)}>
// 					{imgSrc && (
// 						<div
// 							className={fnCss.sum(
// 								"border-right h-full flex pl-2 pr-2",
// 								disabled ? "bg-(--dark)" : "bg-(--primary)",
// 								focus ? "border-(--primary)" : ""
// 							)}>
// 							<Image
// 								className={fnCss.sum(
// 									"no-drag",
// 									disabled ? "filter-(--dark-alt-filter)" : "filter-(--primary-alt-filter)"
// 								)}
// 								src={imgSrc}
// 								alt="icon"
// 								width={25}
// 								height={25}
// 							/>
// 						</div>
// 					)}
//
// 					<input
// 						{...{placeholder, disabled, name, autoComplete, inputMode, type, required}}
// 						onChange={onChangeHandler}
// 						className="outline-none w-full pl-2 pr-2 grow"
// 						onKeyDown={onKeyDownHandler}
// 						onFocus={() => setFocus(true)}
// 						onBlur={() => setFocus(false)}
// 						value={value}
// 						title={invalidMessage}
// 					/>
//
// 					{value && (
// 						<Image
// 							src={ImgCross}
// 							alt="clear"
// 							width={20}
// 							height={20}
// 							onClick={() => {
// 								setValue("");
// 								onChange("");
// 							}}
// 							className="absolute right-0 top-0 h-[2.5rem] no-drag mr-2 filter-(--text-2-filter) hover:filter-(--primary-filter)"
// 						/>
// 					)}
// 				</div>
// 				{children && <div className="ml-2">{children}</div>}
// 			</div>
//
// 			<div className="min-h-[1.5rem] pl-2 text-(--danger)">{invalid && invalidMessage}</div>
// 		</div>
// 	);
// }
>>>>>>> 95423f4 (save)
