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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjMvY29tcC9pbnB1dC9iYXNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFDYixPQUFjLEVBQVksS0FBSyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBUzlDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBNkQ7UUFBN0QsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLE9BQTJCLEVBQXRCLElBQUksY0FBM0MsMkNBQTRDLENBQUQ7SUFDbkUsTUFBTSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFFbkIsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLFNBQVMsYUFDdkIsS0FBSyxJQUFJLENBQ1QsZ0JBQ0MsU0FBUyxFQUFDLFNBQVMsRUFDbkIsT0FBTyxFQUFFLEVBQUUsWUFDVixLQUFLLEdBQ0MsQ0FDUixFQUVELDhCQUNDLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLEVBQUUsRUFBRSxFQUFFLEVBQ04sS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUNyQyxJQUFJLEVBQ1AsSUFDRyxDQUNOLENBQUM7QUFDSCxDQUFDIn0=