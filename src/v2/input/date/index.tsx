"use client";
import React, {ReactNode, useState} from "react";
import {FnBase, fnCss, Nullable} from "nextjs-tools";
import Theme from "../theme";
import ImgDate from "web-asset/svg/regular/fi-rr-calendar-day.svg";
import {DateTime} from "luxon";
import {ModalToggler} from "../../../v1";
import Calendar from "react-calendar";
import {StaticImageData} from "next/image";

type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;

export type OnSelectDateEventHandler = (
	value: Nullable<Date>,
	event: React.MouseEvent<HTMLButtonElement>
) => Nullable<Date>;

const DefaultOnSelectDateEventHandler: OnSelectDateEventHandler = (value, _) => {
	if (!(value instanceof Date)) {
		return null;
	}
	return new Date(value.setHours(0, 0, 0, 0));
};

interface InputProps {
	value: Nullable<Date>;
	onChange: FnBase<Nullable<Date>>;
	label?: ReactNode;
	className?: string;
	icon?: StaticImageData;
}

interface InputConvenience {
	format: string;
	onSelectDate: OnSelectDateEventHandler;
}

interface InputAttribute {
	name: string;
	disabled: boolean;
	required: boolean;
}

const {Label, Outline, Icon} = Theme;

export default function ({
	value,
	onChange,
	label,
	className,
	icon = ImgDate,

	// convenience
	format = "yyyy-MM-dd",
	onSelectDate = DefaultOnSelectDateEventHandler,

	// attributes
	name,
	disabled = false,
	required = false,
}: Readonly<Props>) {
	const [isFocus, setIsFocus] = useState(false);
	const [isShowCalendar, setIsShowCalendar] = useState(false);

	const strDate = value ? DateTime.fromJSDate(value).setZone("Asia/Seoul").toFormat(format) : "날짜";

	return (
		<div className={className}>
			<Label>{label}</Label>
			<Outline
				isFocus={isFocus}
				isInvalid={false}>
				<Icon
					isFocus={isFocus}
					isDisabled={disabled}>
					{icon}
				</Icon>

				<button
					type="button"
					className={fnCss.sum(
						"outline-none pl-2 pr-2 text-left",
						disabled ? "" : " hover:cursor-pointer hover:underline"
					)}
					onMouseOver={() => setIsFocus(true)}
					onMouseOut={() => setIsFocus(false)}
					onClick={() => setIsShowCalendar(true)}
					disabled={disabled}>
					{strDate}
				</button>
			</Outline>

			<input
				hidden
				{...{name, disabled, required}}
				value={value ? value.toISOString() : ""}
				onChange={(e) => onChange(new Date(e.target.value))}
			/>

			<ModalToggler
				open={isShowCalendar}
				onChange={setIsShowCalendar}
				onClickBackdrop={(e) => {
					e.stopPropagation();
					onChange(null);
					setIsShowCalendar(false);
				}}>
				<Calendar
					locale={"ko-kr"}
					value={value}
					onChange={(value, e) => {
						let date: Nullable<Date> = value instanceof Date ? value : null;
						onChange(onSelectDate(date, e));
						setIsShowCalendar(false);
					}}
				/>
			</ModalToggler>
		</div>
	);
}
