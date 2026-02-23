/* comp ---------------- */
/* input */
export {default as GInputBase} from "./comp/input/base";
export {default as GInputNumber} from "./comp/input/number";

/* modal */
export {default as ModalContainer} from "./comp/modal/elem/container";
export {default as ModalHeader} from "./comp/modal/elem/header";
export {default as ModalContent} from "./comp/modal/elem/content";

/* fn ------------------ */
/* modal */
export type {ModalChildren, ModalFC} from "./fn/modal";
export {default as gModal} from "./fn/modal";
export {default as gAlert} from "./fn/modal/g-alert";
export {default as gAlertPromise} from "./fn/modal/g-alert-promise";
export {default as gOkCancel} from "./fn/modal/g-ok-cancel";
export type * from "./fn/modal/modal-promise";
export {default as gModalPromise} from "./fn/modal/modal-promise";
export {default as ModalPromiseChaining} from "./fn/modal/promise-chaining";
