"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop } from "../../../index.js";
export default function ({ children, action, pending, beforeSubmit, form }) {
    const [formElement, setFormElement] = useState();
    const onSubmit = () => {
        if (pending)
            return;
        if (!formElement)
            return;
        const { err } = fnServerAction.forms.value(new FormData(formElement), form);
        if (err) {
            console.error(err);
            return;
        }
        if (beforeSubmit && !beforeSubmit(new FormData(formElement))) {
            console.error("beforeSubmit return false");
            return;
        }
        formElement.requestSubmit();
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { action: action, ref: setFormElement, children: children(onSubmit) }), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2Zvcm0tYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFhLGNBQWMsRUFBbUIsTUFBTSxjQUFjLENBQUM7QUFDMUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBWWpELE1BQU0sQ0FBQyxPQUFPLFdBQWtCLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBeUI7SUFDdEcsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFFNUUsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTztZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRXpCLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixPQUFPO1FBQ1IsQ0FBQztRQUNELElBQUksWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM5RCxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDM0MsT0FBTztRQUNSLENBQUM7UUFDRCxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLDhCQUNDLGVBQ0MsTUFBTSxFQUFFLE1BQU0sRUFDZCxHQUFHLEVBQUUsY0FBYyxZQUNsQixRQUFRLENBQUMsUUFBUSxDQUFDLEdBQ2IsRUFFUCxLQUFDLHFCQUFxQixJQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUksSUFDekMsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9