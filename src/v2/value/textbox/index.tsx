import React from "react";

interface Props {
	children?: string;
	className?: string;
}

export default function ({className, children = ""}: Readonly<Props>) {
	return (
		<div
			className={className}
			style={{whiteSpace: "preserve"}}
			dangerouslySetInnerHTML={{__html: children}}
		/>
	);
}
