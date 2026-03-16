"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
export default function ({ children, row }) {
    document.body.style.overflow = "hidden";
    const container = document.createElement("div");
    container.className = "table-mobile-context-menu-container";
    document.body.appendChild(container);
    const root = createRoot(container);
    const onClose = () => {
        document.body.style.overflow = "unset";
        container.remove();
        root.unmount();
    };
    root.render(_jsx("div", { className: "w-full h-full", onContextMenu: (e) => e.preventDefault(), onPointerDown: (e) => {
            if (e.pointerType !== "touch")
                return;
            onClose();
        }, children: _jsx(Menu, { children: children(row, onClose) }) }));
}
const MenuStyle = {
    open: "table-mobile-context-menu translate-y-0",
    close: "table-mobile-context-menu translate-y-full",
};
function Menu({ children }) {
    const contRef = useRef(null);
    const [isOpen, onChangeOpen] = useState(false);
    useEffect(() => {
        onChangeOpen(true);
    }, []);
    return (_jsxs("div", { ref: contRef, autoFocus: true, className: MenuStyle[isOpen ? "open" : "close"], onPointerDown: (e) => e.stopPropagation(), onContextMenu: (e) => e.preventDefault(), children: [_jsx("div", { className: "flex justify-center mb-1", children: _jsx("div", { className: "table-mobile-context-menu-bar" }) }), children] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNvbnRleHQtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92My9jb21wL3RhYmxlL2Jhc2UvbW9iaWxlLWNvbnRleHQtbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUVwRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFPNUMsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQXFCO0lBQzlELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFFeEMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFDO0lBQzVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXJDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVuQyxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN2QyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyxNQUFNLENBQ1YsY0FDQyxTQUFTLEVBQUMsZUFBZSxFQUN6QixhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFDeEMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLENBQUMsV0FBVyxLQUFLLE9BQU87Z0JBQUUsT0FBTztZQUN0QyxPQUFPLEVBQUUsQ0FBQztRQUNYLENBQUMsWUFDRCxLQUFDLElBQUksY0FBRSxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFRLEdBQ2hDLENBQ04sQ0FBQztBQUNILENBQUM7QUFNRCxNQUFNLFNBQVMsR0FBMkI7SUFDekMsSUFBSSxFQUFFLHlDQUF5QztJQUMvQyxLQUFLLEVBQUUsNENBQTRDO0NBQ25ELENBQUM7QUFFRixTQUFTLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBc0I7SUFDNUMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFpQixJQUFJLENBQUMsQ0FBQztJQUM3QyxNQUFNLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTixlQUNDLEdBQUcsRUFBRSxPQUFPLEVBQ1osU0FBUyxRQUNULFNBQVMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUMvQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFDekMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLGFBQ3hDLGNBQUssU0FBUyxFQUFDLDBCQUEwQixZQUN4QyxjQUFLLFNBQVMsRUFBQywrQkFBK0IsR0FBRyxHQUM1QyxFQUNMLFFBQVEsSUFDSixDQUNOLENBQUM7QUFDSCxDQUFDIn0=