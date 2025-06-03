import React, {ReactNode} from "react";

interface Props {
	children?: ReactNode | ReactNode[];
}

export default function ({children}: Readonly<Props>) {
	return <section className="bg-(--bg-main) min-w-screen min-h-screen">{children}</section>;
}
