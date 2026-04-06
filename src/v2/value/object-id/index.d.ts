import type { Align } from "../base";
interface Props {
    align?: Align;
    children?: string;
    copyable?: boolean;
}
export default function ({ children, align, copyable }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
