import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props {
    children?: ReactNode;
    asc?: string;
    desc?: string;
    initValue?: string;
    onChange?: FnBase<string>;
}
export default function ({ children, asc, desc, initValue, onChange, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
