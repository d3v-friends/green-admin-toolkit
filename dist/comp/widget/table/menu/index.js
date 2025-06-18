"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ModalContextMenu } from "../../../../index.js";
import Base from "../base/index.js";
const { RowBuilder, Colgroup, Thead, Table, RowEmpty } = Base;
export default function ({ className, cols, list, empty, onMouseUp = () => { }, menu }) {
    const [coordinate, setCoordinate] = useState({
        top: 0,
        left: 0,
    });
    const [row, setRow] = useState();
    const refSetRow = useRef(setRow);
    const [touchDuration, setTouchDuration] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            refSetRow.current(null);
        };
        const onMouseUp = (e) => {
            if (e.button === 2)
                return;
            refSetRow.current(null);
        };
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return (_jsxs("div", { className: className, onMouseLeave: () => setRow(null), children: [_jsxs(Table, { children: [_jsx(Colgroup, { cols: cols }), _jsx(Thead, { cols: cols }), _jsxs("tbody", { children: [list.map((row, key) => (_jsx("tr", { style: {
                                    userSelect: "none",
                                    WebkitUserSelect: "none",
                                    WebkitTouchCallout: "none",
                                }, className: "hover:bg-(--color-table-hover) h-14", onMouseUp: (e) => onMouseUp(e, row), onContextMenu: (e) => {
                                    e.preventDefault();
                                    setCoordinate({
                                        top: e.clientY,
                                        left: e.clientX,
                                    });
                                    setRow(row);
                                }, onTouchStart: (e) => {
                                    setTouchDuration(Date.now());
                                }, onTouchEnd: (e) => {
                                    const duration = Date.now() - touchDuration;
                                    if (!(2000 < duration && duration < 5000))
                                        return;
                                    setRow(row);
                                }, onTouchMove: (e) => {
                                    setTouchDuration(0);
                                    setRow(null);
                                }, children: _jsx(RowBuilder, { cols: cols, value: row, index: key }) }, key))), list.length === 0 && _jsx(RowEmpty, { cols: cols, children: empty })] })] }), row && (_jsx(ModalContextMenu, Object.assign({ value: row, menu: menu }, coordinate)))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvdGFibGUvbWVudS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNwRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQVcsTUFBTSxZQUFZLENBQUM7QUFDdEQsT0FBTyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBYTNCLE1BQU0sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLEdBQUcsSUFBSSxDQUFDO0FBSTVELE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBRSxJQUFJLEVBQVc7SUFDL0YsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxRQUFRLENBQThCO1FBQ3pFLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7S0FDUCxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsRUFBZSxDQUFDO0lBQzlDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDckIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBRyxDQUFDLENB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