"use client";
import React, {ReactNode, useState} from "react";
import {FnBase, fnCss, ImgSrc, Nullable} from "nextjs-tools";
import Calendar from "react-calendar";
import {ModalToggler} from "../..";
import Image from "next/image";
import {DateTime} from "luxon";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";

interface Props {
	value: Nullable<Date>;
	onChange: FnBase<Nullable<Date>>;
	imgSrc?: ImgSrc;
	className?: string;
	label?: ReactNode;
	timezone?: string;
	name?: string;
	hiddenInitButton?: boolean;
}

export default function ({
	className,
	label,
	imgSrc,
	value,
	onChange = () => {},
	timezone = "Asia/Seoul",
	name,
	hiddenInitButton = false,
}: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	const dateStr = value ? DateTime.fromISO(value.toISOString()).setZone(timezone).toFormat("yyyy.MM.dd") : "미정";
	return (
		<>
			<div className={className}>
				{label && <p className="mb-[-5px]">{label}</p>}
				<div
					className={fnCss.sum(
						"relative flex items-center border-all rounded-md h-[2.5rem] overflow-hidden"
					)}>
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
							hidden
							name={name}
							value={value?.toISOString() ?? ""}
							onChange={() => {}}
						/>
						<button
							type="button"
							className="hover:underline"
							onClick={() => setOpen(true)}>
							{dateStr}
						</button>
					</div>
					{value && !hiddenInitButton && (
						<button onClick={() => onChange(null)}>
							<Image
								src={ImgCross}
								alt="clear"
								width={20}
								height={20}
								className="absolute right-0 top-0 h-[2.5rem] no-drag mr-2 filter-(--text-2-filter) hover:filter-(--primary-filter)"
							/>
						</button>
					)}
				</div>
				<div className="min-h-[1.5rem]" />
			</div>

			<ModalToggler
				open={open}
				onChange={setOpen}>
				<Calendar
					locale={"ko-kr"}
					value={value}
					onChange={(value) => {
						if (value instanceof Date) {
							onChange(new Date(value.setHours(0, 0, 0, 0)));
							setOpen(false);
						}
					}}
				/>
			</ModalToggler>
		</>
	);
}
