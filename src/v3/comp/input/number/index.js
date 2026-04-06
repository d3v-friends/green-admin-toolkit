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
import Base from "../base";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBQ2IsT0FBYyxFQUErQixTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQy9FLE9BQU8sRUFBUyxNQUFNLEVBQVcsTUFBTSxjQUFjLENBQUM7QUFDdEQsT0FBTyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBUTNCLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBNEQ7UUFBNUQsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxNQUFNLE9BQTJCLEVBQXRCLElBQUksY0FBMUMsK0JBQTJDLENBQUQ7SUFDbEUsTUFBTSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNFLE1BQU0sV0FBVyxHQUF3QyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzlELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNmLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7SUFFRixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixPQUFPLENBQ04sS0FBQyxJQUFJLG9CQUNBLElBQUksSUFDUixLQUFLLEVBQUUsUUFBUSxFQUNmLFFBQVEsRUFBRSxnQkFBZ0IsRUFDMUIsTUFBTSxFQUFFLFdBQVcsRUFDbkIsSUFBSSxFQUFDLFFBQVEsSUFDWixDQUNGLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsS0FBYTtJQUM5QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0MsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNwRSxDQUFDIn0=