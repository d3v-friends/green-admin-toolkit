"use client";
import {ReactNode} from "react";
import modal from "./index";
import Container from "../../comp/modal/elem/container";
import Header from "../../comp/modal/elem/header";
import Content from "../../comp/modal/elem/content";

export interface AlertOptions {
	header: ReactNode;
	okText: ReactNode;
}

export default function (children: ReactNode, {header = "알림", okText = "확인"}: Partial<AlertOptions> = {}) {
	modal((onClose) => (
		<Container>
			{header && <Header>{header}</Header>}
			<Content>
				<div>{children}</div>
				<div className="text-right pt-2">
					<button
						autoFocus
						className="filled"
						onClick={onClose}>
						{okText}
					</button>
				</div>
			</Content>
		</Container>
	));
}
