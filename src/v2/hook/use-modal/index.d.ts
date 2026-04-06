import { ReactNode } from "react";
export type ModalFunction = (content: ReactNode) => void;
export default function (): [ReactNode, ModalFunction];
