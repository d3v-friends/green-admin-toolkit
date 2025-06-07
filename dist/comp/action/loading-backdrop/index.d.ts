import { ReactNode } from "react";
interface Props {
    pending: boolean;
    children?: ReactNode;
}
export default function ({ children, pending }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
