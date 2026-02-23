"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnVoid } from "nextjs-tools";
import Base from "../base/index.js";
export default function (_a) {
    var { value, onChange, onBlur = fnVoid } = _a, attr = __rest(_a, ["value", "onChange", "onBlur"]);
    const [strValue, onChangeStrValue] = useState(value ? value.toString : "");
    const onBlurEvent = (e) => {
        onBlur(e);
        const next = toNumber(e.target.value);
        onChange(next);
        onChangeStrValue(next ? next.toString() : "");
    };
    useEffect(() => {
        onChangeStrValue(value ? value.toString() : "");
    }, [value]);
    return (_jsx(Base, Object.assign({}, attr, { value: strValue, onChange: onChangeStrValue, onBlur: onBlurEvent, type: "number" })));
}
function toNumber(value) {
    if (!value || value.trim() === "")
        return null;
    const converted = Number(value);
    return isNaN(converted) || !isFinite(converted) ? null : converted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjMvY29tcC9pbnB1dC9udW1iZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQUNiLE9BQWMsRUFBK0IsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUMvRSxPQUFPLEVBQVMsTUFBTSxFQUFXLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQVEzQixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQTREO1FBQTVELEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsTUFBTSxPQUEyQixFQUF0QixJQUFJLGNBQTFDLCtCQUEyQyxDQUFEO0lBQ2xFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzRSxNQUFNLFdBQVcsR0FBd0MsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUM5RCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0lBRUYsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosT0FBTyxDQUNOLEtBQUMsSUFBSSxvQkFDQSxJQUFJLElBQ1IsS0FBSyxFQUFFLFFBQVEsRUFDZixRQUFRLEVBQUUsZ0JBQWdCLEVBQzFCLE1BQU0sRUFBRSxXQUFXLEVBQ25CLElBQUksRUFBQyxRQUFRLElBQ1osQ0FDRixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEtBQWE7SUFDOUIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQy9DLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDcEUsQ0FBQyJ9