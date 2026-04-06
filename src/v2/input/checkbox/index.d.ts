import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
import { OnClickCheckboxInterceptor } from "../theme";
type Props = InputProps & Partial<InputAttribute>;
interface InputProps {
    value: boolean;
    onChange: FnBase<boolean>;
    label: ReactNode;
    onClickInterceptor?: OnClickCheckboxInterceptor;
}
interface InputAttribute {
    name: string;
}
export default function ({ value, onChange, label, onClickInterceptor, name, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
