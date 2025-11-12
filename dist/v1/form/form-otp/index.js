"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop, InputString, ModalElement, ModalToggler } from "../../index.js";
import ImgOTP from "web-asset/svg/regular/fi-rr-otp.svg";
const { Body, Header, Content, OkCancel } = ModalElement;
export default function ({ children, action, pending, beforeSubmit, disableCloseButton, disableEscapeKey, header = "OTP를 입력하여 주십시오", otpContent, form, modalClassName = "w-[20rem]", }) {
    const [open, setOpen] = useState(false);
    const formRef = useRef(null);
    const onSubmit = () => {
        if (pending)
            return;
        if (!formRef.current)
            return;
        if (beforeSubmit && !beforeSubmit(new FormData(formRef.current)))
            return;
        const { err } = fnServerAction.forms.value(new FormData(formRef.current), form);
        if (err)
            return;
        formRef.current.requestSubmit();
        setOpen(false);
    };
    const onCancel = () => {
        setOpen(false);
    };
    const onToggle = (v) => {
        if (!formRef.current)
            return;
        if (!formRef.current.reportValidity())
            return;
        setOpen(v);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("form", { action: action, ref: formRef, children: [children(onToggle), open && (_jsx(ModalToggler, { open: open, onChange: setOpen, disableEscapeKey, disableCloseButton, header, children: _jsxs(Body, { className: modalClassName, children: [_jsx(Header, { disableCloseButton: true, children: header }), _jsxs(Content, { children: [_jsx("div", { className: "mb-4", children: otpContent }), _jsx(InputString, { imgSrc: ImgOTP, name: "otp", regexp: "^[0-9]{6}$", invalidMessage: "OTP \uB97C \uD655\uC778\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624", onKeyEnter: onSubmit })] }), _jsx(OkCancel, { ok: "\uD655\uC778", cancel: "\uCDE8\uC18C", onClickOk: onSubmit, onClickCancel: onCancel })] }) }))] }), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvZm9ybS9mb3JtLW90cC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ3pELE9BQU8sRUFBcUIsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUVyRixPQUFPLE1BQU0sTUFBTSxxQ0FBcUMsQ0FBQztBQWF6RCxNQUFNLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLEdBQUcsWUFBWSxDQUFDO0FBRXZELE1BQU0sQ0FBQyxPQUFPLFdBQWtCLEVBQy9CLFFBQVEsRUFDUixNQUFNLEVBQ04sT0FBTyxFQUNQLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLE1BQU0sR0FBRyxnQkFBZ0IsRUFDekIsVUFBVSxFQUNWLElBQUksRUFDSixjQUFjLEdBQUcsV0FBVyxHQUNKO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBa0IsSUFBSSxDQUFDLENBQUM7SUFFOUMsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTztZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUM3QixJQUFJLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFBRSxPQUFPO1FBQ3pFLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUUsSUFBSSxHQUFHO1lBQUUsT0FBTztRQUNoQixPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBVSxFQUFFLEVBQUU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPO1FBQzlDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTiw4QkFDQyxnQkFDQyxNQUFNLEVBQUUsTUFBTSxFQUNkLEdBQUcsRUFBRSxPQUFPLGFBQ1gsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUNsQixJQUFJLElBQUksQ0FDUixLQUFDLFlBQVksSUFDWixJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSxPQUFPLEVBQ1osZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUNqRCxNQUFDLElBQUksSUFBQyxTQUFTLEVBQUUsY0FBYyxhQUM5QixLQUFDLE1BQU0sSUFBQyxrQkFBa0Isa0JBQUUsTUFBTSxHQUFVLEVBQzVDLE1BQUMsT0FBTyxlQUNQLGNBQUssU0FBUyxFQUFDLE1BQU0sWUFBRSxVQUFVLEdBQU8sRUFDeEMsS0FBQyxXQUFXLElBQ1gsTUFBTSxFQUFFLE1BQU0sRUFDZCxJQUFJLEVBQUMsS0FBSyxFQUNWLE1BQU0sRUFBQyxZQUFZLEVBQ25CLGNBQWMsRUFBQyw4REFBaUIsRUFDaEMsVUFBVSxFQUFFLFFBQVEsR0FDbkIsSUFDTyxFQUNWLEtBQUMsUUFBUSxJQUNSLEVBQUUsRUFBQyxjQUFJLEVBQ1AsTUFBTSxFQUFDLGNBQUksRUFDWCxTQUFTLEVBQUUsUUFBUSxFQUNuQixhQUFhLEVBQUUsUUFBUSxHQUN0QixJQUNJLEdBQ08sQ0FDZixJQUNLLEVBRVAsS0FBQyxxQkFBcUIsSUFBQyxPQUFPLEVBQUUsT0FBTyxHQUFJLElBQ3pDLENBQ0gsQ0FBQztBQUNILENBQUMifQ==