import React from "react";

interface Props {
	error: string;
	parser: Record<string, string>;
}

export default function ({error, parser}: Readonly<Props>) {
	for (let key in parser) {
		if (error.includes(key)) {
			error = parser[key];
			break;
		}
	}

	return <p>{error}</p>;
}
