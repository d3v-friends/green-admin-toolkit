import { ReactNode } from "react";
export interface AlertOptions {
    header: ReactNode;
    okText: ReactNode;
}
export default function (children: ReactNode, { header, okText }?: Partial<AlertOptions>): void;
