"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgUp from "web-asset/svg/regular/fi-rr-angle-up.svg";
import ImgDown from "web-asset/svg/regular/fi-rr-angle-down.svg";
export default function ({ items, imgSrc, initIndex = 0, onSelect = () => { }, className = "", textAlign = "text-center", }) {
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
    return (_jsxs("div", { className: "relative", children: [_jsx("input", { hidden: true, value: value.value, onChange: () => { } }), _jsx("div", { className: fnCss.sum("group", className), children: _jsxs("button", { ref: setButton, onClick: () => setOpen(!open), className: fnCss.sum("border-all h-[2.5rem] w-full", "rounded-md overflow-hidden", "flex items-center", "text-(--primary)", "group-hover:border-(--primary)", "outline-none", open ? "border-(--primary)" : "border-(--border)"), children: [imgSrc && (_jsx("div", { className: fnCss.sum("border-right h-full flex items-center pl-2 pr-2 bg-(--primary)", open ? "border-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("no-drag filter-(--primary-alt-filter)"), src: imgSrc, alt: "icon", width: 25, height: 25 }) })), _jsx("div", { className: fnCss.sum("grow pl-2 pr-2 overflow-hidden", "group-hover:underline group-hover:font-bold", textAlign), children: value.label ? value.label : value.value }), _jsx(Image, { src: open ? ImgUp : ImgDown, alt: "arrow", height: 16, width: 16, className: fnCss.sum("filter-(--primary-filter) mr-2") })] }) }), _jsx("div", { style: { minWidth: pos.width, top: pos.top + pos.height }, className: fnCss.sum(open ? "block" : "hidden", "z-5", "mt-2 p-2 bg-(--bg-modal) rounded-md shadow-2xl", "absolute", "border-all"), children: items.map((value, i) => (_jsx("button", { className: "block w-full", onClick: () => {
                        onSelect(value.value);
                        setValue(value);
                        setOpen(false);
                    }, children: _jsx(Label, { children: value }) }, i))) })] }));
}
function Label({ children }) {
    const { value, label, imgSrc } = children;
    return (_jsx("div", { className: "group", children: _jsxs("div", { className: "rounded-sm flex p-2 group-hover:bg-(--primary) group-hover:text-(--primary-alt)", children: [imgSrc && (_jsx(Image, { src: imgSrc, alt: "icon", width: 20, height: 20, className: "mr-2 filter-(--text-2-filter) group-hover:filter-(--primary-alt-filter)" })), _jsx("div", { className: fnCss.sum("grow text-left group-hover:underline"), children: label ? label : value })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2lucHV0LWRyb3Bkb3duL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDNUQsT0FBTyxFQUFTLEtBQUssRUFBNkIsTUFBTSxjQUFjLENBQUM7QUFDdkUsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxNQUFNLDBDQUEwQyxDQUFDO0FBQzdELE9BQU8sT0FBTyxNQUFNLDRDQUE0QyxDQUFDO0FBbUJqRSxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUFHLENBQUMsRUFDYixRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNuQixTQUFTLEdBQUcsRUFBRSxFQUNkLFNBQVMsR0FBRyxhQUFhLEdBQ1I7SUFDakIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLGdCQUFnQixDQUFDO0lBRWhELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsUUFBUSxFQUErQixDQUFDO0lBQ3BFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFXO1FBQ3hDLElBQUksRUFBRSxDQUFDO1FBQ1AsR0FBRyxFQUFFLENBQUM7UUFDTixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO0tBQ1QsQ0FBQyxDQUFDO0lB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