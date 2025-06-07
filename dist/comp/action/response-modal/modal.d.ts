import { ReactNode } from "react";
import { ResponseModalChildren } from "./index";
interface Props {
    ok?: ReactNode;
    title?: ReactNode;
    content?: ReactNode;
}
export default function ({ ok, title, content }: Readonly<Props>): ResponseModalChildren;
export {};
