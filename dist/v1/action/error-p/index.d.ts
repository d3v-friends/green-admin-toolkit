import { ActionState } from "nextjs-tools";
import { ColorStyle } from "../../../index";
interface Props {
    state: ActionState<unknown, unknown>;
    printer?: Record<string, string>;
    className?: string;
    color?: ColorStyle;
}
export default function ({ className, color, state, printer }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
