import { ButtonOutlineProps } from "../../button/outline";
interface Props extends Omit<ButtonOutlineProps, "onClick" | "onMiddleClick"> {
    href: string;
}
export default function (props: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
