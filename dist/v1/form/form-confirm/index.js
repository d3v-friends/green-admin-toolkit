"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop, ModalToggler } from "../../index.js";
export default function ({ children, confirmModal, action, pending, beforeSubmit, disableCloseButton, disableEscapeKey, header, form, checkBeforeOpen = false, onError = () => { }, }) {
    const [open, setOpen] = useState(false);
    const [formElement, setFormElement] = useState();
    const onSubmit = () => {
        if (pending)
            return;
        if (!formElement)
            return;
        if (beforeSubmit && !beforeSubmit(new FormData(formElement))) {
            onError(new Error("beforeSubmit return false"));
            return;
        }
        const { err } = fnServerAction.forms.value(new FormData(formElement), form);
        if (err) {
            onError(new Error(err));
            return;
        }
        formElement.requestSubmit();
        setOpen(false);
    };
    const onCancel = () => {
        setOpen(false);
    };
    const onToggle = (v) => {
        if (!v) {
            setOpen(v);
        }
        if (!formElement)
            return;
        if (!formElement.reportValidity())
            return;
        if (checkBeforeOpen) {
            const { err } = fnServerAction.forms.value(new FormData(formElement), form);
            if (err) {
                onError(new Error(err));
                return;
            }
        }
        setOpen(v);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("form", { action: action, ref: setFormElement, children: [children(onToggle), open && (_jsx(ModalToggler, { open: open, onChange: setOpen, disableEscapeKey, disableCloseButton, header, children: confirmModal(onSubmit, onCancel) }))] }), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvZm9ybS9mb3JtLWNvbmZpcm0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2pELE9BQU8sRUFBcUIsY0FBYyxFQUFtQixNQUFNLGNBQWMsQ0FBQztBQUNsRixPQUFPLEVBQUMscUJBQXFCLEVBQUUsWUFBWSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBaUIxRCxNQUFNLENBQUMsT0FBTyxXQUFrQixFQUMvQixRQUFRLEVBQ1IsWUFBWSxFQUNaLE1BQU0sRUFDTixPQUFPLEVBQ1AsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLElBQUksRUFDSixlQUFlLEdBQUcsS0FBSyxFQUN2QixPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxHQUNNO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxFQUE2QixDQUFDO0lBRTVFLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNyQixJQUFJLE9BQU87WUFBRSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUN6QixJQUFJLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUQsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPO1FBQ1IsQ0FBQztRQUNELE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ1QsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTztRQUNSLENBQUM7UUFFRCxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFVLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDUixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQUUsT0FBTztRQUMxQyxJQUFJLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRSxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNULE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixPQUFPO1lBQ1IsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sOEJBQ0MsZ0JBQ0MsTUFBTSxFQUFFLE1BQU0sRUFDZCxHQUFHLEVBQUUsY0FBYyxhQUNsQixRQUFRLENBQUMsUUFBUSxDQUFDLEVBRWxCLElBQUksSUFBSSxDQUNSLEtBQUMsWUFBWSxJQUNaLElBQUksRUFBRSxJQUFJLEVBQ1YsUUFBUSxFQUFFLE9BQU8sRUFDWixnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFlBQ2hELFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQ25CLENBQ2YsSUFDSyxFQUVQLEtBQUMscUJBQXFCLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxJQUN6QyxDQUNILENBQUM7QUFDSCxDQUFDIn0=