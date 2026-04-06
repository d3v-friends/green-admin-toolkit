import { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
interface Props {
    items: ContextMenuItem[];
}
export type ContextMenuItem = {
    label: ReactNode;
    onClick: FnVoid;
};
export default function ({ items }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
