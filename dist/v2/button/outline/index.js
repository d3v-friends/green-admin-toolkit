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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvYnV0dG9uL291dGxpbmUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsTUFBTSxFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQ04sV0FBVyxFQUNYLFdBQVcsRUFDWCx3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLGlCQUFpQixFQUVqQixTQUFTLEdBQ1QsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFhL0IsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixRQUFRLEVBQ1IsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDbEIsYUFBYSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDeEIsU0FBUyxHQUFHLFFBQVEsRUFDcEIsS0FBSyxHQUFHLFNBQVMsRUFDakIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEdBQUcsUUFBUSxHQUNlO0lBQzlCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBc0MsRUFBRSxFQUFFO1FBQzVELFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQztnQkFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsT0FBTztZQUNSLEtBQUssQ0FBQztnQkFDTCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87UUFDVCxDQUFDO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGlCQUNDLElBQUksRUFBRSxJQUFJLEVBQ1YsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsTUFBTSxDQUNoQixTQUFTLEVBQ1QsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoQixXQUFXLENBQUMsS0FBSyxDQUFDLEVBQ2xCLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDbkIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQ3hCLDBCQUEwQixFQUMxQixzREFBc0QsRUFDdEQsbUNBQW1DLENBQ25DLEVBQ0QsU0FBUyxFQUFFLFNBQVMsWUFDcEIsZUFBSyxTQUFTLEVBQUMsa0NBQWtDLGFBQy9DLE1BQU0sSUFBSSxDQUNWLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxFQUFFLGlCQUFpQixDQUFDLEVBQ3pGLEdBQUcsRUFBRSxNQUFNLEVBQ1gsR0FBRyxFQUFDLE1BQU0sRUFDVixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsQ0FDRixFQUNELGVBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQUcsUUFBUSxHQUFRLElBQzNELEdBQ0UsQ0FDVCxDQUFDO0FBQ0gsQ0FBQyJ9