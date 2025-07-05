"use client";
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss, fnVoid, initCoordinate } from "nextjs-tools";
import { ModalContextMenu } from "../../../index.js";
import Image from "next/image";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
export default function ({ className = "w-full border-bottom", cols, list, onClick = fnVoid, onMiddleClick = fnVoid, onChangeSort = fnVoid, contextMenu = [], emptyLabel = _jsx("div", { className: "text-center", children: "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }), sort = { column: "", sorter: "NONE" }, cellPaddingClassName = "pb-2 pt-2 lg:pb-4 lg:pt-4", }) {
    const [touchDuration, setTouchDuration] = useState(0);
    const [row, setRow] = useState();
    const [coordinate, setCoordinate] = useState(initCoordinate);
    useEffect(() => {
        const onScrollEventListener = () => {
            setRow(undefined);
        };
        const onMouseUpEventListener = (e) => {
            if (e.button === 2)
                return;
            setRow(undefined);
        };
        window.addEventListener("mouseup", onMouseUpEventListener);
        window.addEventListener("scroll", onScrollEventListener);
        return () => {
            window.removeEventListener("mouseup", onMouseUpEventListener);
            window.removeEventListener("scroll", onScrollEventListener);
        };
    }, []);
    const onMouseUp = (row) => {
        return (e) => {
            switch (e.button) {
                case 0:
                    onClick(e, row);
                    break;
                case 1:
                    onMiddleClick(e, row);
                    break;
            }
        };
    };
    const onContextMenu = (row) => {
        return (e) => {
            e.preventDefault();
            setCoordinate({
                top: e.clientY,
                left: e.clientX,
            });
            setRow(row);
        };
    };
    const onTouchStart = (e) => {
        setTouchDuration(Date.now());
    };
    const onTouchEnd = (row) => {
        return (e) => {
            const duration = Date.now() - touchDuration;
            if (!(2000 < duration && duration < 5000))
                return;
            setRow(row);
        };
    };
    const onTouchMove = (e) => {
        setTouchDuration(0);
    };
    return (_jsx(_Fragment, { children: _jsxs("table", { onMouseLeave: () => setRow(undefined), className: fnCss.sum("w-full border-bottom border-top", className), children: [_jsx("thead", { children: _jsx("tr", { className: "no-drag", children: cols.map((col, key) => (_createElement(TheadButton, Object.assign({}, col, { cellPaddingClassName: cellPaddingClassName, onChangeSort: onChangeSort, key: key, sort: col.column === sort.column ? sort.sorter : "NONE" })))) }) }), _jsxs("tbody", { className: "no-drag", children: [list.length === 0 && (_jsx("tr", { className: "border-top", children: _jsx(Cell, { cellPaddingClassName: cellPaddingClassName, colSpan: cols.length, className: "", children: emptyLabel }) })), list.map((row, i1) => (_jsx("tr", { className: "border-top hover:bg-(--color-table-hover)", onMouseUp: onMouseUp(row), onContextMenu: onContextMenu(row), onTouchStart: onTouchStart, onTouchEnd: onTouchEnd(row), onTouchMove: onTouchMove, children: cols.map((col, i2) => (_jsx(Cell, { cellPaddingClassName: cellPaddingClassName, className: col.className, children: col.parser(row) }, i2))) }, i1)))] }), _jsx("tfoot", { children: _jsx("tr", { children: _jsx("td", { children: _jsx(ModalContextMenu, Object.assign({ value: row, menu: contextMenu }, coordinate)) }) }) })] }) }));
}
function TheadButton({ label, className, column, onChangeSort, sort, cellPaddingClassName, }) {
    if (!column) {
        return (_jsx(Cell, { className: fnCss.sum(className, "font-bold"), cellPaddingClassName: cellPaddingClassName, children: label }));
    }
    let color;
    let img;
    switch (sort) {
        case "ASC":
            color = "filter-(--danger-filter)";
            img = ImgAsc;
            break;
        case "DESC":
            color = "filter-(--success-filter)";
            img = ImgDesc;
            break;
        default:
            color = "filter-(--text-3-filter)";
            img = ImgDash;
    }
    const onToggle = (sorter) => {
        const list = ["ASC", "DESC", "NONE"];
        const idx = list.findIndex((v) => v === sorter);
        return list[(idx + 1) % list.length];
    };
    const onClick = (e) => {
        onChangeSort(e, column, onToggle(sort));
    };
    return (_jsx(Cell, { className: className, cellPaddingClassName: cellPaddingClassName, children: _jsxs("button", { className: "inline-flex items-baseline justify-center cursor-default", onClick: onClick, children: [_jsx(Image, { src: img, alt: "direction", width: 16, height: 16, className: fnCss.sum("no-drag mr-1 w-[0.7rem]", color) }), _jsx("div", { className: fnCss.sum(sort === "NONE" ? "text-(--text-2)" : "text-(--text-5)"), children: label })] }) }));
}
function Cell({ className, cellPaddingClassName, children, colSpan, }) {
    return (_jsx("td", { colSpan: colSpan, className: fnCss.sum(className, cellPaddingClassName), children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjIvdGFibGUvYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFDYixPQUFjLEVBQWtELFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDbEcsT0FBTyxFQUEwQixLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwRixPQUFPLEVBQUMsZ0JBQWdCLEVBQVMsTUFBTSxVQUFVLENBQUM7QUFDbEQsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLE9BQU8sTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRSxPQUFPLE1BQU0sTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RCxPQUFPLE9BQU8sTUFBTSw0Q0FBNEMsQ0FBQztBQTZCakUsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUMzQixTQUFTLEdBQUcsc0JBQXNCLEVBQ2xDLElBQUksRUFDSixJQUFJLEVBQ0osT0FBTyxHQUFHLE1BQU0sRUFDaEIsYUFBYSxHQUFHLE1BQU0sRUFDdEIsWUFBWSxHQUFHLE1BQU0sRUFDckIsV0FBVyxHQUFHLEVBQUUsRUFDaEIsVUFBVSxHQUFHLGNBQUssU0FBUyxFQUFDLGFBQWEsNkRBQWdCLEVBQ3pELElBQUksR0FBRyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxFQUNuQyxvQkFBb0IsR0FBRywyQkFBMkIsR0FDOUI7SUFDcEIsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsRUFBaUIsQ0FBQztJQUNoRCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBYSxjQUFj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