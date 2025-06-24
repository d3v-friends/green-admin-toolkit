import { ReactNode } from "react";
interface Props {
    items: PanelPagerData[];
    label?: ReactNode;
}
export type PanelPagerData = {
    label: ReactNode;
    href: string;
};
export default function ({ items, label }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
