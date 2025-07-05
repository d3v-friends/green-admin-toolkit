import { FnBase } from "nextjs-tools";
interface Props {
    value: string;
    onChange: FnBase<string>;
    className?: string;
    colors?: string[];
}
export default function ({ value, onChange, colors, className, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
