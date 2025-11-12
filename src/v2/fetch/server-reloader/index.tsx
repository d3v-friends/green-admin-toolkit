"use server";
import React, {ReactNode} from "react";
import {Fetch, TypedDocumentString} from "../types";
import Reloader, {ReloaderDelay} from "../reloader";
import {PageError} from "../../index";

interface Props<TResult, TVariables> {
	query: TypedDocumentString<TResult, TVariables>;
	fetch: Fetch<TResult, TVariables>;
	variables?: TVariables;
	delay?: ReloaderDelay;
	children: ReloaderChildren<ReloaderData<TResult>>;
}

export type ReloaderData<T> = T & {syncAt: Date};

export type ReloaderChildren<T> = (v: ReloaderData<T>) => ReactNode;

export default async function <TResult, TVariables>({
	query,
	fetch,
	variables,
	delay,
	children,
}: Readonly<Props<TResult, TVariables>>) {
	const {data, error} = await fetch(query, variables);

	if (error) return <PageError error={error} />;

	return (
		<Reloader
			data={data}
			variables={variables}
			delay={delay}
			fetch={fetch}
			query={query}>
			{children}
		</Reloader>
	);
}
