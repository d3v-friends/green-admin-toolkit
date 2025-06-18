"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop } from "../../../index.js";
export default function ({ children, action, pending, beforeSubmit, form, onError = () => { }, }) {
    const [formElement, setFormElement] = useState();
    const onSubmit = () => {
        if (pending)
            return;
        if (!formElement)
            return;
        const { err } = fnServerAction.forms.value(new FormData(formElement), form);
        if (err) {
            onError(new Error(err));
            return;
        }
        if (beforeSubmit && !beforeSubmit(new FormData(formElement))) {
            onError(new Error("beforeSubmit return false"));
            return;
        }
        formElement.requestSubmit();
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { action: action, ref: setFormElement, children: children(onSubmit) }), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2Zvcm0tYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFxQixjQUFjLEVBQW1CLE1BQU0sY0FBYyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLFlBQVksQ0FBQztBQWFqRCxNQUFNLENBQUMsT0FBTyxXQUFrQixFQUMvQixRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxZQUFZLEVBQ1osSUFBSSxFQUNKLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEdBQ007SUFDeEIsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFFNUUsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksT0FBTztZQUFFLE9BQU87UUFDcEIsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRXpCLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ1QsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTztRQUNSLENBQUM7UUFDRCxJQUFJLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUQsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPO1FBQ1IsQ0FBQztRQUNELFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sOEJBQ0MsZUFDQyxNQUFNLEVBQUUsTUFBTSxFQUNkLEdBQUcsRUFBRSxjQUFjLFlBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FDYixFQUVQLEtBQUMscUJBQXFCLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxJQUN6QyxDQUNILENBQUM7QUFDSCxDQUFDIn0=