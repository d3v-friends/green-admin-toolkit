import React, { ReactNode } from "react";
interface Props {
    children: ReactNode;
    sortkey?: string;
}
export default function ({ children, sortkey }: Readonly<Props>): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
