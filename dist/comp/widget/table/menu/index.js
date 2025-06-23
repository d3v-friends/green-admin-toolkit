"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ModalContextMenu } from "../../../../index.js";
import Base from "../base/index.js";
const { RowBuilder, Colgroup, Thead, Table, RowEmpty, TheadSorter } = Base;
export default function ({ className, cols, list, empty, onMouseUp = () => { }, menu, sorter = {
    columnKey: "",
    sorter: "NONE",
}, onChangeSorter = () => { }, }) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvdGFibGUvbWVudS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNwRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQVcsTUFBTSxZQUFZLENBQUM7QUFDdEQsT0FBTyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBZ0IzQixNQUFNLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsR0FBRyxJQUFJLENBQUM7QUFJekUsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUMzQixTQUFTLEVBQ1QsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsU0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDcEIsSUFBSSxFQUNKLE1BQU0sR0FBRztJQUNSLFNBQVMsRUFBRSxFQUFFO0lBQ2IsTUFBTSxFQUFFLE1BQU07Q0FDZCxFQUNELGNBQWMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEdBQ2Y7SUFDVixNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBOEI7UUFDekUsR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQztLQUNQLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxFQUFlLENBQUM7SUFDOUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLE1B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