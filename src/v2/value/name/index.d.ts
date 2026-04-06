import type { Align } from "../base";
interface Props {
    align?: Align;
    children?: string;
}
export default function ({ children, align }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
