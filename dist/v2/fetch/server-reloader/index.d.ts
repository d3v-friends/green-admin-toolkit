import { ReactNode } from "react";
import { Fetch, TypedDocumentString } from "../types";
import { ReloaderDelay } from "../reloader";
interface Props<TResult, TVariables> {
    query: TypedDocumentString<TResult, TVariables>;
    fetch: Fetch<TResult, TVariables>;
    variables?: TVariables;
    delay?: ReloaderDelay;
    children: ReloaderChildren<ReloaderData<TResult>>;
}
export type ReloaderData<T> = T & {
    syncAt: Date;
};
export type ReloaderChildren<T> = (v: ReloaderData<T>) => ReactNode;
export default function <TResult, TVariables>({ query, fetch, variables, delay, children, }: Readonly<Props<TResult, TVariables>>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
