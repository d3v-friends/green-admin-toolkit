import React, {ReactNode} from "react";
import Layout from "../_comp/layout";

export default function ({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <Layout>{children}</Layout>;
}
