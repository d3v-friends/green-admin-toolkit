"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ({ items }) {
    return (_jsx("div", { className: "min-w-30", children: items.map((item, key) => (_jsx("button", { className: "w-full hover:bg-(--color-table-hover) p-2", onClick: item.onClick, children: item.label }, key))) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3YzL2NvbXAvdGFibGUvYmFzZS9jb250ZXh0LW1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFhYixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsS0FBSyxFQUFrQjtJQUNoRCxPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUMsVUFBVSxZQUN2QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDekIsaUJBQ0MsU0FBUyxFQUFDLDJDQUEyQyxFQUVyRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sWUFDcEIsSUFBSSxDQUFDLEtBQUssSUFGTixHQUFHLENBR0EsQ0FDVCxDQUFDLEdBQ0csQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9