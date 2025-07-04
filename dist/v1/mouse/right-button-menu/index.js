"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { fnCss } from "nextjs-tools";
import { TouchRightClick } from "../../../index.js";
export default function ({ className, children, menu }) {
    const [open, setOpen] = useState(false);
    const [coordinate, setCoordinate] = useState({
        top: 0,
        left: 0,
    });
    const refSetOpen = useRef(setOpen);
    useEffect(() => {
        const onMouseUp = (e) => {
            if (e.button === 2)
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
                    }, children: children }) }), open && (_jsx("div", { className: "fixed z-5 bg-(--bg-panel) shadow-2xl rounded-md p-1 shadow-(--color-shadow) min-w-[8rem]", style: coordinate, children: menu.map(({ label, onClick, borderTop }, i) => (_jsx("button", { type: "button", className: fnCss.sum("p-2 block hover:bg-(--primary) hover:text-(--primary-alt) w-full", "text-left", borderTop ? "border-top" : ""), onMouseUp: (e) => {
                        onClick(e);
                    }, children: label }, i))) }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvbW91c2UvcmlnaHQtYnV0dG9uLW1lbnUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQStCLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQWdCdEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFrQjtJQUNwRSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBOEI7UUFDekUsR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQztLQUNQLENBQUMsQ0FBQztJQUNILE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQzNCLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sR0FBRyxFQUFFO1lBQ1gsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTiw4QkFDQyxLQUFDLGVBQWUsSUFDZixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNqQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM5QixjQUNDLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ25CLGFBQWEsQ0FBQzs0QkFDYixHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU87NEJBQ2QsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPO3lCQUNmLENBQUMsQ0FBQzt3QkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2YsQ0FBQyxZQUNBLFFBQVEsR0FDSixHQUNXLEVBRWpCLElBQUksSUFBSSxDQUNSLGNBQ0MsU0FBUyxFQUFDLDBGQUEwRixFQUNwRyxLQUFLLEVBQUUsVUFBVSxZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDN0MsaUJBRUMsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FDbkIsa0VBQWtFLEVBQ2xFLFdBQVcsRUFDWCxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUM3QixFQUNELFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNoQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1osQ0FBQyxZQUNBLEtBQUssSUFWRCxDQUFDLENBV0UsQ0FDVCxDQUFDLEdBQ0csQ0FDTixJQUNDLENBQ0gsQ0FBQztBQUNILENBQUMifQ==