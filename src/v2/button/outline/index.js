"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { ColorBorder, ColorFilter, ColorGroupHoverFilterAlt, ColorHoverBg, ColorHoverTextAlt, ColorText, } from "../../..";
import Image from "next/image";
export default function ({ children, onClick = () => { }, onMiddleClick = () => { }, className = "w-full", color = "primary", imgSrc, ref, type = "button", disabled = false, }) {
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
    return (_jsx("button", { disabled: disabled, type: type, ref: ref, className: concat(className, ColorText[color], ColorBorder[color], ColorHoverBg[color], ColorHoverTextAlt[color], "min-h-[2.5rem] pl-2 pr-2", "rounded-md border-[1px] outline-none overflow-hidden", "transition-all duration-100 group", disabled ? "cursor-not-allowed" : "cursor-pointer"), onMouseUp: onMouseUp, children: _jsxs("div", { className: "flex items-center justify-center", children: [imgSrc && (_jsx(Image, { className: concat(ColorFilter[color], ColorGroupHoverFilterAlt[color], "mr-2 w-[0.8rem]"), src: imgSrc, alt: "icon", width: 20, height: 20 })), _jsx("span", { className: concat(imgSrc ? "pr-4" : ""), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxNQUFNLEVBQWlCLE1BQU0sY0FBYyxDQUFDO0FBQ3BELE9BQU8sRUFDTixXQUFXLEVBQ1gsV0FBVyxFQUNYLHdCQUF3QixFQUN4QixZQUFZLEVBQ1osaUJBQWlCLEVBRWpCLFNBQVMsR0FDVCxNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFjL0IsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixRQUFRLEVBQ1IsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDbEIsYUFBYSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDeEIsU0FBUyxHQUFHLFFBQVEsRUFDcEIsS0FBSyxHQUFHLFNBQVMsRUFDakIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEdBQUcsUUFBUSxFQUNmLFFBQVEsR0FBRyxLQUFLLEdBQ2M7SUFDOUIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFzQyxFQUFFLEVBQUU7UUFDNUQsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEIsS0FBSyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxPQUFPO1lBQ1IsS0FBSyxDQUFDO2dCQUNMLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTztRQUNULENBQUM7SUFDRixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04saUJBQ0MsUUFBUSxFQUFFLFFBQVEsRUFDbEIsSUFBSSxFQUFFLElBQUksRUFDVixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxNQUFNLENBQ2hCLFNBQVMsRUFDVCxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQ2hCLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDbEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUNuQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFDeEIsMEJBQTBCLEVBQzFCLHNEQUFzRCxFQUN0RCxtQ0FBbUMsRUFDbkMsUUFBUSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQ2xELEVBQ0QsU0FBUyxFQUFFLFNBQVMsWUFDcEIsZUFBSyxTQUFTLEVBQUMsa0NBQWtDLGFBQy9DLE1BQU0sSUFBSSxDQUNWLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxFQUFFLGlCQUFpQixDQUFDLEVBQ3pGLEdBQUcsRUFBRSxNQUFNLEVBQ1gsR0FBRyxFQUFDLE1BQU0sRUFDVixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsQ0FDRixFQUNELGVBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQUcsUUFBUSxHQUFRLElBQzNELEdBQ0UsQ0FDVCxDQUFDO0FBQ0gsQ0FBQyJ9