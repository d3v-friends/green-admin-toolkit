"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgUp from "web-asset/svg/regular/fi-rr-angle-up.svg";
import ImgDown from "web-asset/svg/regular/fi-rr-angle-down.svg";
export default function ({ items, imgSrc, initIndex = 0, onSelect = () => { }, className = "", textAlign = "text-center", name, }) {
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
    return (_jsxs("div", { className: "relative", children: [_jsx("input", { hidden: true, value: value.value, onChange: () => { }, name: name }), _jsx("div", { className: fnCss.sum("group", className), children: _jsxs("button", { type: "button", ref: setButton, onClick: () => setOpen(!open), className: fnCss.sum("border-all h-[2.5rem] w-full", "rounded-md overflow-hidden", "flex items-center", "text-(--primary)", "group-hover:border-(--primary)", "outline-none", open ? "border-(--primary)" : "border-(--border)"), children: [imgSrc && (_jsx("div", { className: fnCss.sum("border-right h-full flex items-center pl-2 pr-2 bg-(--primary)", open ? "border-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("no-drag filter-(--primary-alt-filter)"), src: imgSrc, alt: "icon", width: 25, height: 25 }) })), _jsx("div", { className: fnCss.sum("grow pl-2 pr-2 overflow-hidden", "group-hover:underline group-hover:font-bold", textAlign), children: value.label ? value.label : value.value }), _jsx(Image, { src: open ? ImgUp : ImgDown, alt: "arrow", height: 16, width: 16, className: fnCss.sum("filter-(--primary-filter) mr-2") })] }) }), _jsx("div", { style: { minWidth: pos.width, top: pos.top + pos.height }, className: fnCss.sum(open ? "block" : "hidden", "z-5", "mt-2 p-2 bg-(--bg-modal) rounded-md shadow-2xl", "absolute", "border-all"), children: items.map((value, i) => (_jsx("button", { type: "button", className: "block w-full", onClick: () => {
                        onSelect(value.value);
                        setValue(value);
                        setOpen(false);
                    }, children: _jsx(Label, { children: value }) }, i))) })] }));
}
function Label({ children }) {
    const { value, label, imgSrc } = children;
    return (_jsx("div", { className: "group", children: _jsxs("div", { className: "rounded-sm flex p-2 group-hover:bg-(--primary) group-hover:text-(--primary-alt)", children: [imgSrc && (_jsx(Image, { src: imgSrc, alt: "icon", width: 20, height: 20, className: "mr-2 filter-(--text-2-filter) group-hover:filter-(--primary-alt-filter)" })), _jsx("div", { className: fnCss.sum("grow text-left group-hover:underline"), children: label ? label : value })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2lucHV0LWRyb3Bkb3duL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDNUQsT0FBTyxFQUFTLEtBQUssRUFBNkIsTUFBTSxjQUFjLENBQUM7QUFDdkUsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxNQUFNLDBDQUEwQyxDQUFDO0FBQzdELE9BQU8sT0FBTyxNQUFNLDRDQUE0QyxDQUFDO0FBbUJqRSxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUFHLENBQUMsRUFDYixRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNuQixTQUFTLEdBQUcsRUFBRSxFQUNkLFNBQVMsR0FBRyxhQUFhLEVBQ3pCLElBQUksR0FDYTtJQUNqQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sZ0JBQWdCLENBQUM7SUFFaEQsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDckQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxRQUFRLEVBQStCLENBQUM7SUFDcEUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxRQUFRLENBQVc7UUFDeEMsSUFBSSxFQUFFLENBQUM7UUFDUCxHQUFHLEVBQUUsQ0FBQztRQUNOLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUM7S0FDVCxD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