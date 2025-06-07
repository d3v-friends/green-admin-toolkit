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
        if (err)
            return;
        if (beforeSubmit && !beforeSubmit(new FormData(formElement)))
            return;
        formElement.requestSubmit();
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { action: action, ref: setFormElement, children: children(onSubmit) }), _jsx(ActionLoadingBackdrop, { pending: pending })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2Zvcm0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2pELE9BQU8sRUFBYSxjQUFjLEVBQW1CLE1BQU0sY0FBYyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLFlBQVksQ0FBQztBQVlqRCxNQUFNLENBQUMsT0FBTyxXQUFrQixFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQXlCO0lBQ3RHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxFQUE2QixDQUFDO0lBRTVFLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNyQixJQUFJLE9BQU87WUFBRSxPQUFPO1FBQ3BCLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUV6QixNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxHQUFHO1lBQUUsT0FBTztRQUVoQixJQUFJLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUFFLE9BQU87UUFFckUsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTiw4QkFDQyxlQUNDLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxFQUFFLGNBQWMsWUFDbEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUNiLEVBRVAsS0FBQyxxQkFBcUIsSUFBQyxPQUFPLEVBQUUsT0FBTyxHQUFJLElBQ3pDLENBQ0gsQ0FBQztBQUNILENBQUMifQ==