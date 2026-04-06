import { MouseEventHandler, ReactNode } from "react";
interface Props {
    children?: ReactNode;
    className?: string;
    menu: RightButtonMenuItem[];
}
export type RightButtonMenuItem = {
    label: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    borderTop?: boolean;
};
export default function ({ className, children, menu }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
