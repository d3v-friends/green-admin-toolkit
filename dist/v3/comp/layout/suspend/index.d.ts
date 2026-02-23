import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
export interface SuspendProps {
    pending: boolean;
    children?: ReactNode;
    image?: StaticImageData;
    wait?: number;
}
export default function ({ children, image, pending, wait }: Readonly<SuspendProps>): React.ReactPortal | null;
