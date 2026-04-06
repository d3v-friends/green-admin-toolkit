import { ButtonTextProps } from "../../button/text";
interface Props extends Omit<ButtonTextProps, "onClick" | "onMiddleClick"> {
    href: string;
}
export default function (props: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
