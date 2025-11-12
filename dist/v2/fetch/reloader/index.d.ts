import { ReactNode } from "react";
import { Fetch, TypedDocumentString } from "../types";
interface Props<TResult, TVariables> {
    data: TResult;
    fetch: Fetch<TResult, TVariables>;
    query: TypedDocumentString<TResult, TVariables>;
    variables?: TVariables;
    delay?: ReloaderDelay;
    children: ReloaderChildren<Data<TResult>>;
}
type Data<T> = T & {
    syncAt: Date;
};
export type ReloaderDelay = 5 | 10 | 15 | 20 | 30 | 60;
export type ReloaderChildren<T> = (v: Data<T>) => ReactNode;
export default function <TResult, TVariables>({ data: initData, fetch, query, variables, delay, children, }: Readonly<Props<TResult, TVariables>>): ReactNode;
export {};
