"use client";
import React, {MouseEventHandler, ReactNode, useState} from "react";
import {FnBase, fnCss, ImgSrc} from "nextjs-tools";
import {ModalElement, ModalToggler} from "../..";
import Image, {StaticImageData} from "next/image";
import {DateTime} from "luxon";
import ImgPrev from "web-asset/svg/regular/fi-rr-angle-left.svg";
import ImgNext from "web-asset/svg/regular/fi-rr-angle-right.svg";

interface Props {
	value: Date;
	onChange: FnBase<Date>;
	imgSrc?: ImgSrc;
	className?: string;
	label?: ReactNode;
	timezone?: string;
	name?: string;
}

const {Body, Content} = ModalElement;

export default function ({
	className,
	label,
	imgSrc,
	value,
	onChange = () => {},
	timezone = "Asia/Seoul",
	name,
}: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	const dateStr = value ? DateTime.fromISO(value.toISOString()).setZone(timezone).toFormat("yyyy.MM") : "미정";

	const onClickPrev = () => {
		onChange(new Date(value.setFullYear(value.getFullYear() - 1, 0, 1)));
	};
	const onClickNext = () => {
		onChange(new Date(value.setFullYear(value.getFullYear() + 1, 0, 1)));
	};
	const onClickMonth = (month: number) => {
		onChange(new Date(new Date(value.setFullYear(value.getFullYear(), month - 1, 1)).setUTCHours(0, 0, 0, 0)));
		setOpen(false);
	};

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
				</div>
				<div className="min-h-[1.5rem]" />
			</div>

			<ModalToggler
				open={open}
				onChange={setOpen}>
				<Body>
					<Content>
						<div className="flex items-center mb-4">
							<YearButton
								imgSrc={ImgPrev}
								onClick={onClickPrev}
							/>
							<h5 className="grow text-center p-0">{value.getFullYear()} 년</h5>
							<YearButton
								imgSrc={ImgNext}
								onClick={onClickNext}
							/>
						</div>

						<div className="grid grid-cols-4 gap-2 lg:gap-4">
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month, i) => (
								<button
									type="button"
									onClick={() => onClickMonth(month)}
									className={fnCss.sum(
										"no-drag p-2 border-all rounded-md text-center",
										"hover:border-(--primary) hover:text-(--primary)"
									)}
									key={i}>
									{month} 월
								</button>
							))}
						</div>
					</Content>
				</Body>
			</ModalToggler>
		</>
	);
}

function YearButton({
	imgSrc,
	onClick,
}: Readonly<{
	imgSrc: StaticImageData;
	onClick: MouseEventHandler<HTMLButtonElement>;
}>) {
	return (
		<button
			type="button"
			className="filter-(--text-2-filter) hover:filter-(--primary-filter) outline-none"
			onClick={onClick}>
			<Image
				className="no-drag"
				src={imgSrc}
				alt="prev"
				width="20"
				height="20"
			/>
		</button>
	);
}
