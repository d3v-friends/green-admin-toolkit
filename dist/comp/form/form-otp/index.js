"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop, InputString, ModalElement, ModalToggler } from "../../../index.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2Zvcm0tb3RwL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqRCxPQUFPLEVBQXFCLGNBQWMsRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUMxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFMUYsT0FBTyxNQUFNLE1BQU0scUNBQXFDLENBQUM7QUFhekQsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxHQUFHLFlBQVksQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxXQUFrQixFQUMvQixRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixNQUFNLEdBQUcsZ0JBQWdCLEVBQ3pCLFVBQVUsRUFDVixJQUFJLEVBQ0osY0FBYyxHQUFHLFdBQVcsR0FDSjtJQUN4QixNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLFFBQVEsRUFBNkIsQ0FBQztJQUU1RSxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDckIsSUFBSSxPQUFPO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDekIsSUFBSSxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFBRSxPQUFPO1FBQ3JFLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLEdBQUc7WUFBRSxPQUFPO1FBQ2hCLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQVUsRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtZQUFFLE9BQU87UUFDMUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLDhCQUNDLGdCQUNDLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxFQUFFLGNBQWMsYUFDbEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUNsQixJQUFJLElBQUksQ0FDUixLQUFDLFlBQVksSUFDWixJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSxPQUFPLEVBQ1osZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUNqRCxNQUFDLElBQUksSUFBQyxTQUFTLEVBQUUsY0FBYyxhQUM5QixLQUFDLE1BQU0sSUFBQyxrQkFBa0Isa0JBQUUsTUFBTSxHQUFVLEVBQzVDLE1BQUMsT0FBTyxlQUNQLGNBQUssU0FBUyxFQUFDLE1BQU0sWUFBRSxVQUFVLEdBQU8sRUFDeEMsS0FBQyxXQUFXLElBQ1gsTUFBTSxFQUFFLE1BQU0sRUFDZCxJQUFJLEVBQUMsS0FBSyxFQUNWLE1BQU0sRUFBQyxZQUFZLEVBQ25CLGNBQWMsRUFBQyw4REFBaUIsRUFDaEMsVUFBVSxFQUFFLFFBQVEsR0FDbkIsSUFDTyxFQUNWLEtBQUMsUUFBUSxJQUNSLEVBQUUsRUFBQyxjQUFJLEVBQ1AsTUFBTSxFQUFDLGNBQUksRUFDWCxTQUFTLEVBQUUsUUFBUSxFQUNuQixhQUFhLEVBQUUsUUFBUSxHQUN0QixJQUNJLEdBQ08sQ0FDZixJQUNLLEVBRVAsS0FBQyxxQkFBcUIsSUFBQyxPQUFPLEVBQUUsT0FBTyxHQUFJLElBQ3pDLENBQ0gsQ0FBQztBQUNILENBQUMifQ==