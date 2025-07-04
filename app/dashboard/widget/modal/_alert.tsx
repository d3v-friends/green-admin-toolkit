"use client";
import React, {ReactNode, useState} from "react";
import {Nullable} from "nextjs-tools";
import {AlertModalValue} from "@v1/modal/alert";
import {Button, ModalAlert} from "@root";

interface Props {
	children?: ReactNode;
}

export default function ({}: Readonly<Props>) {
	const [alert, setAlert] = useState<Nullable<AlertModalValue>>();
	return (
		<>
			<ModalAlert value={alert} />
			<Button
				onClick={() =>
					setAlert({
						time: Date.now(),
						content: <h5>Alert - {new Date().toISOString()}</h5>,
					})
				}>
				Alert
			</Button>
		</>
	);
}
