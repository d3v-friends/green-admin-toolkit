import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
import { Sorter } from "../../../../index";
interface Props {
    children?: ReactNode;
    onChange?: FnBase<Sorter>;
    columnKey?: string;
    activate?: boolean;
}
export default function ({ children, onChange, activate }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
