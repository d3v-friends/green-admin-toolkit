import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ menu, top, left, value }) {
    if (!value)
        return null;
    if (menu.length === 0)
        return null;
    return (_jsx("div", { className: "fixed z-5 bg-(--bg-panel) shadow-2xl rounded-md p-2 shadow-(--color-shadow) min-w-[8rem] border-all", style: { top, left }, children: menu.map(({ label, onClick, borderTop }, i) => (_jsx("button", { type: "button", className: fnCss.sum("p-2 block hover:bg-(--primary) hover:text-(--primary-alt) w-full", "text-left", borderTop ? "border-top" : ""), onMouseUp: (e) => {
                onClick(e, value);
            }, children: label }, i))) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvbW9kYWwvY29udGV4dC1tZW51L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQWVuQyxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFxQjtJQUN2RSxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDbkMsT0FBTyxDQUNOLGNBQ0MsU0FBUyxFQUFDLHFHQUFxRyxFQUMvRyxLQUFLLEVBQUUsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLFlBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM3QyxpQkFFQyxJQUFJLEVBQUMsUUFBUSxFQUNiLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixrRUFBa0UsRUFDbEUsV0FBVyxFQUNYLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQzdCLEVBQ0QsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxZQUNBLEtBQUssSUFWRCxDQUFDLENBV0UsQ0FDVCxDQUFDLEdBQ0csQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9