"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Theme from "../theme";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBb0MsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUdwRixPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFlN0IsTUFBTSxrQkFBa0IsR0FBcUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBa0JuRSxNQUFNLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDLEdBQUcsS0FBSyxDQUFDO0FBRXJELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsS0FBSyxFQUNMLElBQUksRUFHSixjQUFjLEVBQ2QsTUFBTSxFQUNOLFdBQVcsR0FBRyxrQkFBa0IsRUFDaEMsaUJBQWlCLEdBQUcsa0JBQWtCLEVBR3RDLElBQUksRUFDSixRQUFRLEdBQUcsS0FBSyxFQUNoQixRQUFRLEVBQ1IsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEdBQ2E7SUFDakIsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNwQixJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNsQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsT0FBTztRQUNSLENBQUM7UUFFRCxZQUFZLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLFNBQVMsYUFDeEIsS0FBQyxLQUFLLGNBQUUsS0FBSyxHQUFTLEVBRXRCLE1BQUMsT0FBTyxJQUNQLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFNBQVMsRUFBRSxTQUFTLGFBQ3BCLEtBQUMsSUFBSSxJQUNKLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFVBQVUsRUFBRSxRQUFRLFlBQ25CLElBQUksR0FDQyxFQUVQLGdCQUNNLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUMzRCxTQUFTLEVBQUMsNkJBQTZCLEVBQ3ZDLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQy9CLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFOzRCQUNiLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbEIsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLENBQUMsR0FDQSxJQUNPLEVBRVYsS0FBQyxjQUFjLElBQUMsU0FBUyxFQUFFLFNBQVMsWUFBRyxjQUFjLEdBQWtCLElBQ2xFLENBQ04sQ0FBQztBQUNILENBQUMifQ==