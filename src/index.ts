// @comp
import {ReactNode} from "react";

export {default as LayoutBody} from "@comp/layout/body";
export {default as LayoutBase} from "@comp/layout/base";
export {default as LayoutBlank} from "@comp/layout/blank";
export {default as LayoutElementTitle} from "@comp/layout/base/title";
export {default as LayoutElementNavItemLink} from "@comp/layout/base/nav-item-link";
export {default as LayoutElementNavItemButton} from "@comp/layout/base/nav-item-button";
export {default as LayoutAsideAccordion} from "@comp/layout/base/aside-accordion";
export {default as LayoutAsideAccordionLink} from "@comp/layout/base/aside-accordion-link";

// widget
export {default as Panel} from "@comp/widget/panel";
export {default as PanelBorder} from "@comp/widget/panel-border";
export {default as ScreenCenter} from "@comp/widget/screen-center";
export {default as Button} from "@comp/widget/button";
export {default as ButtonLink} from "@comp/widget/button-link";
export {default as Markdown} from "@comp/widget/markdown";
export {default as TableClick} from "@comp/widget/table/click";
export {default as TableLink} from "@comp/widget/table/link";
export {default as TableList} from "@comp/widget/table/list";
export {default as Pager} from "@comp/widget/pager";

// modal
export {default as ModalBase} from "@comp/modal/base";
export {default as ModalToggler} from "@comp/modal/toggler";
export {default as ModalBasic} from "@comp/modal/basic";

// form
export {default as InputString} from "@comp/form/input-string";
export {default as InputCheckbox} from "@comp/form/input-checkbox";

// @fn
export {default as ThemeToggler} from "@fn/wrap/theme-toggler";
export {default as fnTheme} from "@fn/wrap/theme-toggler/fn";

// styles
export type ColorStyle = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "dark" | string;

export type TableCol<T> = {
	name: ReactNode;
	parser: (v: T, i: number) => ReactNode;
	colClassName?: string;
	headerClassName?: string;
	cellClassName?: string;
};
