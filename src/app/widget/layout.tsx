import React, {ReactNode} from "react";
import Layout from "@page/_comp/layout";

export default function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <Layout>{children}</Layout>;
}
