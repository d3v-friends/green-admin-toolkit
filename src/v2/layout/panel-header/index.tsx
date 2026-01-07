import React, {ReactNode} from "react";

interface Props {
	children?: ReactNode;
	right?: ReactNode;
}

export default function ({children, right}: Readonly<Props>) {
	return (
		<div className="flex mb-2 lg:mb-4">
			<h5 className="grow">{children}</h5>
			{right}
		</div>
	);
}
