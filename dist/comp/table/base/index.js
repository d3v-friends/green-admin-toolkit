"use client";
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import { InitCoordinate, InitFunction, ModalContextMenu } from "../../../index.js";
import Image from "next/image";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
export default function ({ className = "w-full border-bottom", cols, list, onClick = InitFunction, onMiddleClick = InitFunction, onChangeSort = InitFunction, contextMenu = [], emptyLabel = _jsx("div", { className: "text-center", children: "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }), sort = { column: "", sorter: "NONE" }, }) {
    const [touchDuration, setTouchDuration] = useState(0);
    const [row, setRow] = useState();
    const [coordinate, setCoordinate] = useState(InitCoordinate);
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
        e.preventDefault();
        e.stopPropagation();
        setTouchDuration(Date.now());
    };
    const onTouchEnd = (row) => {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            const duration = Date.now() - touchDuration;
            if (!(2000 < duration && duration < 5000))
                return;
            setRow(row);
        };
    };
    const onTouchMove = (e) => {
        setTouchDuration(0);
    };
    return (_jsx(_Fragment, { children: _jsxs("table", { onMouseLeave: () => setRow(undefined), className: fnCss.sum("w-full border-bottom border-top", className), children: [_jsx("thead", { children: _jsx("tr", { className: "no-drag", children: cols.map((col, key) => (_createElement(TheadButton, Object.assign({}, col, { onChangeSort: onChangeSort, key: key, sort: col.column === sort.column ? sort.sorter : "NONE" })))) }) }), _jsxs("tbody", { className: "no-drag", children: [list.length === 0 && (_jsx("tr", { className: "border-top", children: _jsx(Cell, { colSpan: cols.length, className: "", children: emptyLabel }) })), list.map((row, i1) => (_jsx("tr", { className: "border-top hover:bg-(--color-table-hover)", onMouseUp: onMouseUp(row), onContextMenu: onContextMenu(row), onTouchStart: onTouchStart, onTouchEnd: onTouchEnd(row), onTouchMove: onTouchMove, children: cols.map((col, i2) => (_jsx(Cell, { cellPaddingClassName: col.cellPaddingClassName, className: col.className, children: col.parser(row) }, i2))) }, i1)))] }), _jsx("tfoot", { children: _jsx("tr", { children: _jsx("td", { children: _jsx(ModalContextMenu, Object.assign({ value: row, menu: contextMenu }, coordinate)) }) }) })] }) }));
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
function Cell({ className, cellPaddingClassName = "pb-3 pt-2", children, colSpan, }) {
    return (_jsx("td", { colSpan: colSpan, className: fnCss.sum(className, cellPaddingClassName), children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9iYXNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUNiLE9BQWMsRUFBa0QsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNsRyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQU8sRUFBd0IsY0FBYyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBUyxNQUFNLFlBQVksQ0FBQztBQUN6RyxPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sT0FBTyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xFLE9BQU8sTUFBTSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlELE9BQU8sT0FBTyxNQUFNLDRDQUE0QyxDQUFDO0FBNkJqRSxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQzNCLFNBQVMsR0FBRyxzQkFBc0IsRUFDbEMsSUFBSSxFQUNKLElBQUksRUFDSixPQUFPLEdBQUcsWUFBWSxFQUN0QixhQUFhLEdBQUcsWUFBWSxFQUM1QixZQUFZLEdBQUcsWUFBWSxFQUMzQixXQUFXLEdBQUcsRUFBRSxFQUNoQixVQUFVLEdBQUcsY0FBSyxTQUFTLEVBQUMsYUFBYSw2REFBZ0IsRUFDekQsSUFBSSxHQUFHLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEdBQ2Y7SUFDcEIsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsRUFBaUIsQ0FBQztJQUNoRCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBYSxjQUFjLENBQUMsQ0FBQztJQUV6RSxTQUFTLENBQUMs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