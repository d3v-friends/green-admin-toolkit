import { ReactNode } from "react";
import { ActionState, FnBase } from "nextjs-tools";
interface Props<INPUT, RESPONSE> {
    children: ResponseModalChildren<RESPONSE>;
    state: ActionState<INPUT, RESPONSE>;
}
export type ResponseModalChildren<RESPONSE> = (onToggle: FnBase<boolean>, state: RESPONSE) => ReactNode;
export default function <INPUT, RESPONSE>({ state, children }: Readonly<Props<INPUT, RESPONSE>>): import("react/jsx-runtime").JSX.Element | null;
export {};
