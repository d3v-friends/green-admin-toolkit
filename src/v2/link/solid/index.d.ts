import { ButtonSolidProps } from "../../button/solid";
interface Props extends Omit<ButtonSolidProps, "onClick" | "onMiddleClick"> {
    href: string;
}
export default function (props: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
