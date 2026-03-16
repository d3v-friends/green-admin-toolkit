"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
export default function ({ children, row }) {
    document.body.style.overflow = "hidden";
    const container = document.createElement("div");
    container.className = "absolute top-0 left-0 w-screen h-screen bg-(--color-shadow) backdrop-blur-xs";
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
        }, children: _jsxs("div", { className: "absolute bottom-0 pl-5 pr-5 pt-2 pb-10 bg-(--bg-modal) rounded-tr-xl rounded-tl-xl w-full", onPointerDown: (e) => e.stopPropagation(), onContextMenu: (e) => e.preventDefault(), children: [_jsx("div", { className: "flex justify-center mb-1", children: _jsx("div", { className: "h-1 w-25 rounded-full bg-(--color-shadow)" }) }), children(row, onClose)] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNvbnRleHQtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy92My9jb21wL3RhYmxlL2Jhc2UvbW9iaWxlLWNvbnRleHQtbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUdiLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQU81QyxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBcUI7SUFDOUQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUV4QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsOEVBQThFLENBQUM7SUFDckcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFckMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRW5DLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLE1BQU0sQ0FDVixjQUNDLFNBQVMsRUFBQyxlQUFlLEVBQ3pCLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUN4QyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsQ0FBQyxXQUFXLEtBQUssT0FBTztnQkFBRSxPQUFPO1lBQ3RDLE9BQU8sRUFBRSxDQUFDO1FBQ1gsQ0FBQyxZQUNELGVBQ0MsU0FBUyxFQUFDLDJGQUEyRixFQUNyRyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFDekMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLGFBQ3hDLGNBQUssU0FBUyxFQUFDLDBCQUEwQixZQUN4QyxjQUFLLFNBQVMsRUFBQywyQ0FBMkMsR0FBRyxHQUN4RCxFQUNMLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQ2xCLEdBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9