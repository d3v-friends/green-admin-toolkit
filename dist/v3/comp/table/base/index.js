"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, } from "react";
import { concat, fnVoid } from "nextjs-tools";
import PCContextMenu from "./pc-context-menu.js";
import MobileContextMenu from "./mobile-context-menu.js";
import TheadTd from "./thead-td.js";
export default function (_a) {
    var { list, columns, onClickRow = fnVoid, onMiddleClickRow = fnVoid, className, onContextMenuRow } = _a, attr = __rest(_a, ["list", "columns", "onClickRow", "onMiddleClickRow", "className", "onContextMenuRow"]);
    const touchDuration = 500;
    const [touch, onChangeTouch] = useState(0);
    className = className ? concat(className, "green") : "green";
    const onPointerUp = (row) => {
        return (e) => {
            switch (e.pointerType) {
                case "mouse":
                    switch (e.button) {
                        case 0:
                            onClickRow(row);
                            break;
                        case 1:
                            onMiddleClickRow(row);
                            break;
                    }
                    return;
            }
        };
    };
    const onTouchStart = (row) => (e) => {
        onChangeTouch(Date.now());
        return;
    };
    const onTouchEnd = (row) => (e) => {
        if (!e.cancelable)
            return;
        if (Date.now() - touch < touchDuration) {
            onClickRow(row);
            return;
        }
        if (!onContextMenuRow) {
            return;
        }
        e.preventDefault();
        MobileContextMenu({
            row,
            children: onContextMenuRow,
        });
    };
    const onContextMenu = (row) => (e) => {
        if (!onContextMenuRow) {
            return;
        }
        e.preventDefault();
        PCContextMenu({
            clientX: e.clientX,
            clientY: e.clientY,
            scrollY: window.scrollY,
            row,
            children: onContextMenuRow,
        });
    };
    return (_jsxs("table", Object.assign({ className: className }, attr, { children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((column, key) => (_jsx("td", { className: concat(column.widthClassName, column.theadClassName || "text-center font-bold"), children: _jsx(TheadTd, { sortkey: column.sortkey, children: column.label }) }, key))) }) }), _jsx("tbody", { children: list.map((row, i1) => (_jsx("tr", { onPointerUp: onPointerUp(row), onContextMenu: onContextMenu(row), children: columns.map((column, i2) => (_jsx("td", { className: column.tbodyClassName, onTouchStart: onTouchStart(row), onTouchEnd: onTouchEnd(row), onTouchCancel: (e) => { }, children: column.row(row) }, i2))) }, i1))) })] })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjMvY29tcC90YWJsZS9iYXNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFDYixPQUFjLEVBTWIsUUFBUSxHQUNSLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFDLE1BQU0sRUFBVSxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEQsT0FBTyxhQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxpQkFBaUIsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLE9BQU8sTUFBTSxZQUFZLENBQUM7QUEwQmpDLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFRUDtRQVJPLEVBQzNCLElBQUksRUFDSixPQUFPLEVBQ1AsVUFBVSxHQUFHLE1BQU0sRUFDbkIsZ0JBQWdCLEdBQUcsTUFBTSxFQUN6QixTQUFTLEVBQ1QsZ0JBQWdCLE9BRUksRUFEakIsSUFBSSxjQVBvQixzRkFRM0IsQ0FETztJQUVQLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUMxQixNQUFNLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDN0QsTUFBTSxXQUFXLEdBQWdDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDeEQsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ1osUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssT0FBTztvQkFDWCxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDbEIsS0FBSyxDQUFDOzRCQUNMLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FB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