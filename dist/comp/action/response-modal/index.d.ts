import { ReactNode } from "react";
import { ActionState, FnBase } from "nextjs-tools";
interface Props {
    children: ResponseModalChildren;
    state: ActionState<unknown, unknown>;
}
export type ResponseModalChildren = (onToggle: FnBase<boolean>) => ReactNode;
export default function ({ state, children }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
