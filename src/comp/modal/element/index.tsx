import React, {MouseEventHandler, ReactNode} from "react";
import {FnBase, fnCss} from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
import {Button} from "@app/index";

const padding = "p-2 lg:pl-4 lg:pr-4";

function Body({
	children,
	className = "",
}: Readonly<{
	children?: ReactNode;
	className?: string;
}>) {
	return <div className={fnCss.sum("bg-(--bg-modal) shadow-2xl rounded-md", className)}>{children}</div>;
}

function Header({
	children,
	className = "",
	disableCloseButton = false,
	onChange = () => {},
}: Readonly<{
	children?: ReactNode;
	className?: string;
	disableCloseButton?: boolean;
	onChange?: FnBase<boolean>;
}>) {
	return (
		<div className={fnCss.sum(className, padding, "flex border-bottom text-lg")}>
			{children}
			{!disableCloseButton && (
				<div className="grow text-right">
					<button
						className="ml-2 no-drag"
						onClick={() => onChange(false)}>
						<Image
							className="filter-(--text-1-filter) w-[1rem] hover:filter-(--primary-filter)"
							src={ImgCross}
							alt="close"
							width={20}
							height={20}
						/>
					</button>
				</div>
			)}
		</div>
	);
}

function Content({className = "", children}: Readonly<{children?: ReactNode; className?: string}>) {
	return <div className={fnCss.sum(className, padding, "min-h-[7rem]")}>{children}</div>;
}

function Ok({
	children = "확인",
	onClick,
}: Readonly<{
	children?: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}>) {
	return (
		<div className={fnCss.sum("text-right", padding)}>
			<Button
				className="w-20"
				onClick={onClick}>
				{children}
			</Button>
		</div>
	);
}

function OkCancel({
	ok = "확인",
	cancel = "취소",
	onClickOk,
	onClickCancel,
}: Readonly<{
	ok?: ReactNode;
	cancel?: ReactNode;
	onClickOk: MouseEventHandler<HTMLButtonElement>;
	onClickCancel: MouseEventHandler<HTMLButtonElement>;
}>) {
	return (
		<div className="flex justify-end">
			<div className={fnCss.sum("grid grid-cols-2 gap-2 w-[15rem]", padding)}>
				<Button
					className="mr-2"
					style="text"
					onClick={onClickCancel}>
					{cancel}
				</Button>
				<Button onClick={onClickOk}>{ok}</Button>
			</div>
		</div>
	);
}

export default {
	Body,
	Header,
	Content,
	Ok,
	OkCancel,
};
