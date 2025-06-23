"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ModalContextMenu } from "../../../../index.js";
import Base from "../base/index.js";
const { RowBuilder, Colgroup, Table, RowEmpty, TheadSorter } = Base;
export default function ({ className, cols, list, empty, onMouseUp = () => { }, menu, sorter, onChangeSorter, }) {
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
    return (_jsxs("div", { className: className, onMouseLeave: () => setRow(null), children: [_jsxs(Table, { children: [_jsx(Colgroup, { cols: cols }), _jsx(TheadSorter, { cols: cols, value: sorter, onChange: onChangeSorter }), _jsxs("tbody", { children: [list.map((row, key) => (_jsx("tr", { style: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvdGFibGUvbWVudS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNwRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQVcsTUFBTSxZQUFZLENBQUM7QUFDdEQsT0FBTyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBZ0IzQixNQUFNLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxHQUFHLElBQUksQ0FBQztBQUlsRSxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQzNCLFNBQVMsRUFDVCxJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxTQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNwQixJQUFJLEVBQ0osTUFBTSxFQUNOLGNBQWMsR0FDSjtJQUNWLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsUUFBUSxDQUE4QjtRQUN6RSxHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO0tBQ1AsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxRQUFRLEVBQWUsQ0FBQztJQUM5QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYs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