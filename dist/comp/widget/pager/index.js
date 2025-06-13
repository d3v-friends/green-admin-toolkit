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
    if (size === 0)
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
    return (_jsxs("div", { className: fnCss.sum("flex justify-center items-center", className), children: [_jsx(Item, { hover: true, activate: false, disabled: page === 0, onMouseUp: (e) => {
                    if (page === 0)
                        return;
                    onClick(e, page - 1);
                }, children: _jsx(Image, { className: "w-[0.7rem] filter-(--text-3-filter)", src: ImgLeft, alt: "prev", width: 20, height: 20 }) }), hasPrev && (_jsxs(_Fragment, { children: [_jsx(Item, { hover: true, activate: false, onMouseUp: (e) => {
                            onClick(e, 0);
                        }, children: "1" }), _jsx(Dot, {})] })), items.map((i, key) => (_jsx(Item, { hover: true, activate: page === i, onMouseUp: (e) => {
                    if (page === i)
                        return;
                    onClick(e, i);
                }, children: i + 1 }, key))), hasNext && (_jsxs(_Fragment, { children: [_jsx(Dot, {}), _jsx(Item, { hover: true, activate: false, onMouseUp: (e) => {
                            onClick(e, last);
                        }, children: last + 1 })] })), _jsx(Item, { hover: true, activate: false, disabled: page === 0, onMouseUp: (e) => {
                    if (page === last)
                        return;
                    onClick(e, page + 1);
                }, children: _jsx(Image, { className: "w-[0.7rem] filter-(--text-3-filter)", src: ImgRight, alt: "next", width: 20, height: 20 }) })] }));
}
function Item({ children, className = "", activate = false, hover = false, disabled = false, onMouseUp, }) {
    return (_jsx("button", { disabled: disabled, className: fnCss.sum("w-[2rem] h-[2rem] flex items-center justify-center rounded-md border-[1px] border-[transparent] text-md", "mr-1 ml-1", className, activate ? "text-(--primary) font-bold" : "text-(--text-2)", hover ? "hover:border-(--primary) hover:text-(--primary-alt) hover:filter-(--primary-filter)" : "", disabled ? "cursor-not-allowed" : ""), onMouseUp: onMouseUp, children: children }));
}
function Dot() {
    return (_jsx(Image, { className: "w-[0.7rem] filter-(--text-3-filter) ml-1 mr-1", src: ImgDot, alt: "dot", width: 20, height: 20 }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvcGFnZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRSxPQUFPLFFBQVEsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRSxPQUFPLE1BQU0sTUFBTSwyQ0FBMkMsQ0FBQztBQWEvRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLDJCQUEyQixFQUFRO0lBQ2pILElBQUksS0FBSyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUM3QixJQUFJLElBQUksS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkUsTUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUUzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMs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