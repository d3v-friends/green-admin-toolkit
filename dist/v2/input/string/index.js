"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Theme from "../theme/index.js";
const DefaultInterceptor = (e) => e.target.value;
const { Label, Outline, Icon, InvalidMessage } = Theme;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvaW5wdXQvc3RyaW5nL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFvQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBR3BGLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQWU3QixNQUFNLGtCQUFrQixHQUFxQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFrQm5FLE1BQU0sRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUMsR0FBRyxLQUFLLENBQUM7QUFFckQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxLQUFLLEVBQ0wsSUFBSSxFQUdKLGNBQWMsRUFDZCxNQUFNLEVBQ04sV0FBVyxHQUFHLGtCQUFrQixFQUNoQyxpQkFBaUIsR0FBRyxrQkFBa0IsRUFHdEMsSUFBSSxFQUNKLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULElBQUksR0FDYTtJQUNqQixNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsRCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3BCLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixPQUFPO1FBQ1IsQ0FBQztRQUVELFlBQVksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixPQUFPLENBQ04sZUFBSyxTQUFTLEVBQUUsU0FBUyxhQUN4QixLQUFDLEtBQUssY0FBRSxLQUFLLEdBQVMsRUFFdEIsTUFBQyxPQUFPLElBQ1AsT0FBTyxFQUFFLE9BQU8sRUFDaEIsU0FBUyxFQUFFLFNBQVMsYUFDcEIsS0FBQyxJQUFJLElBQ0osT0FBTyxFQUFFLE9BQU8sRUFDaEIsVUFBVSxFQUFFLFFBQVEsWUFDbkIsSUFBSSxHQUNDLEVBRVAsZ0JBQ00sSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQzNELFNBQVMsRUFBQyw2QkFBNkIsRUFDdkMsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDL0IsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7NEJBQ2IsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNsQixRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQyxHQUNBLElBQ08sRUFFVixLQUFDLGNBQWMsSUFBQyxTQUFTLEVBQUUsU0FBUyxZQUFHLGNBQWMsR0FBa0IsSUFDbEUsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9