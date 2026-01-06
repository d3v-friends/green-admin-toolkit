"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
const DefaultInterceptor = (e) => e.target.value;
export default function ({ value, onChange, className, label, icon, invalidMessage, regexp, interceptor = DefaultInterceptor, onBlurInterceptor = DefaultInterceptor, name, disabled = false, required, placeholder, inputMode, type, }) {
    const [isFocus, setIsFocus] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    useEffect(() => {
        if (!regexp)
            return;
        if (value === "") {
            setIsInvalid(false);
            return;
        }
        setIsInvalid(!new RegExp(regexp).test(value));
    }, [value]);
    return (_jsxs("div", { className: className, children: [_jsx(Label, { children: label }), _jsxs(Outline, { isFocus: isFocus, isInvalid: isInvalid, children: [_jsx(Icon, { isFocus: isFocus, isDisabled: disabled, children: icon }), _jsx("input", { name, disabled, required, placeholder, inputMode, type, className: "outline-none grow pl-2 pr-2", value: value, onChange: (e) => onChange(interceptor(e)), onFocus: () => setIsFocus(true), onBlur: (e) => {
                            setIsFocus(false);
                            onChange(onBlurInterceptor(e));
                        } })] }), _jsx(InvalidMessage, { isInvalid: isInvalid, children: invalidMessage })] }));
}
function Label({ children }) {
    if (!children)
        return null;
    return _jsx("p", { className: "mb-[-5px]", children: children });
}
function Outline({ isFocus, isInvalid, children, }) {
    let border = isFocus ? "border-(--primary)" : "";
    if (isInvalid)
        border = "border-(--danger)";
    return (_jsx("div", { className: fnCss.sum("flex items-center border-all rounded-md h-[2.5rem] overflow-hidden", border), children: children }));
}
function Icon({ children, isDisabled, isFocus, }) {
    if (!children)
        return null;
    return (_jsx("div", { className: fnCss.sum("border-right h-full flex pl-2 pr-2", isDisabled ? "bg-(--dark)" : "bg-(--primary)", isFocus ? "border-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("no-drag", isDisabled ? "filter-(--dark-alt-filter)" : "filter-(--primary-alt-filter)"), src: children, alt: "icon", width: 25, height: 25 }) }));
}
function InvalidMessage({ children, isInvalid }) {
    if (!children)
        return null;
    if (!isInvalid)
        return null;
    return _jsx("div", { className: "min-h-[1.5rem] text-(--danger)", children: children });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvaW5wdXQvc3RyaW5nL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFvQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ3BGLE9BQU8sRUFBUyxLQUFLLEVBQXlCLE1BQU0sY0FBYyxDQUFDO0FBQ25FLE9BQU8sS0FBd0IsTUFBTSxZQUFZLENBQUM7QUFlbEQsTUFBTSxrQkFBa0IsR0FBcUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBa0JuRSxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULEtBQUssRUFDTCxJQUFJLEVBR0osY0FBYyxFQUNkLE1BQU0sRUFDTixXQUFXLEdBQUcsa0JBQWtCLEVBQ2hDLGlCQUFpQixHQUFHLGtCQUFrQixFQUd0QyxJQUFJLEVBQ0osUUFBUSxHQUFHLEtBQUssRUFDaEIsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxHQUNhO0lBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDcEIsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDbEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLE9BQU87UUFDUixDQUFDO1FBRUQsWUFBWSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxD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