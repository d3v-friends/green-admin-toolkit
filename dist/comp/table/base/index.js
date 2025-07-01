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
export default function ({ className = "w-full border-bottom", cols, list, onClick = InitFunction, onMiddleClick = InitFunction, onChangeSort = InitFunction, contextMenu = [], emptyLabel = _jsx("div", { className: "text-center", children: "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }), sort = { column: "", sorter: "NONE" }, cellPaddingClassName = "pb-2 pt-2 lg:pb-4 lg:pt-4", }) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9iYXNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUNiLE9BQWMsRUFBa0QsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNsRyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQU8sRUFBd0IsY0FBYyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBUyxNQUFNLFlBQVksQ0FBQztBQUN6RyxPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sT0FBTyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xFLE9BQU8sTUFBTSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlELE9BQU8sT0FBTyxNQUFNLDRDQUE0QyxDQUFDO0FBNkJqRSxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQzNCLFNBQVMsR0FBRyxzQkFBc0IsRUFDbEMsSUFBSSxFQUNKLElBQUksRUFDSixPQUFPLEdBQUcsWUFBWSxFQUN0QixhQUFhLEdBQUcsWUFBWSxFQUM1QixZQUFZLEdBQUcsWUFBWSxFQUMzQixXQUFXLEdBQUcsRUFBRSxFQUNoQixVQUFVLEdBQUcsY0FBSyxTQUFTLEVBQUMsYUFBYSw2REFBZ0IsRUFDekQsSUFBSSxHQUFHLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEVBQ25DLG9CQUFvQixHQUFHLDJCQUEyQixHQUM5QjtJQUNwQixNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxFQUFpQixDQUFDO0lBQ2hELE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsUUFBUSxDQUFhLGNBQWMs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