import { MouseEventHandler, ReactNode } from "react";
import { ResponseModalChildren } from "./";
interface Props {
    ok?: ReactNode;
    title?: ReactNode;
    content?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export default function <RESPONSE>({ ok, title, content, onClick, }: Readonly<Props>): ResponseModalChildren<RESPONSE>;
export {};
