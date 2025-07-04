// @comp
import {ReactNode} from "react";

export {default as LayoutBody} from "./layout/body";
export {default as LayoutBase} from "./layout/base";
export {default as LayoutBlank} from "./layout/blank";
export {default as LayoutTitle} from "./layout/base/title";
export {default as LayoutNavItemLink} from "./layout/base/nav-item-link";
export {default as LayoutNavItemButton} from "./layout/base/nav-item-button";
export {default as LayoutAsideAccordion} from "./layout/base/aside-accordion";
export {default as LayoutAsideAccordionLink} from "./layout/base/aside-accordion-link";
export {default as LayoutNavMobileMenuButton} from "./layout/base/popup";

// widget
export {default as PanelBorder} from "./widget/panel-border";
export {default as Button} from "./widget/button";
export {default as ButtonLink} from "./widget/button-link";
export {default as Markdown} from "./widget/markdown";
export {default as PanelPager} from "./widget/panel-pager";
export {default as Chart} from "./widget/chart";
export {default as ProgressBar} from "./widget/progress-bar";
export {default as LoadingBar} from "./widget/loading-bar";

// table
export {default as TableClick} from "./widget/table/click";
export {default as TableLink} from "./widget/table/link";
export {default as TableList} from "./widget/table/list";
export {default as TableMenu} from "./widget/table/menu";
export {default as TableSorter} from "./widget/table/sorter";
export {default as Pager} from "./widget/pager";

export type Sorter = "ASC" | "DESC" | "NONE";

// modal
export {default as ModalBase} from "./modal/base";
export {default as ModalToggler} from "./modal/toggler";
export {default as ModalBasic} from "./modal/basic";
export {default as ModalElement} from "./modal/element";
export {default as ModalContextMenu} from "./modal/context-menu";
export {default as ModalAlert} from "./modal/alert";

// form
export {default as InputString} from "./form/input-string";
export {default as InputCheckbox} from "./form/input-checkbox";
export {default as InputDropdown} from "./form/input-dropdown";
export {default as InputTextarea} from "./form/input-textarea";
export {default as InputLabel} from "./form/input-label";
export {default as FormConfirm} from "./form/form-confirm";
export {default as fnFormConfirmModal} from "./form/form-confirm/modal";
export {default as InputDate} from "./form/input-date";
export {default as InputDatePeriod} from "./form/input-date-period";
export {default as InputDateMonth} from "./form/input-date-month";
export {default as FormBase} from "./form/form-base";
export {default as FormOTP} from "./form/form-otp";
export {default as fnFormOTPModal} from "./form/form-otp/modal";
export {default as InputBetween} from "./form/input-between";

// @fn
export {default as ThemeToggler} from "@fn/wrap/theme-toggler";
export {default as fnTheme} from "@fn/wrap/theme-toggler/fn";
export {default as fnInput} from "@fn/input";

// action
export {default as ActionErrorP} from "./action/error-p";
export {default as ActionErrorModal} from "./action/error-modal";
export {default as fnActionErrorModal} from "./action/error-modal/modal";
export {default as ActionLoadingBackdrop} from "./action/loading-backdrop";
export {default as ActionResponseModal} from "./action/response-modal";
export {default as fnActionResponseModal} from "./action/response-modal/modal";
export {default as ActionResponseRedirect} from "./action/response-redirect";
export {default as ErrorParser} from "./action/error-parser";

// editor
export {default as EditorTiptap} from "./editor/tiptap";

// mouse
export {default as MouseRightButtonMenu} from "./mouse/right-button-menu";

// touch
export {default as TouchRightClick} from "./touch/right-click";

export type TableCol<T> = {
	name: ReactNode;
	parser: (v: T, i: number) => ReactNode;
	columnKey?: string;
	colClassName?: string;
	headerClassName?: string;
	cellClassName?: string;
};
