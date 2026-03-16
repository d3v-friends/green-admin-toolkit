"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
export default function ({ clientX, clientY, children, row }) {
    const container = document.createElement("div");
    container.className = "absolute top-0 left-0 w-full h-full";
    document.body.appendChild(container);
    const root = createRoot(container);
    const onClose = () => {
        container.remove();
        root.unmount();
    };
    root.render(_jsx("div", { className: "w-full h-full", onContextMenu: (e) => e.preventDefault(), onClick: onClose, children: _jsx("div", { className: "absolute p-2 bg-(--bg-modal) rounded-md shadow-2xl", style: { top: clientY, left: clientX }, onClick: (e) => e.stopPropagation(), onContextMenu: (e) => e.preventDefault(), children: children(row, onClose) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGMtY29udGV4dC1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3YzL2NvbXAvdGFibGUvYmFzZS9wYy1jb250ZXh0LW1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFVNUMsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBcUI7SUFDaEYsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFDO0lBQzVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXJDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVuQyxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDcEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUMsTUFBTSxDQUNWLGNBQ0MsU0FBUyxFQUFDLGVBQWUsRUFDekIsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQ3hDLE9BQU8sRUFBRSxPQUFPLFlBQ2hCLGNBQ0MsU0FBUyxFQUFDLG9EQUFvRCxFQUM5RCxLQUFLLEVBQUUsRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsRUFDcEMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQ25DLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxZQUN2QyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUNsQixHQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==