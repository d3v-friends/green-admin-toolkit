import { ReactNode } from "react";
interface Props<T extends string> {
    children: T;
    data: Record<string, {
        label: ReactNode;
        colorClassName?: string;
    }>;
    className?: string;
}
export default function <T extends string>({ children, data, className }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
