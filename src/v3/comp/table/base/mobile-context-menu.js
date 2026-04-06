"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
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
    root.render(_jsx(Menu, { onClose: onClose, children: children(row, onClose) }));
}
const MenuStyle = {
    open: "table-mobile-context-menu translate-y-0",
    close: "table-mobile-context-menu translate-y-full",
};
const MenuContainerStyle = {
    open: "w-full h-full bg-(--color-shadow) backdrop-blur-xs transition-all duration-300",
    close: "w-full h-full bg-transparent backdrop-blur-none transition-all duration-300",
};
function Menu({ children, onClose }) {
    const [isOpen, onChangeOpen] = useState(false);
    const getStyle = (v) => (v ? "open" : "close");
    useEffect(() => {
        onChangeOpen(true);
    }, []);
    const onCloseAnimation = () => {
        onChangeOpen(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };
    return (_jsx("div", { className: MenuContainerStyle[getStyle(isOpen)], onContextMenu: (e) => e.preventDefault(), onPointerDown: (e) => {
            if (e.pointerType !== "touch")
                return;
            onCloseAnimation();
        }, children: _jsxs("div", { autoFocus: true, className: MenuStyle[isOpen ? "open" : "close"], onPointerDown: (e) => e.stopPropagation(), onContextMenu: (e) => e.preventDefault(), children: [_jsx("div", { className: "flex justify-center mb-1", children: _jsx("div", { className: "table-mobile-context-menu-bar" }) }), children] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNvbnRleHQtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vYmlsZS1jb250ZXh0LW1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUU1RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFPNUMsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQXFCO0lBQzlELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFFeEMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFDO0lBQzVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXJDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVuQyxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN2QyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBQyxJQUFJLElBQUMsT0FBTyxFQUFFLE9BQU8sWUFBRyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFRLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBT0QsTUFBTSxTQUFTLEdBQTJCO0lBQ3pDLElBQUksRUFBRSx5Q0FBeUM7SUFDL0MsS0FBSyxFQUFFLDRDQUE0QztDQUNuRCxDQUFDO0FBRUYsTUFBTSxrQkFBa0IsR0FBMkI7SUFDbEQsSUFBSSxFQUFFLGdGQUFnRjtJQUN0RixLQUFLLEVBQUUsNkVBQTZFO0NBQ3BGLENBQUM7QUFFRixTQUFTLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQXNCO0lBQ3JELE1BQU0sQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4RCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1FBQzdCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUM7UUFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sY0FDQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQy9DLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUN4QyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsQ0FBQyxXQUFXLEtBQUssT0FBTztnQkFBRSxPQUFPO1lBQ3RDLGdCQUFnQixFQUFFLENBQUM7UUFDcEIsQ0FBQyxZQUNELGVBQ0MsU0FBUyxRQUNULFNBQVMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUMvQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFDekMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLGFBQ3hDLGNBQUssU0FBUyxFQUFDLDBCQUEwQixZQUN4QyxjQUFLLFNBQVMsRUFBQywrQkFBK0IsR0FBRyxHQUM1QyxFQUNMLFFBQVEsSUFDSixHQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==