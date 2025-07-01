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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvZm9ybS9pbnB1dC10ZXh0YXJlYS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFNYixTQUFTLEVBQ1QsUUFBUSxHQUNSLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFTLEtBQUssRUFBeUIsTUFBTSxjQUFjLENBQUM7QUFDbkUsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLHVDQUF1QyxDQUFDO0FBb0I3RCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLEtBQUssRUFDTCxXQUFXLEdBQUcsRUFBRSxFQUNoQixZQUFZLEdBQUcsRUFBRSxFQUNqQixRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNuQixVQUFVLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNyQixJQUFJLEVBQ0osUUFBUSxFQUNSLFNBQVMsR0FBRyxFQUFFLEVBQ2QsWUFBWSxFQUNaLFNBQVMsRUFDVCxJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sR0FBRyxLQUFLLEVBQ2QsUUFBUSxFQUNSLGlCQUFpQixHQUFHLGdCQUFnQixHQUNuQjtJQUNqQixNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFFbkIsTUFBTSxnQkFBZ0IsR0FBOEMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN6RSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTztZQUFFLE9BQU87UUFDOUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQztJQUVGLE1BQU0sZUFBZSxHQUE0QyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3RFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxTQUFTLGFBQ3ZCLEtBQUssSUFBSSxZQUFHLFNBQVMsRUFBQyxXQUFXLFlBQUUsS0FBSyxHQUFLLEVBQzlDLGVBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQ3BDLG1CQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQiwrQ0FBK0MsRUFDL0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUNqQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUNuQyxpQkFBaUIsQ0FDakIsRUFDSSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQ3pFLFFBQVEsRUFBRSxlQUFlLEVBQ3pCLFNBQVMsRUFBRSxnQkFBZ0IsRUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDN0IsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFDN0IsS0FBSyxFQUFFLEtBQUssR0FDWCxFQUVELEtBQUssSUFBSSxDQUNULEtBQUMsS0FBSyxJQUNMLEdBQUcsRUFBRSxRQUFRLEVBQ2IsR0FBRyxFQUFDLE9BQU8sRUFDWCxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsT0FBTyxFQUFFLEdBQUcsRUFBRTs0QkFDYixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ2IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNkLENBQUMsRUFDRCxTQUFTLEVBQUMseUdBQXlHLEdBQ2xILENBQ0YsRUFDQSxRQUFRLElBQ0osSUFDRCxDQUNOLENBQUM7QUFDSCxDQUFDIn0=