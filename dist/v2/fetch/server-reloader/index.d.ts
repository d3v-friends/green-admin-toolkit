import { ReactNode } from "react";
import { Fetch } from "../types";
import { ReloaderDelay } from "../reloader";
interface Props<TResult> {
    fetch: Fetch<TResult>;
    delay?: ReloaderDelay;
    children: ReloaderChildren<ReloaderData<TResult>>;
}
export type ReloaderData<T> = T & {
    syncAt: Date;
};
export type ReloaderChildren<T> = (v: ReloaderData<T>) => ReactNode;
export default function <TResult>({ fetch, delay, children }: Readonly<Props<TResult>>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
