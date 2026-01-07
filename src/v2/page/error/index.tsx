import React from "react";

interface Props {
	error: Error;
}

export default function ({error}: Readonly<Props>) {
	return <>{error.message}</>;
}
