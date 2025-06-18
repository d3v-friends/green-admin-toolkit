"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop, ModalToggler } from "../../../index.js";
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
        if (!formElement)
            return;
        if (!formElement.reportValidity())
            return;
        if (checkBeforeOpen) {
            const { err } = fnServerAction.forms.value(new FormData(formElement), form);
            if (err)
                return;
        }
        setOpen(v);
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { action: action, ref: setFormElement, children: children(onToggle) }), open && (_jsx(ModalToggler, { open: open, onChange: setOpen, disableEscapeKey, disableCloseButton, header, children: confirmModal(onSubmit, onCancel) })), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2Zvcm0tY29uZmlybS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFxQixjQUFjLEVBQW1CLE1BQU0sY0FBYyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxZQUFZLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFpQi9ELE1BQU0sQ0FBQyxPQUFPLFdBQWtCLEVBQy9CLFFBQVEsRUFDUixZQUFZLEVBQ1osTUFBTSxFQUNOLE9BQU8sRUFDUCxZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sSUFBSSxFQUNKLGVBQWUsR0FBRyxLQUFLLEVBQ3ZCLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEdBQ007SUFDeEIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFFNUUsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTztZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQ3pCLElBQUksWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM5RCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE9BQU87UUFDUixDQUFDO1FBQ0QsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksR0FBRyxFQUFFLENBQUM7WUFDVCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPO1FBQ1IsQ0FBQztRQUVELFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQVUsRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtZQUFFLE9BQU87UUFDMUMsSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUNyQixNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsSUFBSSxHQUFHO2dCQUFFLE9BQU87UUFDakIsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTiw4QkFDQyxlQUNDLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxFQUFFLGNBQWMsWUFDbEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUNiLEVBRU4sSUFBSSxJQUFJLENBQ1IsS0FBQyxZQUFZLElBQ1osSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsT0FBTyxFQUNaLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFDaEQsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FDbkIsQ0FDZixFQUVELEtBQUMscUJBQXFCLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxJQUN6QyxDQUNILENBQUM7QUFDSCxDQUFDIn0=