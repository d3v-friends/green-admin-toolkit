import React, {ReactNode} from "react";

export default function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <>{children}</>;
}
