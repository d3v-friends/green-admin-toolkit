import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props {
    children?: ReactNode;
    defaultValue?: boolean;
    onChange?: FnBase<boolean>;
    className?: string;
}
export default function ({ children, defaultValue, onChange, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
