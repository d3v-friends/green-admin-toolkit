import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props {
    children?: AsideChildrenComponent;
}
export type AsideChildrenComponent = (onToggle: FnBase<boolean>) => ReactNode;
export default function ({ children }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
