import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
export interface ModalBasicProps {
    children: ReactNode;
    disableEscapeKey?: boolean;
    disableCloseButton?: boolean;
    header?: ReactNode;
    open: boolean;
    onChange: FnBase<boolean>;
    className?: string;
    classNameHeader?: string;
    classNameContent?: string;
}
export default function ({ children, disableEscapeKey, disableCloseButton, header, open, onChange, className, classNameHeader, classNameContent, }: Readonly<ModalBasicProps>): import("react/jsx-runtime").JSX.Element;
