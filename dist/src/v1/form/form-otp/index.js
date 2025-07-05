"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop, InputString, ModalElement, ModalToggler } from "../..";
import ImgOTP from "web-asset/svg/regular/fi-rr-otp.svg";
const { Body, Header, Content, OkCancel } = ModalElement;
export default function ({ children, action, pending, beforeSubmit, disableCloseButton, disableEscapeKey, header = "OTP를 입력하여 주십시오", otpContent, form, modalClassName = "w-[20rem]", }) {
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
    return (_jsxs(_Fragment, { children: [_jsxs("form", { action: action, ref: setFormElement, children: [children(onToggle), open && (_jsx(ModalToggler, { open: open, onChange: setOpen, disableEscapeKey, disableCloseButton, header, children: _jsxs(Body, { className: modalClassName, children: [_jsx(Header, { disableCloseButton: true, children: header }), _jsxs(Content, { children: [_jsx("div", { className: "mb-4", children: otpContent }), _jsx(InputString, { imgSrc: ImgOTP, name: "otp", regexp: "^[0-9]{6}$", invalidMessage: "OTP \uB97C \uD655\uC778\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624", onKeyEnter: onSubmit })] }), _jsx(OkCancel, { ok: "\uD655\uC778", cancel: "\uCDE8\uC18C", onClickOk: onSubmit, onClickCancel: onCancel })] }) }))] }), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvZm9ybS9mb3JtLW90cC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFxQixjQUFjLEVBQVcsTUFBTSxjQUFjLENBQUM7QUFDMUUsT0FBTyxFQUFDLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRXJGLE9BQU8sTUFBTSxNQUFNLHFDQUFxQyxDQUFDO0FBYXpELE1BQU0sRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsR0FBRyxZQUFZLENBQUM7QUFFdkQsTUFBTSxDQUFDLE9BQU8sV0FBa0IsRUFDL0IsUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQ1AsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsTUFBTSxHQUFHLGdCQUFnQixFQUN6QixVQUFVLEVBQ1YsSUFBSSxFQUNKLGNBQWMsR0FBRyxXQUFXLEdBQ0o7SUFDeEIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFFNUUsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTztZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQ3pCLElBQUksWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUNyRSxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxHQUFHO1lBQUUsT0FBTztRQUNoQixXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFVLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPO1FBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTiw4QkFDQyxnQkFDQyxNQUFNLEVBQUUsTUFBTSxFQUNkLEdBQUcsRUFBRSxjQUFjLGFBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDbEIsSUFBSSxJQUFJLENBQ1IsS0FBQyxZQUFZLElBQ1osSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsT0FBTyxFQUNaLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFDakQsTUFBQyxJQUFJLElBQUMsU0FBUyxFQUFFLGNBQWMsYUFDOUIsS0FBQyxNQUFNLElBQUMsa0JBQWtCLGtCQUFFLE1BQU0sR0FBVSxFQUM1QyxNQUFDLE9BQU8sZUFDUCxjQUFLLFNBQVMsRUFBQyxNQUFNLFlBQUUsVUFBVSxHQUFPLEVBQ3hDLEtBQUMsV0FBVyxJQUNYLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFDLEtBQUssRUFDVixNQUFNLEVBQUMsWUFBWSxFQUNuQixjQUFjLEVBQUMsOERBQWlCLEVBQ2hDLFVBQVUsRUFBRSxRQUFRLEdBQ25CLElBQ08sRUFDVixLQUFDLFFBQVEsSUFDUixFQUFFLEVBQUMsY0FBSSxFQUNQLE1BQU0sRUFBQyxjQUFJLEVBQ1gsU0FBUyxFQUFFLFFBQVEsRUFDbkIsYUFBYSxFQUFFLFFBQVEsR0FDdEIsSUFDSSxHQUNPLENBQ2YsSUFDSyxFQUVQLEtBQUMscUJBQXFCLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxJQUN6QyxDQUNILENBQUM7QUFDSCxDQUFDIn0=