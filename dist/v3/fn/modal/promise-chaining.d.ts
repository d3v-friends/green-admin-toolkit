import { AlertOptions } from "./g-alert";
import { ReactNode } from "react";
import { SuspendProps } from "../../comp/layout/suspend";
declare global {
    interface Promise<T> {
        alert(book: Record<string, ReactNode>, opts?: Partial<AlertOptions>): void;
        suspend<TResult1 = T>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, opts?: Partial<SuspendProps>): Promise<TResult1>;
    }
}
export default function (): null;
