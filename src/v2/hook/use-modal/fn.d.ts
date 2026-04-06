import { MouseEventHandler, ReactNode } from "react";
type OkProps = {
    title?: ReactNode;
    content?: ReactNode;
    ok?: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
declare function ok({ title, content, ok, onClick }: OkProps): ReactNode;
type OkCancelProps = {
    title?: ReactNode;
    content?: ReactNode;
    disableCloseButton?: boolean;
    ok?: ReactNode;
    cancel?: ReactNode;
    onClickOk: MouseEventHandler<HTMLButtonElement>;
    onClickCancel: MouseEventHandler<HTMLButtonElement>;
};
declare function okCancel({ title, content, ok, cancel, onClickOk, onClickCancel }: OkCancelProps): ReactNode;
declare const _default: {
    ok: typeof ok;
    okCancel: typeof okCancel;
};
export default _default;
