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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvbW9kYWwvY29udGV4dC1tZW51L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBZXZDLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQXFCO0lBQ3ZFLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuQyxPQUFPLFlBQVksQ0FDbEIsY0FDQyxTQUFTLEVBQUMscUdBQXFHLEVBQy9HLEtBQUssRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsWUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQzdDLGlCQUVDLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLGtFQUFrRSxFQUNsRSxXQUFXLEVBQ1gsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDN0IsRUFDRCxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuQixDQUFDLFlBQ0EsS0FBSyxJQVZELENBQUMsQ0FXRSxDQUNULENBQUMsR0FDRyxFQUNOLFFBQVEsQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNILENBQUMifQ==