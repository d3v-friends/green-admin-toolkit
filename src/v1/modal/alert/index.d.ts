import { ReactNode } from "react";
import { Nullable } from "nextjs-tools";
interface Props {
    value: Nullable<AlertModalValue>;
    className?: string;
}
export type AlertModalValue = {
    time: number;
    content: ReactNode;
};
export default function ({ value, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
