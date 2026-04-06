import { ReactNode } from "react";
import { Theme } from "./fn";
interface Props {
    children?: (props: ChildrenPros) => ReactNode;
}
interface ChildrenPros {
    toggle: () => void;
    theme: Theme;
}
export default function ({ children }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
