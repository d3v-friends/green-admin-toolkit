"use server";
import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";
import Popup, {AsideChildrenComponent} from "./popup";

interface Props {
	children?: ReactNode;
	nav?: ReactNode;
	footer?: ReactNode;
	aside?: ReactNode;
	asideMobile?: AsideChildrenComponent;
	title?: ReactNode;
}

export default async function ({children, footer, aside, asideMobile, title, nav}: Readonly<Props>) {
	return (
		<>
			<main className={fnCss.sum("bg-(--bg-main) min-h-screen", "lg:pl-[15rem] pt-[3.5rem]")}>
				{children && <section className="p-2 lg:p-5">{children}</section>}
				{footer && <footer>{footer}</footer>}
			</main>

			<aside
				className={fnCss.sum(
					"hidden lg:block lg:fixed top-0 left-0 bg-(--bg-aside)",
					"w-[15rem] h-screen border-right"
				)}>
				{title}
				{aside}
			</aside>

			<nav
				className={fnCss.sum(
					"fixed top-0 h-[3.5rem] p-2",
					"left-0 lg:left-[15rem]",
					"w-full lg:w-[calc(100%-15rem)]",
					"bg-(--bg-nav)",
					"shadow-2xl shadow-[rgba(0,0,0,0.1)]",
					"flex items-center justify-end"
				)}>
				<div className="hidden lg:block">{nav}</div>
				<Popup>{asideMobile}</Popup>
			</nav>
		</>
	);
}
