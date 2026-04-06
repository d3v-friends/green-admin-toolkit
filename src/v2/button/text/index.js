"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { ColorFilter, ColorHoverBorder, ColorText } from "../../..";
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
    return (_jsx("button", { type: type, ref: ref, className: concat(className, ColorText[color], ColorHoverBorder[color], "border-transparent", "min-h-[2.5rem] pl-2 pr-2", "rounded-md border-[1px] outline-none overflow-hidden", "transition-all duration-100 group", disabled ? "cursor-not-allowed" : "cursor-pointer"), onMouseUp: onMouseUp, children: _jsxs("div", { className: "flex items-center justify-center", children: [imgSrc && (_jsx(Image, { className: concat(ColorFilter[color], "mr-2 w-[0.8rem]"), src: imgSrc, alt: "icon", width: 20, height: 20 })), _jsx("span", { className: concat(imgSrc ? "pr-4" : "group-hover:underline"), children: children })] }) }));
}
function Solid({}) {
    return _jsx(_Fragment, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxNQUFNLEVBQWlCLE1BQU0sY0FBYyxDQUFDO0FBQ3BELE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQWMsU0FBUyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzlFLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQWMvQixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLFFBQVEsRUFDUixPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNsQixhQUFhLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUN4QixTQUFTLEdBQUcsUUFBUSxFQUNwQixLQUFLLEdBQUcsU0FBUyxFQUNqQixNQUFNLEVBQ04sR0FBRyxFQUNILElBQUksR0FBRyxRQUFRLEVBQ2YsUUFBUSxHQUFHLEtBQUssR0FDVztJQUMzQixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQXNDLEVBQUUsRUFBRTtRQUM1RCxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUM7Z0JBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE9BQU87WUFDUixLQUFLLENBQUM7Z0JBQ0wsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPO1FBQ1QsQ0FBQztJQUNGLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FDTixpQkFDQyxJQUFJLEVBQUUsSUFBSSxFQUNWLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FDaEIsU0FBUyxFQUNULFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFDaEIsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQ3ZCLG9CQUFvQixFQUNwQiwwQkFBMEIsRUFDMUIsc0RBQXNELEVBQ3RELG1DQUFtQyxFQUNuQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDbEQsRUFDRCxTQUFTLEVBQUUsU0FBUyxZQUNwQixlQUFLLFNBQVMsRUFBQyxrQ0FBa0MsYUFDL0MsTUFBTSxJQUFJLENBQ1YsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsRUFDeEQsR0FBRyxFQUFFLE1BQU0sRUFDWCxHQUFHLEVBQUMsTUFBTSxFQUNWLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxDQUNGLEVBQ0QsZUFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFHLFFBQVEsR0FBUSxJQUNoRixHQUNFLENBQ1QsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxFQUFvQztJQUNsRCxPQUFPLG1CQUFPLENBQUM7QUFDaEIsQ0FBQyJ9