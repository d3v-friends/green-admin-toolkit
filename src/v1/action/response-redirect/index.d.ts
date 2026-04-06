import { ActionState } from "nextjs-tools";
interface Props {
    state: ActionState<unknown, unknown>;
    href: string;
}
export default function ({ state, href }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
