import type { Align } from "../base";
interface Props {
    children?: string;
    format?: string;
    align?: Align;
}
export default function ({ children, format, align }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
