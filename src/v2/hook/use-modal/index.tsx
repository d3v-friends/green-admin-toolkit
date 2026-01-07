"use client";
import React, {ReactNode, useState} from "react";
import {createPortal} from "react-dom";

export type ModalFunction = (content: ReactNode) => void;

export default function (): [ReactNode, ModalFunction] {
	const [children, setChildren] = useState<ReactNode>(null);

	return [<>{children && createPortal(<>{children}</>, document.body)}</>, setChildren];
}
