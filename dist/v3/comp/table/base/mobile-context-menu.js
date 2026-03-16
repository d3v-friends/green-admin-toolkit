"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        }, children: _jsxs("div", { autoFocus: true, className: "table-mobile-context-menu", onPointerDown: (e) => e.stopPropagation(), onContextMenu: (e) => e.preventDefault(), children: [_jsx("div", { className: "flex justify-center mb-1", children: _jsx("div", { className: "table-mobile-context-menu-bar" }) }), children(row, onClose)] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNvbnRleHQtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92My9jb21wL3RhYmxlL2Jhc2UvbW9iaWxlLWNvbnRleHQtbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUdiLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQU81QyxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBcUI7SUFDOUQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUV4QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcscUNBQXFDLENBQUM7SUFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFckMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRW5DLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLE1BQU0sQ0FDVixjQUNDLFNBQVMsRUFBQyxlQUFlLEVBQ3pCLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUN4QyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsQ0FBQyxXQUFXLEtBQUssT0FBTztnQkFBRSxPQUFPO1lBQ3RDLE9BQU8sRUFBRSxDQUFDO1FBQ1gsQ0FBQyxZQUNELGVBQ0MsU0FBUyxRQUNULFNBQVMsRUFBQywyQkFBMkIsRUFDckMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQ3pDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxhQUN4QyxjQUFLLFNBQVMsRUFBQywwQkFBMEIsWUFDeEMsY0FBSyxTQUFTLEVBQUMsK0JBQStCLEdBQUcsR0FDNUMsRUFDTCxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUNsQixHQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==