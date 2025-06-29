"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgLeft from "web-asset/svg/regular/fi-rr-angle-left.svg";
import ImgRight from "web-asset/svg/regular/fi-rr-angle-right.svg";
import ImgDot from "web-asset/svg/regular/fi-rr-menu-dots.svg";
export default function ({ buttons = 3, page, size, total, onClick, className = "lg:pt-4 lg:pb-4 pt-2 pb-2" }) {
    if (total === 0)
        return null;
    const last = Math.floor(total / size) + (0 < total % size ? 1 : 0) - 1;
    const left = [];
    const right = [];
    for (let i = 1; i <= buttons; i++) {
        if (0 <= page - i) {
            left.push(page - i);
        }
        if (page + i <= last) {
            right.push(page + i);
        }
    }
    const items = [...left, page, ...right].sort((a, b) => a - b);
    const hasPrev = items.findIndex((v) => v === 0) === -1;
    const hasNext = items.findIndex((v) => v === last) === -1;
    return (_jsxs("div", { className: fnCss.sum("flex justify-center items-center", className), children: [_jsx(Item, { hover: true, activate: false, disabled: page === 0, onClick: (e) => {
                    if (page === 0)
                        return;
                    onClick(e, page - 1);
                }, children: _jsx(Image, { className: "w-[0.7rem] filter-(--text-3-filter)", src: ImgLeft, alt: "prev", width: 20, height: 20 }) }), hasPrev && (_jsxs(_Fragment, { children: [_jsx(Item, { hover: true, activate: false, onClick: (e) => {
                            onClick(e, 0);
                        }, children: "1" }), _jsx(Dot, {})] })), items.map((i, key) => (_jsx(Item, { hover: true, activate: page === i, onClick: (e) => {
                    if (page === i)
                        return;
                    onClick(e, i);
                }, children: i + 1 }, key))), hasNext && (_jsxs(_Fragment, { children: [_jsx(Dot, {}), _jsx(Item, { hover: true, activate: false, onClick: (e) => {
                            onClick(e, last);
                        }, children: last + 1 })] })), _jsx(Item, { hover: true, activate: false, disabled: page === 0, onClick: (e) => {
                    if (page === last)
                        return;
                    onClick(e, page + 1);
                }, children: _jsx(Image, { className: "w-[0.7rem] filter-(--text-3-filter)", src: ImgRight, alt: "next", width: 20, height: 20 }) })] }));
}
function Item({ children, className = "", activate = false, hover = false, disabled = false, onClick, }) {
    return (_jsx("button", { disabled: disabled, className: fnCss.sum("w-[2rem] h-[2rem] flex items-center justify-center rounded-md border-[1px] border-[transparent] text-md", "mr-1 ml-1", className, activate ? "text-(--primary) font-bold" : "text-(--text-2)", hover ? "hover:border-(--primary) hover:text-(--primary-alt) hover:filter-(--primary-filter)" : "", disabled ? "cursor-not-allowed" : ""), onClick: onClick, children: children }));
}
function Dot() {
    return (_jsx(Image, { className: "w-[0.7rem] filter-(--text-3-filter) ml-1 mr-1", src: ImgDot, alt: "dot", width: 20, height: 20 }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvcGFnZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRSxPQUFPLFFBQVEsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRSxPQUFPLE1BQU0sTUFBTSwyQ0FBMkMsQ0FBQztBQVcvRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLDJCQUEyQixFQUFRO0lBQ2pILElBQUksS0FBSyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUU3QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RSxNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBRTNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUVELElBQUksSUFBSSxHQUFHLENBQUMs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