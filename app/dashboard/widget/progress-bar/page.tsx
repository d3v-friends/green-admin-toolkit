"use client";
import React, {useEffect, useRef, useState} from "react";
import {LoadingBar, Panel, ProgressBar} from "@app";

export default function () {
	const [value, setValue] = useState(0);
	const refValue = useRef(value);

	useEffect(() => {
		refValue.current = value;
	}, [value]);

	const onCountUp = () => {
		setValue(refValue.current + 10);
	};

	useEffect(() => {
		const interval = setInterval(onCountUp, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<h4>Progress bar</h4>

				<ProgressBar
					label="primary"
					value={10}
					max={100}
				/>

				<ProgressBar
					label="danger"
					value={100}
					max={100}
					color="danger"
				/>

				<ProgressBar
					label="warning"
					value={30}
					max={100}
					color="warning"
				/>

				<ProgressBar
					label="info"
					value={40}
					max={100}
					color="info"
				/>

				<ProgressBar
					label="simple"
					value={value % 110}
					max={100}
				/>

				<LoadingBar
					value={value % 110}
					max={100}
				/>
			</Panel>
		</div>
	);
}
