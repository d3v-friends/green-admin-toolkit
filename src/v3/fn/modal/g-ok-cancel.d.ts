import { ReactNode } from "react";
export interface OkCancelProps {
    header: ReactNode;
    okText: ReactNode;
    cancelText: ReactNode;
}
export default function (children: ReactNode, { header, okText, cancelText }?: Partial<OkCancelProps>): Promise<boolean>;
