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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9tb2RhbC9jb250ZXh0LW1lbnUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBZW5DLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQXFCO0lBQ3ZFLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuQyxPQUFPLENBQ04sY0FDQyxTQUFTLEVBQUMscUdBQXFHLEVBQy9HLEtBQUssRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsWUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQzdDLGlCQUVDLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLGtFQUFrRSxFQUNsRSxXQUFXLEVBQ1gsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDN0IsRUFDRCxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuQixDQUFDLFlBQ0EsS0FBSyxJQVZELENBQUMsQ0FXRSxDQUNULENBQUMsR0FDRyxDQUNOLENBQUM7QUFDSCxDQUFDIn0=