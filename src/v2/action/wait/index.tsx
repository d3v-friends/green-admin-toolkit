"use client";
import React, {ReactNode} from "react";
import {concat, Undefined} from "nextjs-tools";

interface Props<T> {
	data: Undefined<T>;
	children: WaitChildren<T>;
	fallback?: ReactNode;
}

export type WaitChildren<T> = (data: T) => ReactNode;

export default function <T>({data, children, fallback = <Fallback />}: Readonly<Props<T>>) {
	return (
		<>
			{!data && fallback}
			<div className={concat("transition duration-300", data ? "opacity-100" : "opacity-0")}>
				{data && children(data)}
			</div>
		</>
	);
}

// todo 추후 디자인하기
function Fallback({}: Readonly<{children?: ReactNode}>) {
	return <div className="h-20 w-full flex items-center justify-center">로딩중</div>;
}
