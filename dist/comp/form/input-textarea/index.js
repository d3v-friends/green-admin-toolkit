"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
export default function ({ label, placeholder = "", defaultValue = "", onChange = () => { }, onKeyEnter = () => { }, name, disabled, className = "", autoComplete, inputMode, type, required, resize = false, children, textareaClassName = "min-h-[2.5rem]", }) {
    const [value, setValue] = useState(defaultValue);
    const [focus, setFocus] = useState(false);
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    const onKeyDownHandler = (e) => {
        if (e.key !== "Enter")
            return;
        onKeyEnter(value);
    };
    const onChangeHandler = (e) => {
        onChange(e.target.value);
        setValue(e.target.value);
    };
    return (_jsxs("div", { className: className, children: [label && _jsx("p", { className: "mb-[-5px]", children: label }), _jsxs("div", { className: fnCss.sum("relative"), children: [_jsx("textarea", { className: fnCss.sum("outline-none w-full p-2 border-all rounded-md", focus ? "border-(--primary)" : "", resize ? "resize-y" : "resize-none", textareaClassName), placeholder, disabled, name, autoComplete, inputMode, type, required, onChange: onChangeHandler, onKeyDown: onKeyDownHandler, onFocus: () => setFocus(true), onBlur: () => setFocus(false), value: value }), value && (_jsx(Image, { src: ImgCross, alt: "clear", width: 20, height: 20, onClick: () => {
                            setValue("");
                            onChange("");
                        }, className: "absolute right-0 top-4 no-drag mr-2 w-[0.7rem] filter-(--text-2-filter) hover:filter-(--primary-filter)" })), children] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2lucHV0LXRleHRhcmVhL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQU1iLFNBQVMsRUFDVCxRQUFRLEdBQ1IsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQVMsS0FBSyxFQUF5QixNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxRQUFRLE1BQU0sdUNBQXVDLENBQUM7QUFvQjdELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsS0FBSyxFQUNMLFdBQVcsR0FBRyxFQUFFLEVBQ2hCLFlBQVksR0FBRyxFQUFFLEVBQ2pCLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ25CLFVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ3JCLElBQUksRUFDSixRQUFRLEVBQ1IsU0FBUyxHQUFHLEVBQUUsRUFDZCxZQUFZLEVBQ1osU0FBUyxFQUNULElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxHQUFHLEtBQUssRUFDZCxRQUFRLEVBQ1IsaUJBQWlCLEdBQUcsZ0JBQWdCLEdBQ25CO0lBQ2pCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUVuQixNQUFNLGdCQUFnQixHQUE4QyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3pFLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPO1lBQUUsT0FBTztRQUM5QixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxlQUFlLEdBQTRDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDdEUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLFNBQVMsYUFDdkIsS0FBSyxJQUFJLFlBQUcsU0FBUyxFQUFDLFdBQVcsWUFBRSxLQUFLLEdBQUssRUFDOUMsZUFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFDcEMsbUJBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLCtDQUErQyxFQUMvQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ2pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQ25DLGlCQUFpQixDQUNqQixFQUNJLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFDekUsUUFBUSxFQUFFLGVBQWUsRUFDekIsU0FBUyxFQUFFLGdCQUFnQixFQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM3QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUM3QixLQUFLLEVBQUUsS0FBSyxHQUNYLEVBRUQsS0FBSyxJQUFJLENBQ1QsS0FBQyxLQUFLLElBQ0wsR0FBRyxFQUFFLFFBQVEsRUFDYixHQUFHLEVBQUMsT0FBTyxFQUNYLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNiLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDYixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUNELFNBQVMsRUFBQyx5R0FBeUcsR0FDbEgsQ0FDRixFQUNBLFFBQVEsSUFDSixJQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==