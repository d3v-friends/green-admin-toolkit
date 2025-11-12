"use server";
import React, {ReactNode} from "react";
import {Fetch} from "../types";
import Reloader, {ReloaderDelay} from "../reloader";
import {PageError} from "../../index";

interface Props<TResult> {
	fetch: Fetch<TResult>;
	delay?: ReloaderDelay;
	children: ReloaderChildren<ReloaderData<TResult>>;
}

export type ReloaderData<T> = T & {syncAt: Date};

export type ReloaderChildren<T> = (v: ReloaderData<T>) => ReactNode;

export default async function <TResult>({fetch, delay, children}: Readonly<Props<TResult>>) {
	const {data, error} = await fetch();

	if (error) return <PageError error={error} />;

	return (
		<Reloader
			data={data}
			delay={delay}
			fetch={fetch}>
			{children}
		</Reloader>
	);
}
