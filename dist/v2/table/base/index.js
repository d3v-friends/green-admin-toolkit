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
            e.stopPropagation();
            setCoordinate({
                top: e.clientY,
                left: e.clientX,
            });
            setRow(row);
        };
    };
    const onTouchStart = (e) => {
        e.stopPropagation();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvdGFibGUvYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFDYixPQUFjLEVBQWtELFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDbEcsT0FBTyxFQUEwQixLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwRixPQUFPLEVBQUMsZ0JBQWdCLEVBQVMsTUFBTSxVQUFVLENBQUM7QUFDbEQsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLE9BQU8sTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRSxPQUFPLE1BQU0sTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RCxPQUFPLE9BQU8sTUFBTSw0Q0FBNEMsQ0FBQztBQTZCakUsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUMzQixTQUFTLEdBQUcsc0JBQXNCLEVBQ2xDLElBQUksRUFDSixJQUFJLEVBQ0osT0FBTyxHQUFHLE1BQU0sRUFDaEIsYUFBYSxHQUFHLE1BQU0sRUFDdEIsWUFBWSxHQUFHLE1BQU0sRUFDckIsV0FBVyxHQUFHLEVBQUUsRUFDaEIsVUFBVSxHQUFHLGNBQUssU0FBUyxFQUFDLGFBQWEsNkRBQWdCLEVBQ3pELElBQUksR0FBRyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxFQUNuQyxvQkFBb0IsR0FBRywyQkFBMkIsR0FDOUI7SUFDcEIsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsRUFBaUIsQ0FBQztJQUNoRCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBYSxjQUFjLENB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