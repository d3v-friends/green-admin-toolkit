"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { fnCss } from "nextjs-tools";
import { TouchRightClick } from "../../../index.js";
export default function ({ className, children, menu }) {
    const [open, setOpen] = useState(true);
    const [coordinate, setCoordinate] = useState({
        top: 0,
        left: 0,
    });
    const refSetOpen = useRef(setOpen);
    useEffect(() => {
        const onMouseUp = (e) => {
            if (e.button !== 0)
                return;
            refSetOpen.current(false);
        };
        const onScroll = () => {
            refSetOpen.current(false);
        };
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(TouchRightClick, { onRightClick: () => setOpen(true), onCancel: () => setOpen(false), children: _jsx("div", { className: className, onContextMenu: (e) => {
                        e.preventDefault();
                        setCoordinate({
                            top: e.clientY,
                            left: e.clientX,
                        });
                        setOpen(true);
                    }, children: children }) }), open && (_jsx("div", { className: "fixed z-5 bg-(--bg-panel) shadow-2xl rounded-md p-1 shadow-(--color-shadow) min-w-[8rem]", style: coordinate, children: menu.map(({ label, onClick, borderTop }, i) => (_jsx("button", { className: fnCss.sum("p-2 block hover:bg-(--primary) hover:text-(--primary-alt) w-full", "text-left", borderTop ? "border-top" : ""), onMouseUp: (e) => {
                        onClick(e);
                    }, children: label }, i))) }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9tb3VzZS9yaWdodC1idXR0b24tbWVudS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBK0IsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDdkYsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBZ0IzQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWtCO0lBQ3BFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsUUFBUSxDQUE4QjtRQUN6RSxHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO0tBQ1AsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQWEsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU87WUFDM0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUMsT0FBTyxHQUFHLEVBQUU7WUFDWCxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNOLDhCQUNDLEtBQUMsZUFBZSxJQUNmLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ2pDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQzlCLGNBQ0MsU0FBUyxFQUFFLFNBQVMsRUFDcEIsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDbkIsYUFBYSxDQUFDOzRCQUNiLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTzs0QkFDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU87eUJBQ2YsQ0FBQyxDQUFDO3dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDZixDQUFDLFlBQ0EsUUFBUSxHQUNKLEdBQ1csRUFFakIsSUFBSSxJQUFJLENBQ1IsY0FDQyxTQUFTLEVBQUMsMEZBQTBGLEVBQ3BHLEtBQUssRUFBRSxVQUFVLFlBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM3QyxpQkFFQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FDbkIsa0VBQWtFLEVBQ2xFLFdBQVcsRUFDWCxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUM3QixFQUNELFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNoQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1osQ0FBQyxZQUNBLEtBQUssSUFURCxDQUFDLENBVUUsQ0FDVCxDQUFDLEdBQ0csQ0FDTixJQUNDLENBQ0gsQ0FBQztBQUNILENBQUMifQ==