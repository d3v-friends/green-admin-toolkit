"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
export default function ({ label, placeholder = "", defaultValue = "", onChange = () => { }, onKeyEnter = () => { }, name, disabled, className = "", autoComplete, inputMode, type, required, resize = false, }) {
    const [value, setValue] = useState(defaultValue);
    const [focus, setFocus] = useState(false);
    const onKeyDownHandler = (e) => {
        if (e.key !== "Enter")
            return;
        onKeyEnter(value);
    };
    const onChangeHandler = (e) => {
        onChange(e.target.value);
        setValue(e.target.value);
    };
    return (_jsxs(_Fragment, { children: [label && _jsx("p", { className: "mb-[-5px]", children: label }), _jsxs("div", { className: fnCss.sum("relative", className), children: [_jsx("textarea", { className: fnCss.sum("outline-none w-full min-h-[2.5rem] p-2 border-all rounded-md", focus ? "border-(--primary)" : "", resize ? "resize-y" : "resize-none"), placeholder, disabled, name, autoComplete, inputMode, type, required, onChange: onChangeHandler, onKeyDown: onKeyDownHandler, onFocus: () => setFocus(true), onBlur: () => setFocus(false), value: value }), value && (_jsx(Image, { src: ImgCross, alt: "clear", width: 20, height: 20, onClick: () => {
                            setValue("");
                            onChange("");
                        }, className: "absolute right-0 top-4 no-drag mr-2 w-[0.7rem] filter-(--text-2-filter) hover:filter-(--primary-filter)" }))] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2lucHV0LXRleHRhcmVhL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQU1iLFFBQVEsR0FDUixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBUyxLQUFLLEVBQXlCLE1BQU0sY0FBYyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLFFBQVEsTUFBTSx1Q0FBdUMsQ0FBQztBQWtCN0QsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixLQUFLLEVBQ0wsV0FBVyxHQUFHLEVBQUUsRUFDaEIsWUFBWSxHQUFHLEVBQUUsRUFDakIsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDbkIsVUFBVSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDckIsSUFBSSxFQUNKLFFBQVEsRUFDUixTQUFTLEdBQUcsRUFBRSxFQUNkLFlBQVksRUFDWixTQUFTLEVBQ1QsSUFBSSxFQUNKLFFBQVEsRUFDUixNQUFNLEdBQUcsS0FBSyxHQUNHO0lBQ2pCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTFDLE1BQU0sZ0JBQWdCLEdBQThDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDekUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU87WUFBRSxPQUFPO1FBQzlCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUM7SUFFRixNQUFNLGVBQWUsR0FBNEMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN0RSxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sOEJBQ0UsS0FBSyxJQUFJLFlBQUcsU0FBUyxFQUFDLFdBQVcsWUFBRSxLQUFLLEdBQUssRUFDOUMsZUFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLGFBQy9DLG1CQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQiw4REFBOEQsRUFDOUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUNqQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUNuQyxFQUNJLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFDekUsUUFBUSxFQUFFLGVBQWUsRUFDekIsU0FBUyxFQUFFLGdCQUFnQixFQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM3QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUM3QixLQUFLLEVBQUUsS0FBSyxHQUNYLEVBRUQsS0FBSyxJQUFJLENBQ1QsS0FBQyxLQUFLLElBQ0wsR0FBRyxFQUFFLFFBQVEsRUFDYixHQUFHLEVBQUMsT0FBTyxFQUNYLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNiLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDYixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUNELFNBQVMsRUFBQyx5R0FBeUcsR0FDbEgsQ0FDRixJQUNJLElBQ0osQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9