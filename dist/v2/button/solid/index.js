"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { ColorBg, ColorBorder, ColorFilterAlt, ColorTextAlt } from "../../../index.js";
import Image from "next/image";
export default function ({ children, onClick = () => { }, onMiddleClick = () => { }, className = "w-full", color = "primary", imgSrc, ref, type = "button", }) {
    const onMouseUp = (e) => {
        switch (e.button) {
            case 0:
                onClick(e);
                return;
            case 1:
                onMiddleClick(e);
                return;
        }
    };
    return (_jsx("button", { type: type, ref: ref, className: concat(className, ColorBg[color], ColorTextAlt[color], ColorBorder[color], "min-h-[2.5rem] pl-2 pr-2", "rounded-md border-[1px] outline-none overflow-hidden", "transition-all duration-100 hover:brightness-130"), onMouseUp: onMouseUp, children: _jsxs("div", { className: "flex items-center justify-center", children: [imgSrc && (_jsx(Image, { className: concat(ColorFilterAlt[color], "mr-2 w-[0.8rem]"), src: imgSrc, alt: "icon", width: 20, height: 20 })), _jsx("span", { className: concat(imgSrc ? "pr-4" : ""), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvYnV0dG9uL3NvbGlkL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLE1BQU0sRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDcEQsT0FBTyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFjLFlBQVksRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNyRixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFhL0IsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixRQUFRLEVBQ1IsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDbEIsYUFBYSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDeEIsU0FBUyxHQUFHLFFBQVEsRUFDcEIsS0FBSyxHQUFHLFNBQVMsRUFDakIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEdBQUcsUUFBUSxHQUNhO0lBQzVCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBc0MsRUFBRSxFQUFFO1FBQzVELFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQztnQkFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsT0FBTztZQUNSLEtBQUssQ0FBQztnQkFDTCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87UUFDVCxDQUFDO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGlCQUNDLElBQUksRUFBRSxJQUFJLEVBQ1YsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsTUFBTSxDQUNoQixTQUFTLEVBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUNkLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDbkIsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUNsQiwwQkFBMEIsRUFDMUIsc0RBQXNELEVBQ3RELGtEQUFrRCxDQUNsRCxFQUNELFNBQVMsRUFBRSxTQUFTLFlBQ3BCLGVBQUssU0FBUyxFQUFDLGtDQUFrQyxhQUMvQyxNQUFNLElBQUksQ0FDVixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxFQUMzRCxHQUFHLEVBQUUsTUFBTSxFQUNYLEdBQUcsRUFBQyxNQUFNLEVBQ1YsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULENBQ0YsRUFDRCxlQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFHLFFBQVEsR0FBUSxJQUMzRCxHQUNFLENBQ1QsQ0FBQztBQUNILENBQUMifQ==