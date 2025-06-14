import { ReactNode } from "react";
import { ActionForm, FnVoid } from "nextjs-tools";
interface Props<INPUT> {
    children: FormConfirmChildren;
    beforeSubmit?: (payload: FormData) => boolean;
    action: (payload: FormData) => void;
    pending: boolean;
    form: ActionForm<INPUT>;
}
export type FormConfirmChildren = (onSubmit: FnVoid) => ReactNode;
export default function <INPUT>({ children, action, pending, beforeSubmit, form }: Readonly<Props<INPUT>>): import("react/jsx-runtime").JSX.Element;
export {};
