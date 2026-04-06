import { ReactNode } from "react";
import { ActionState, FnBase } from "nextjs-tools";
interface Props {
    children: ErrorModalComponent;
    state: ActionState<unknown, unknown>;
}
export type ErrorModalComponent = (onToggle: FnBase<boolean>, err: string) => ReactNode;
export default function ({ state, children }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
