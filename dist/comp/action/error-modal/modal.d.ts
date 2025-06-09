import { ReactNode } from "react";
import { ErrorModalComponent } from ".";
interface Props {
    ok?: ReactNode;
    title?: ReactNode;
    content: (err: string) => ReactNode;
}
export default function ({ ok, title, content }: Readonly<Props>): ErrorModalComponent;
export {};
