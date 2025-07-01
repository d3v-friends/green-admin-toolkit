"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgUp from "web-asset/svg/regular/fi-rr-angle-up.svg";
import ImgDown from "web-asset/svg/regular/fi-rr-angle-down.svg";
export default function ({ items, imgSrc, initIndex = 0, onSelect = () => { }, className = "", textAlign = "text-center", name, label, }) {
    if (items.length === 0)
        return "items is empty";
    const [value, setValue] = useState(items[initIndex]);
    const [open, setOpen] = useState(false);
    const [button, setButton] = useState();
    const [pos, setPos] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    });
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
    useEffect(() => {
        setValue(items[initIndex]);
    }, [initIndex]);
    return (_jsxs("div", { children: [label && _jsx("p", { children: label }), _jsxs("div", { className: "relative", children: [_jsx("input", { hidden: true, value: value.value, onChange: () => { }, name: name }), _jsx("div", { className: fnCss.sum("group", className), children: _jsxs("button", { type: "button", ref: setButton, onClick: () => setOpen(!open), className: fnCss.sum("border-all h-[2.5rem] w-full", "rounded-md overflow-hidden", "flex items-center", "text-(--primary)", "group-hover:border-(--primary)", "outline-none", open ? "border-(--primary)" : "border-(--border)"), children: [imgSrc && (_jsx("div", { className: fnCss.sum("border-right h-full flex items-center pl-2 pr-2 bg-(--primary)", open ? "border-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("no-drag filter-(--primary-alt-filter)"), src: imgSrc, alt: "icon", width: 25, height: 25 }) })), _jsx("div", { className: fnCss.sum("grow pl-2 pr-2 overflow-hidden", "group-hover:underline group-hover:font-bold", textAlign), children: value.label ? value.label : value.value }), _jsx(Image, { src: open ? ImgUp : ImgDown, alt: "arrow", height: 16, width: 16, className: fnCss.sum("filter-(--primary-filter) mr-2") })] }) }), _jsx("div", { style: { minWidth: pos.width, top: pos.top + pos.height }, className: fnCss.sum(open ? "block" : "hidden", "z-5", "mt-2 p-2 bg-(--bg-modal) rounded-md shadow-2xl", "absolute", "border-all"), children: items.map((value, i) => (_jsx("button", { type: "button", className: "block w-full", onClick: () => {
                                onSelect(value.value);
                                setValue(value);
                                setOpen(false);
                            }, children: _jsx(Label, { children: value }) }, i))) })] })] }));
}
function Label({ children }) {
    const { value, label, imgSrc } = children;
    return (_jsx("div", { className: "group", children: _jsxs("div", { className: "rounded-sm flex p-2 group-hover:bg-(--primary) group-hover:text-(--primary-alt)", children: [imgSrc && (_jsx(Image, { src: imgSrc, alt: "icon", width: 20, height: 20, className: "mr-2 filter-(--text-2-filter) group-hover:filter-(--primary-alt-filter)" })), _jsx("div", { className: fnCss.sum("grow text-left group-hover:underline"), children: label ? label : value })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvZm9ybS9pbnB1dC1kcm9wZG93bi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sRUFBUyxLQUFLLEVBQTZCLE1BQU0sY0FBYyxDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEtBQUssTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RCxPQUFPLE9BQU8sTUFBTSw0Q0FBNEMsQ0FBQztBQW9CakUsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsR0FBRyxDQUFDLEVBQ2IsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDbkIsU0FBUyxHQUFHLEVBQUUsRUFDZCxTQUFTLEdBQUcsYUFBYSxFQUN6QixJQUFJLEVBQ0osS0FBSyxHQUNZO0lBQ2pCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxnQkFBZ0IsQ0FBQztJQUVoRCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyRCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLFFBQVEsRUFBK0IsQ0FBQztJQUNwRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBVztRQUN4QyxJQUFJLEVBQUUsQ0FBQztRQUNQLEdBQUcsRUFBRSxDQUFDO1FBQ04sS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FB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