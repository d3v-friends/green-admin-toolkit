import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { createPortal } from "react-dom";
export default function ({ menu, top, left, value }) {
    if (!value)
        return null;
    if (menu.length === 0)
        return null;
    return createPortal(_jsx("div", { className: "fixed z-5 bg-(--bg-panel) shadow-2xl rounded-md p-2 shadow-(--color-shadow) min-w-[8rem] border-all", style: { top, left }, children: menu.map(({ label, onClick, borderTop }, i) => (_jsx("button", { type: "button", className: fnCss.sum("p-2 block hover:bg-(--primary) hover:text-(--primary-alt) w-full", "text-left", borderTop ? "border-top" : ""), onMouseUp: (e) => {
                onClick(e, value);
            }, children: label }, i))) }), document.body);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFdBQVcsQ0FBQztBQWV2QyxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFxQjtJQUN2RSxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDbkMsT0FBTyxZQUFZLENBQ2xCLGNBQ0MsU0FBUyxFQUFDLHFHQUFxRyxFQUMvRyxLQUFLLEVBQUUsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLFlBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM3QyxpQkFFQyxJQUFJLEVBQUMsUUFBUSxFQUNiLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixrRUFBa0UsRUFDbEUsV0FBVyxFQUNYLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQzdCLEVBQ0QsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxZQUNBLEtBQUssSUFWRCxDQUFDLENBV0UsQ0FDVCxDQUFDLEdBQ0csRUFDTixRQUFRLENBQUMsSUFBSSxDQUNiLENBQUM7QUFDSCxDQUFDIn0=