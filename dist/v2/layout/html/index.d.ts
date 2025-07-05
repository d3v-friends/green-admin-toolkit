import { ReactNode } from "react";
import "../../../../style/index.scss";
interface Props {
    children?: ReactNode | ReactNode[];
    lang?: string;
}
export default function ({ lang, children }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
