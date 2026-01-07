import { MouseEventHandler, ReactNode } from "react";
import { ErrorModalComponent } from ".";
interface Props {
    ok?: ReactNode;
    title?: ReactNode;
    content: (err: string) => ReactNode;
    onClickOk?: MouseEventHandler<HTMLButtonElement>;
}
export default function ({ ok, title, content, onClickOk }: Readonly<Props>): ErrorModalComponent;
export {};
