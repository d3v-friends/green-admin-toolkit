"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop, InputString, ModalElement, ModalToggler } from "../../../index.js";
import ImgOTP from "web-asset/svg/regular/fi-rr-otp.svg";
const { Body, Header, Content, OkCancel } = ModalElement;
export default function ({ children, action, pending, beforeSubmit, disableCloseButton, disableEscapeKey, header, otpContent, form, }) {
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
    return (_jsxs(_Fragment, { children: [_jsxs("form", { action: action, ref: setFormElement, children: [children(onToggle), open && (_jsx(ModalToggler, { open: open, onChange: setOpen, disableEscapeKey, disableCloseButton, header, children: _jsxs(Body, { className: "min-w-[20rem]", children: [_jsx(Header, { disableCloseButton: true, children: "OTP\uB97C \uC785\uB825\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624." }), _jsxs(Content, { children: [_jsx("div", { className: "mb-4", children: otpContent }), _jsx(InputString, { imgSrc: ImgOTP, name: "otp", regexp: "^[0-9]{6}$", invalidMessage: "OTP \uB97C \uD655\uC778\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624", onKeyEnter: onSubmit })] }), _jsx(OkCancel, { ok: "\uD655\uC778", cancel: "\uCDE8\uC18C", onClickOk: onSubmit, onClickCancel: onCancel })] }) }))] }), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2Zvcm0tb3RwL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqRCxPQUFPLEVBQXFCLGNBQWMsRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUMxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFMUYsT0FBTyxNQUFNLE1BQU0scUNBQXFDLENBQUM7QUFZekQsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxHQUFHLFlBQVksQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxXQUFrQixFQUMvQixRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sVUFBVSxFQUNWLElBQUksR0FDb0I7SUFDeEIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFFNUUsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTztZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQ3pCLElBQUksWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUNyRSxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxHQUFHO1lBQUUsT0FBTztRQUNoQixXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFVLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPO1FBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTiw4QkFDQyxnQkFDQyxNQUFNLEVBQUUsTUFBTSxFQUNkLEdBQUcsRUFBRSxjQUFjLGFBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDbEIsSUFBSSxJQUFJLENBQ1IsS0FBQyxZQUFZLElBQ1osSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsT0FBTyxFQUNaLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFDakQsTUFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLGVBQWUsYUFDOUIsS0FBQyxNQUFNLElBQUMsa0JBQWtCLG1GQUF5QixFQUNuRCxNQUFDLE9BQU8sZUFDUCxjQUFLLFNBQVMsRUFBQyxNQUFNLFlBQUUsVUFBVSxHQUFPLEVBQ3hDLEtBQUMsV0FBVyxJQUNYLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFDLEtBQUssRUFDVixNQUFNLEVBQUMsWUFBWSxFQUNuQixjQUFjLEVBQUMsOERBQWlCLEVBQ2hDLFVBQVUsRUFBRSxRQUFRLEdBQ25CLElBQ08sRUFDVixLQUFDLFFBQVEsSUFDUixFQUFFLEVBQUMsY0FBSSxFQUNQLE1BQU0sRUFBQyxjQUFJLEVBQ1gsU0FBUyxFQUFFLFFBQVEsRUFDbkIsYUFBYSxFQUFFLFFBQVEsR0FDdEIsSUFDSSxHQUNPLENBQ2YsSUFDSyxFQUVQLEtBQUMscUJBQXFCLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxJQUN6QyxDQUNILENBQUM7QUFDSCxDQUFDIn0=