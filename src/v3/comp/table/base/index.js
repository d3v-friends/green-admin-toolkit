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
import PCContextMenu from "./pc-context-menu";
import MobileContextMenu from "./mobile-context-menu";
import TheadTd from "./thead-td";
export default function (_a) {
    var { list, columns, onClickRow = fnVoid, onMiddleClickRow = fnVoid, className, onContextMenuRow, multiSortable, emptyListMessage = "데이터가 없습니다." } = _a, attr = __rest(_a, ["list", "columns", "onClickRow", "onMiddleClickRow", "className", "onContextMenuRow", "multiSortable", "emptyListMessage"]);
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
    return (_jsxs("table", Object.assign({ className: className }, attr, { children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((column, key) => (_jsx("td", { className: concat(column.widthClassName, column.theadClassName || "text-center font-bold"), children: _jsx(TheadTd, { sortkey: column.sortkey, multiSortable: multiSortable, children: column.label }) }, key))) }) }), _jsxs("tbody", { children: [list.map((row, i1) => (_jsx("tr", { onPointerUp: onPointerUp(row), onContextMenu: onContextMenu(row), children: columns.map((column, i2) => (_jsx("td", { className: column.tbodyClassName, onTouchStart: onTouchStart(row), onTouchEnd: onTouchEnd(row), onTouchCancel: (e) => { }, children: column.row(row) }, i2))) }, i1))), list.length === 0 && (_jsx("tr", { children: _jsx("td", { className: "text-center", colSpan: columns.length, children: emptyListMessage }) }))] })] })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBQ2IsT0FBYyxFQU1iLFFBQVEsR0FDUixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBQyxNQUFNLEVBQVUsTUFBTSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3BELE9BQU8sYUFBYSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8saUJBQWlCLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxPQUFPLE1BQU0sWUFBWSxDQUFDO0FBNEJqQyxNQUFNLENBQUMsT0FBTyxXQUFjLEVBVVA7UUFWTyxFQUMzQixJQUFJLEVBQ0osT0FBTyxFQUNQLFVBQVUsR0FBRyxNQUFNLEVBQ25CLGdCQUFnQixHQUFHLE1BQU0sRUFDekIsU0FBUyxFQUNULGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZ0JBQWdCLEdBQUcsWUFBWSxPQUVYLEVBRGpCLElBQUksY0FUb0IsMkhBVTNCLENBRE87SUFFUCxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDMUIsTUFBTSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzdELE1BQU0sV0FBVyxHQUFnQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3hELE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNaLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QixLQUFLLE9BQU87b0JBQ1gsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ2xCLEtBQUssQ0FBQzs0QkFDTCxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7NEJB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