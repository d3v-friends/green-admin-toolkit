import { ReactNode } from "react";
interface Props {
    items: PanelPagerData[];
}
export type PanelPagerData = {
    label: ReactNode;
    href: string;
};
export default function ({ items }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
