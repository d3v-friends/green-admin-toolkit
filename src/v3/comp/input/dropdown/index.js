"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgUp from "web-asset/svg/regular/fi-rr-angle-up.svg";
import ImgDown from "web-asset/svg/regular/fi-rr-angle-down.svg";
export default function ({ items, imgSrc, value, onChange, className, textAlign = "text-center", label, }) {
    if (items.length === 0)
        return "items is empty";
    const [idx, onChangeIdx] = useState(items.findIndex((i) => i.value === value));
    const [open, setOpen] = useState(false);
    const [button, setButton] = useState();
    const [pos, setPos] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    });
    if (idx === -1)
        return "invalid value";
    useEffect(() => {
        if (!button)
            return;
        setPos({
            left: button.offsetLeft,
            top: button.offsetTop,
            width: button.offsetWidth,
            height: button.offsetHeight,
        });
    }, [button]);
    return (_jsxs("div", { className: className, children: [label && _jsx("label", { className: "mb-[-5px]", children: label }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: fnCss.sum("group"), children: _jsxs("button", { type: "button", ref: setButton, onClick: () => setOpen(!open), className: fnCss.sum("border-all h-[2.5rem] w-full", "rounded-md overflow-hidden", "flex items-center", "text-(--primary)", "group-hover:border-(--primary)", "outline-none", open ? "border-(--primary)" : "border-(--border)"), children: [imgSrc && (_jsx("div", { className: fnCss.sum("border-right h-full flex items-center pl-2 pr-2 bg-(--primary)", open ? "border-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("no-drag filter-(--primary-alt-filter)"), src: imgSrc, alt: "icon", width: 25, height: 25 }) })), _jsx("div", { className: fnCss.sum("grow pl-2 pr-2 overflow-hidden", "group-hover:underline group-hover:font-bold", textAlign), children: items[idx].label }), _jsx(Image, { src: open ? ImgUp : ImgDown, alt: "arrow", height: 16, width: 16, className: fnCss.sum("filter-(--primary-filter) mr-2") })] }) }), _jsx("div", { style: { minWidth: pos.width, top: pos.top + pos.height }, className: fnCss.sum(open ? "block" : "hidden", "z-5", "mt-2 p-2 bg-(--bg-modal) rounded-md shadow-2xl", "absolute", "border-all"), children: items.map((value, i) => (_jsx("button", { type: "button", className: "block w-full", onClick: () => {
                                onChangeIdx(i);
                                onChange(value.value);
                                setOpen(false);
                            }, children: _jsx(Label, { children: value }) }, i))) })] })] }));
}
function Label({ children }) {
    const { value, label, imgSrc } = children;
    return (_jsx("div", { className: "group", children: _jsxs("div", { className: "rounded-sm flex p-2 group-hover:bg-(--primary) group-hover:text-(--primary-alt)", children: [imgSrc && (_jsx(Image, { src: imgSrc, alt: "icon", width: 20, height: 20, className: "mr-2 filter-(--text-2-filter) group-hover:filter-(--primary-alt-filter)" })), _jsx("div", { className: fnCss.sum("grow text-left group-hover:underline"), children: label })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sRUFBUyxLQUFLLEVBQTZCLE1BQU0sY0FBYyxDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEtBQUssTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RCxPQUFPLE9BQU8sTUFBTSw0Q0FBNEMsQ0FBQztBQWtCakUsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUMzQixLQUFLLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsR0FBRyxhQUFhLEVBQ3pCLEtBQUssR0FDZTtJQUNwQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sZ0JBQWdCLENBQUM7SUFDaEQsTUFBTSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsUUFBUSxFQUErQixDQUFDO0lBQ3BFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFXO1FBQ3hDLElBQUksRUFBRSxDQUFDO1FBQ1AsR0FBRyxFQUFFLENBQUM7UUFDTixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO0tBQ1QsQ0FBQyxDQUFDO0lBRUgsSUFBSSxHQUFHLEtBQUssQ0FB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