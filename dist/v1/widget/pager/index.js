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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvd2lkZ2V0L3BhZ2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVuQyxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxPQUFPLE1BQU0sNENBQTRDLENBQUM7QUFDakUsT0FBTyxRQUFRLE1BQU0sNkNBQTZDLENBQUM7QUFDbkUsT0FBTyxNQUFNLE1BQU0sMkNBQTJDLENBQUM7QUFhL0QsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRywyQkFBMkIsRUFBUTtJQUNqSCxJQUFJLEtBQUssS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDN0IsSUFBSSxJQUFJLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7SUFFM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFD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