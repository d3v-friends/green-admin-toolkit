import { ReactNode } from "react";
import { ResponseModalChildren } from "./index";
interface Props {
    ok?: ReactNode;
    title?: ReactNode;
    content?: ReactNode;
}
export default function <RESPONSE>({ ok, title, content }: Readonly<Props>): ResponseModalChildren<RESPONSE>;
export {};
