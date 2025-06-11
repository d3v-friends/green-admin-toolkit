import { ReactNode } from "react";
import { FormConfirmModalComponent } from "../form-confirm";
interface Props {
    ok?: ReactNode;
    cancel?: ReactNode;
    title?: ReactNode;
    content?: ReactNode;
}
export default function ({ ok, cancel, title, content }: Readonly<Props>): FormConfirmModalComponent;
export {};
