"use client";
import React, {ReactNode} from "react";
import Toggler from "../toggler";
import {FnBase, fnCss} from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";

interface Props {
	children: ReactNode;
	disableEscapeKey?: boolean;
	disableCloseButton?: boolean;
	header?: ReactNode;
	open: boolean;
	onChange: FnBase<boolean>;
	className?: string;
	classNameHeader?: string;
	classNameContent?: string;
}

export default function ({
	children,
	disableEscapeKey,
	disableCloseButton,
	header,
	open,
	onChange,
	className = "min-w-[20rem]",
	classNameHeader = "text-xl font-bold",
	classNameContent = "",
}: Readonly<Props>) {
	return (
		<>
			<Toggler
				onChange={onChange}
				open={open}
				disableEscapeKey={disableEscapeKey}>
				<div className={fnCss.sum("bg-(--bg-modal) shadow-2xl rounded-md", className)}>
					<div
						className={fnCss.sum(
							classNameHeader,
							"p-2 lg:pl-4 lg:pr-4",
							"flex items-center border-bottom"
						)}>
						{header}
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
					<div className={fnCss.sum(classNameContent, "p-2 lg:pl-4 lg:pr-4")}>{children}</div>
				</div>
			</Toggler>
		</>
	);
}
