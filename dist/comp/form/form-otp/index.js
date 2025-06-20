"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop, InputString, ModalElement, ModalToggler } from "../../../index.js";
import ImgOTP from "web-asset/svg/regular/fi-rr-otp.svg";
const { Body, Header, Content, OkCancel } = ModalElement;
export default function ({ children, action, pending, beforeSubmit, disableCloseButton, disableEscapeKey, header = "OTP를 입력하여 주십시오", otpContent, form, }) {
    const [open, setOpen] = useState(false);
    const [formElement, setFormElement] = useState();
    const onSubmit = () => {
        if (pending)
            return;
        if (!formElement)
            return;
        if (beforeSubmit && !beforeSubmit(new FormData(formElement)))
            return;
        const { err } = fnServerAction.forms.value(new FormData(formElement), form);
        if (err)
            return;
        formElement.requestSubmit();
        setOpen(false);
    };
    const onCancel = () => {
        setOpen(false);
    };
    const onToggle = (v) => {
        if (!formElement)
            return;
        if (!formElement.reportValidity())
            return;
        setOpen(v);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("form", { action: action, ref: setFormElement, children: [children(onToggle), open && (_jsx(ModalToggler, { open: open, onChange: setOpen, disableEscapeKey, disableCloseButton, header, children: _jsxs(Body, { className: "min-w-[20rem]", children: [_jsx(Header, { disableCloseButton: true, children: header }), _jsxs(Content, { children: [_jsx("div", { className: "mb-4", children: otpContent }), _jsx(InputString, { imgSrc: ImgOTP, name: "otp", regexp: "^[0-9]{6}$", invalidMessage: "OTP \uB97C \uD655\uC778\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624", onKeyEnter: onSubmit })] }), _jsx(OkCancel, { ok: "\uD655\uC778", cancel: "\uCDE8\uC18C", onClickOk: onSubmit, onClickCancel: onCancel })] }) }))] }), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2Zvcm0tb3RwL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqRCxPQUFPLEVBQXFCLGNBQWMsRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUMxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFMUYsT0FBTyxNQUFNLE1BQU0scUNBQXFDLENBQUM7QUFZekQsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxHQUFHLFlBQVksQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxXQUFrQixFQUMvQixRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixNQUFNLEdBQUcsZ0JBQWdCLEVBQ3pCLFVBQVUsRUFDVixJQUFJLEdBQ29CO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxFQUE2QixDQUFDO0lBRTVFLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNyQixJQUFJLE9BQU87WUFBRSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUN6QixJQUFJLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUFFLE9BQU87UUFDckUsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksR0FBRztZQUFFLE9BQU87UUFDaEIsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBVSxFQUFFLEVBQUU7UUFDL0IsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQUUsT0FBTztRQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sOEJBQ0MsZ0JBQ0MsTUFBTSxFQUFFLE1BQU0sRUFDZCxHQUFHLEVBQUUsY0FBYyxhQUNsQixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQ2xCLElBQUksSUFBSSxDQUNSLEtBQUMsWUFBWSxJQUNaLElBQUksRUFBRSxJQUFJLEVBQ1YsUUFBUSxFQUFFLE9BQU8sRUFDWixnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFlBQ2pELE1BQUMsSUFBSSxJQUFDLFNBQVMsRUFBQyxlQUFlLGFBQzlCLEtBQUMsTUFBTSxJQUFDLGtCQUFrQixrQkFBRSxNQUFNLEdBQVUsRUFDNUMsTUFBQyxPQUFPLGVBQ1AsY0FBSyxTQUFTLEVBQUMsTUFBTSxZQUFFLFVBQVUsR0FBTyxFQUN4QyxLQUFDLFdBQVcsSUFDWCxNQUFNLEVBQUUsTUFBTSxFQUNkLElBQUksRUFBQyxLQUFLLEVBQ1YsTUFBTSxFQUFDLFlBQVksRUFDbkIsY0FBYyxFQUFDLDhEQUFpQixFQUNoQyxVQUFVLEVBQUUsUUFBUSxHQUNuQixJQUNPLEVBQ1YsS0FBQyxRQUFRLElBQ1IsRUFBRSxFQUFDLGNBQUksRUFDUCxNQUFNLEVBQUMsY0FBSSxFQUNYLFNBQVMsRUFBRSxRQUFRLEVBQ25CLGFBQWEsRUFBRSxRQUFRLEdBQ3RCLElBQ0ksR0FDTyxDQUNmLElBQ0ssRUFFUCxLQUFDLHFCQUFxQixJQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUksSUFDekMsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9