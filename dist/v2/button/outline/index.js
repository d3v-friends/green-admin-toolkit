"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { ColorBorder, ColorFilter, ColorGroupHoverFilterAlt, ColorHoverBg, ColorHoverTextAlt, ColorText, } from "../../../index.js";
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
    return (_jsx("button", { type: type, ref: ref, className: concat(className, ColorText[color], ColorBorder[color], ColorHoverBg[color], ColorHoverTextAlt[color], "min-h-[2.5rem] pl-2 pr-2", "rounded-md border-[1px] outline-none overflow-hidden", "transition-all duration-100 group"), onMouseUp: onMouseUp, children: _jsxs("div", { className: "flex items-center justify-center", children: [imgSrc && (_jsx(Image, { className: concat(ColorFilter[color], ColorGroupHoverFilterAlt[color], "mr-2 w-[0.8rem]"), src: imgSrc, alt: "icon", width: 20, height: 20 })), _jsx("span", { className: concat(imgSrc ? "pr-4" : ""), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvYnV0dG9uL291dGxpbmUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsTUFBTSxFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQ04sV0FBVyxFQUNYLFdBQVcsRUFDWCx3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLGlCQUFpQixFQUVqQixTQUFTLEdBQ1QsTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBYS9CLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsUUFBUSxFQUNSLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ2xCLGFBQWEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ3hCLFNBQVMsR0FBRyxRQUFRLEVBQ3BCLEtBQUssR0FBRyxTQUFTLEVBQ2pCLE1BQU0sRUFDTixHQUFHLEVBQ0gsSUFBSSxHQUFHLFFBQVEsR0FDZTtJQUM5QixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQXNDLEVBQUUsRUFBRTtRQUM1RCxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUM7Z0JBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE9BQU87WUFDUixLQUFLLENBQUM7Z0JBQ0wsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPO1FBQ1QsQ0FBQztJQUNGLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixpQkFDQyxJQUFJLEVBQUUsSUFBSSxFQUNWLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FDaEIsU0FBUyxFQUNULFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFDaEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUNsQixZQUFZLENBQUMsS0FBSyxDQUFDLEVBQ25CLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUN4QiwwQkFBMEIsRUFDMUIsc0RBQXNELEVBQ3RELG1DQUFtQyxDQUNuQyxFQUNELFNBQVMsRUFBRSxTQUFTLFlBQ3BCLGVBQUssU0FBUyxFQUFDLGtDQUFrQyxhQUMvQyxNQUFNLElBQUksQ0FDVixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxFQUN6RixHQUFHLEVBQUUsTUFBTSxFQUNYLEdBQUcsRUFBQyxNQUFNLEVBQ1YsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULENBQ0YsRUFDRCxlQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFHLFFBQVEsR0FBUSxJQUMzRCxHQUNFLENBQ1QsQ0FBQztBQUNILENBQUMifQ==