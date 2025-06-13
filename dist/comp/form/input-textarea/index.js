"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
export default function ({ label, placeholder = "", defaultValue = "", onChange = () => { }, onKeyEnter = () => { }, name, disabled, className = "", autoComplete, inputMode, type, required, resize = false, }) {
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
    return (_jsxs("div", { className: className, children: [label && _jsx("p", { className: "mb-[-5px]", children: label }), _jsxs("div", { className: fnCss.sum("relative"), children: [_jsx("textarea", { className: fnCss.sum("outline-none w-full min-h-[2.5rem] p-2 border-all rounded-md", focus ? "border-(--primary)" : "", resize ? "resize-y" : "resize-none"), placeholder, disabled, name, autoComplete, inputMode, type, required, onChange: onChangeHandler, onKeyDown: onKeyDownHandler, onFocus: () => setFocus(true), onBlur: () => setFocus(false), value: value }), value && (_jsx(Image, { src: ImgCross, alt: "clear", width: 20, height: 20, onClick: () => {
                            setValue("");
                            onChange("");
                        }, className: "absolute right-0 top-4 no-drag mr-2 w-[0.7rem] filter-(--text-2-filter) hover:filter-(--primary-filter)" }))] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2lucHV0LXRleHRhcmVhL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQU1iLFNBQVMsRUFDVCxRQUFRLEdBQ1IsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQVMsS0FBSyxFQUF5QixNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxRQUFRLE1BQU0sdUNBQXVDLENBQUM7QUFrQjdELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsS0FBSyxFQUNMLFdBQVcsR0FBRyxFQUFFLEVBQ2hCLFlBQVksR0FBRyxFQUFFLEVBQ2pCLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ25CLFVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ3JCLElBQUksRUFDSixRQUFRLEVBQ1IsU0FBUyxHQUFHLEVBQUUsRUFDZCxZQUFZLEVBQ1osU0FBUyxFQUNULElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxHQUFHLEtBQUssR0FDRztJQUNqQixNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFFbkIsTUFBTSxnQkFBZ0IsR0FBOEMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN6RSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTztZQUFFLE9BQU87UUFDOUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQztJQUVGLE1BQU0sZUFBZSxHQUE0QyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3RFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxTQUFTLGFBQ3ZCLEtBQUssSUFBSSxZQUFHLFNBQVMsRUFBQyxXQUFXLFlBQUUsS0FBSyxHQUFLLEVBQzlDLGVBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQ3BDLG1CQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQiw4REFBOEQsRUFDOUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUNqQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUNuQyxFQUNJLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFDekUsUUFBUSxFQUFFLGVBQWUsRUFDekIsU0FBUyxFQUFFLGdCQUFnQixFQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM3QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUM3QixLQUFLLEVBQUUsS0FBSyxHQUNYLEVBRUQsS0FBSyxJQUFJLENBQ1QsS0FBQyxLQUFLLElBQ0wsR0FBRyxFQUFFLFFBQVEsRUFDYixHQUFHLEVBQUMsT0FBTyxFQUNYLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNiLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDYixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUNELFNBQVMsRUFBQyx5R0FBeUcsR0FDbEgsQ0FDRixJQUNJLElBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9