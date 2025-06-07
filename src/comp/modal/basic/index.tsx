"use client";
import React, {ReactNode} from "react";
import Toggler from "../toggler";
import {FnBase} from "nextjs-tools";
import Elem from "../element";

export interface ModalBasicProps {
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
}: Readonly<ModalBasicProps>) {
	return (
		<Toggler
			onChange={onChange}
			open={open}
			disableEscapeKey={disableEscapeKey}>
			<Elem.Body className={className}>
				<Elem.Header
					className={classNameHeader}
					onChange={onChange}
					disableCloseButton={disableCloseButton}>
					{header}
				</Elem.Header>
				<Elem.Content className={classNameContent}>{children}</Elem.Content>
			</Elem.Body>
		</Toggler>
	);
}
