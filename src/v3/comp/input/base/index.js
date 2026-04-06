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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
export default function (_a) {
    var { value, onChange, label, className } = _a, attr = __rest(_a, ["value", "onChange", "label", "className"]);
    const id = useId();
    return (_jsxs("div", { className: className, children: [label && (_jsx("label", { className: "no-drag", htmlFor: id, children: label })), _jsx("input", Object.assign({ className: "green", id: id, value: value, onChange: (e) => onChange(e.target.value) }, attr))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBQ2IsT0FBYyxFQUFZLEtBQUssRUFBQyxNQUFNLE9BQU8sQ0FBQztBQVM5QyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQTZEO1FBQTdELEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxPQUEyQixFQUF0QixJQUFJLGNBQTNDLDJDQUE0QyxDQUFEO0lBQ25FLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0lBRW5CLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxTQUFTLGFBQ3ZCLEtBQUssSUFBSSxDQUNULGdCQUNDLFNBQVMsRUFBQyxTQUFTLEVBQ25CLE9BQU8sRUFBRSxFQUFFLFlBQ1YsS0FBSyxHQUNDLENBQ1IsRUFFRCw4QkFDQyxTQUFTLEVBQUMsT0FBTyxFQUNqQixFQUFFLEVBQUUsRUFBRSxFQUNOLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFDckMsSUFBSSxFQUNQLElBQ0csQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9