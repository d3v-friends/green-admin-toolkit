import { ReactNode } from "react";
import { Fetch } from "../types";
interface Props<TResult> {
    data: TResult;
    fetch: Fetch<TResult>;
    delay?: ReloaderDelay;
    children: ReloaderChildren<Data<TResult>>;
}
type Data<T> = T & {
    syncAt: Date;
};
export type ReloaderDelay = 5 | 10 | 15 | 20 | 30 | 60;
export type ReloaderChildren<T> = (v: Data<T>) => ReactNode;
export default function <TResult>({ data: initData, fetch, delay, children }: Readonly<Props<TResult>>): ReactNode;
export {};
