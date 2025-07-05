import { ReactNode } from "react";
import { FormConfirmModalComponent } from "../../form/form-confirm";
interface Props {
    ok?: ReactNode;
    cancel?: ReactNode;
    title?: ReactNode;
    content?: ReactNode;
    className?: string;
}
export default function ({ ok, cancel, title, content, className, }: Readonly<Props>): FormConfirmModalComponent;
export {};
