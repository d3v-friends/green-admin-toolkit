import { MouseEventHandler, ReactNode } from "react";
interface Props {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
    className?: string;
    backdropClassName?: string;
}
declare function Component({ children, onClick, className, backdropClassName, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
declare namespace Component {
    var __isStatic: boolean;
}
export default Component;
