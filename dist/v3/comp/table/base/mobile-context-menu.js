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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNvbnRleHQtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92My9jb21wL3RhYmxlL2Jhc2UvbW9iaWxlLWNvbnRleHQtbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRTVELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQU81QyxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBcUI7SUFDOUQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUV4QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcscUNBQXFDLENBQUM7SUFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFckMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRW5DLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFDLElBQUksSUFBQyxPQUFPLEVBQUUsT0FBTyxZQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVEsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFPRCxNQUFNLFNBQVMsR0FBMkI7SUFDekMsSUFBSSxFQUFFLHlDQUF5QztJQUMvQyxLQUFLLEVBQUUsNENBQTRDO0NBQ25ELENBQUM7QUFFRixNQUFNLGtCQUFrQixHQUEyQjtJQUNsRCxJQUFJLEVBQUUsZ0ZBQWdGO0lBQ3RGLEtBQUssRUFBRSw2RUFBNkU7Q0FDcEYsQ0FBQztBQUVGLFNBQVMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBc0I7SUFDckQsTUFBTSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXhELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7UUFDN0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQztRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixjQUNDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDL0MsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQ3hDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxDQUFDLFdBQVcsS0FBSyxPQUFPO2dCQUFFLE9BQU87WUFDdEMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNwQixDQUFDLFlBQ0QsZUFDQyxTQUFTLFFBQ1QsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQy9DLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUN6QyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsYUFDeEMsY0FBSyxTQUFTLEVBQUMsMEJBQTBCLFlBQ3hDLGNBQUssU0FBUyxFQUFDLCtCQUErQixHQUFHLEdBQzVDLEVBQ0wsUUFBUSxJQUNKLEdBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9