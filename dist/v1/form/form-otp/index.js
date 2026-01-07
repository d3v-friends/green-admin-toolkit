"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { ActionLoadingBackdrop, InputString, ModalElement, ModalToggler } from "../../index.js";
import ImgOTP from "web-asset/svg/regular/fi-rr-otp.svg";
const { Body, Header, Content, OkCancel } = ModalElement;
export default function ({ children, action, pending, disableCloseButton, disableEscapeKey, header = "OTP를 입력하여 주십시오", otpContent, modalClassName = "w-[20rem]", }) {
    const [open, setOpen] = useState(false);
    const formRef = useRef(null);
    const onSubmit = () => {
        if (!formRef.current)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvZm9ybS9mb3JtLW90cC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRXpELE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUVyRixPQUFPLE1BQU0sTUFBTSxxQ0FBcUMsQ0FBQztBQVd6RCxNQUFNLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLEdBQUcsWUFBWSxDQUFDO0FBRXZELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQ1Asa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixNQUFNLEdBQUcsZ0JBQWdCLEVBQ3pCLFVBQVUsRUFDVixjQUFjLEdBQUcsV0FBVyxHQUNYO0lBQ2pCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBa0IsSUFBSSxDQUFDLENBQUM7SUFFOUMsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUFFLE9BQU87UUFDN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQVUsRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUFFLE9BQU87UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO1lBQUUsT0FBTztRQUM5QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sOEJBQ0MsZ0JBQ0MsTUFBTSxFQUFFLE1BQU0sRUFDZCxHQUFHLEVBQUUsT0FBTyxhQUNYLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDbEIsSUFBSSxJQUFJLENBQ1IsS0FBQyxZQUFZLElBQ1osSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsT0FBTyxFQUNaLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFDakQsTUFBQyxJQUFJLElBQUMsU0FBUyxFQUFFLGNBQWMsYUFDOUIsS0FBQyxNQUFNLElBQUMsa0JBQWtCLGtCQUFFLE1BQU0sR0FBVSxFQUM1QyxNQUFDLE9BQU8sZUFDUCxjQUFLLFNBQVMsRUFBQyxNQUFNLFlBQUUsVUFBVSxHQUFPLEVBQ3hDLEtBQUMsV0FBVyxJQUNYLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFDLEtBQUssRUFDVixNQUFNLEVBQUMsWUFBWSxFQUNuQixjQUFjLEVBQUMsOERBQWlCLEVBQ2hDLFVBQVUsRUFBRSxRQUFRLEdBQ25CLElBQ08sRUFDVixLQUFDLFFBQVEsSUFDUixFQUFFLEVBQUMsY0FBSSxFQUNQLE1BQU0sRUFBQyxjQUFJLEVBQ1gsU0FBUyxFQUFFLFFBQVEsRUFDbkIsYUFBYSxFQUFFLFFBQVEsR0FDdEIsSUFDSSxHQUNPLENBQ2YsSUFDSyxFQUVQLEtBQUMscUJBQXFCLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxJQUN6QyxDQUNILENBQUM7QUFDSCxDQUFDIn0=