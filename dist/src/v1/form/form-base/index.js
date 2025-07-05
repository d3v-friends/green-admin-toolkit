"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { fnServerAction } from "nextjs-tools";
import { ActionLoadingBackdrop } from "../..";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvZm9ybS9mb3JtLWJhc2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2pELE9BQU8sRUFBcUIsY0FBYyxFQUFtQixNQUFNLGNBQWMsQ0FBQztBQUNsRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFhNUMsTUFBTSxDQUFDLE9BQU8sV0FBa0IsRUFDL0IsUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQ1AsWUFBWSxFQUNaLElBQUksRUFDSixPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxHQUNNO0lBQ3hCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxFQUE2QixDQUFDO0lBRTVFLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNyQixJQUFJLE9BQU87WUFBRSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUV6QixNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNULE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU87UUFDUixDQUFDO1FBQ0QsSUFBSSxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzlELE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTztRQUNSLENBQUM7UUFDRCxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLDhCQUNDLGVBQ0MsTUFBTSxFQUFFLE1BQU0sRUFDZCxHQUFHLEVBQUUsY0FBYyxZQUNsQixRQUFRLENBQUMsUUFBUSxDQUFDLEdBQ2IsRUFFUCxLQUFDLHFCQUFxQixJQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUksSUFDekMsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9