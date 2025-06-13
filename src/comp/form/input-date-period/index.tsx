"use client";
import React, {ReactNode, useState} from "react";
import {FnBase, fnCss, ImgSrc} from "nextjs-tools";
import "@asset/style/react-calendar.scss";
import Image from "next/image";
import Calendar from "react-calendar";
import {ModalToggler} from "@app/index";
import {DateTime} from "luxon";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";

interface Props {
	value?: InputDatePeriodValue;
	onChange?: FnBase<InputDatePeriodValue>;
	imgSrc?: ImgSrc;
	className?: string;
	label?: ReactNode;
	timezone?: string;
	name?: {
		start: string;
		end: string;
	};
}

export type InputDatePeriodValue = Partial<{
	start: Date;
	end: Date;
}>;

export default function ({
	className,
	label,
	imgSrc,
	value = {},
	onChange = () => {},
	timezone = "Asia/Seoul",
	name,
}: Readonly<Props>) {
	const [start, setStart] = useState(false);
	const [end, setEnd] = useState(false);
	const strStart = value.start ? DateTime.fromJSDate(value.start).setZone(timezone).toFormat("yyyy.MM.dd") : "미정";
	const strEnd = value.end ? DateTime.fromJSDate(value.end).setZone(timezone).toFormat("yyyy.MM.dd") : "미정";

	// todo 추후 start, end 날짜순서 체크하는 기능 추가하기
	return (
		<div className={className}>
			{label && <p className="mb-[-5px]">{label}</p>}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
				<div className={fnCss.sum("flex items-center border-all rounded-md h-[2.5rem] overflow-hidden")}>
					{imgSrc && (
						<div className={fnCss.sum("border-right h-full flex pl-2 pr-2 bg-(--primary)")}>
							<Image
								className={fnCss.sum("no-drag filter-(--primary-alt-filter)")}
								src={imgSrc}
								alt="icon"
								width={25}
								height={25}
							/>
						</div>
					)}
					<div className="grow pl-2 pr-2">
						<input
							name={name?.start}
							value={value?.start?.toISOString() ?? ""}
							hidden
							onChange={() => {}}
						/>
						<button
							className="hover:underline"
							onClick={() => setStart(true)}>
							{strStart}
						</button>
					</div>

					{value.start && (
						<button onClick={() => onChange({...value, start: undefined})}>
							<Image
								src={ImgCross}
								alt="clear"
								width={20}
								height={20}
								className="no-drag mr-2 w-[0.7rem] filter-(--text-2-filter) hover:filter-(--primary-filter)"
							/>
						</button>
					)}
				</div>

				<div className={fnCss.sum("flex items-center border-all rounded-md h-[2.5rem] overflow-hidden pl-2")}>
					<input
						name={name?.end}
						value={value?.end?.toISOString() ?? ""}
						hidden
						onChange={() => {}}
					/>

					<button
						className="hover:underline"
						onClick={() => setEnd(true)}>
						{strEnd}
					</button>

					<div className="grow" />

					{value.end && (
						<button onClick={() => onChange({...value, end: undefined})}>
							<Image
								src={ImgCross}
								alt="clear"
								width={20}
								height={20}
								className="no-drag mr-2 w-[0.7rem] filter-(--text-2-filter) hover:filter-(--primary-filter)"
							/>
						</button>
					)}
				</div>
			</div>

			<div className="min-h-[1.5rem]" />

			<Modal
				value={value?.start}
				open={start}
				onChangeOpen={setStart}
				onChange={(start) => onChange({...value, start})}
			/>

			<Modal
				value={value?.end}
				open={end}
				onChangeOpen={setEnd}
				onChange={(end) => onChange({...value, end})}
			/>
		</div>
	);
}

function Modal({
	value,
	onChange,
	open,
	onChangeOpen,
}: Readonly<{
	value?: Date;
	onChange: FnBase<Date>;
	open: boolean;
	onChangeOpen: FnBase<boolean>;
}>) {
	return (
		<ModalToggler
			open={open}
			onChange={onChangeOpen}>
			<Calendar
				locale={"ko-kr"}
				value={value}
				onChange={(date, event) => {
					if (!(date instanceof Date)) return;
					onChange(new Date(date.setHours(0, 0, 0, 0)));
					onChangeOpen(false);
				}}
			/>
		</ModalToggler>
	);
}
