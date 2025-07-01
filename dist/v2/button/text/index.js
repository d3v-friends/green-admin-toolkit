"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { ColorFilter, ColorHoverBorder, ColorText } from "../../../index.js";
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
    return (_jsx("button", { type: type, ref: ref, className: concat(className, ColorText[color], ColorHoverBorder[color], "border-transparent", "min-h-[2.5rem] pl-2 pr-2", "rounded-md border-[1px] outline-none overflow-hidden", "transition-all duration-100 group"), onMouseUp: onMouseUp, children: _jsxs("div", { className: "flex items-center justify-center", children: [imgSrc && (_jsx(Image, { className: concat(ColorFilter[color], "mr-2 w-[0.8rem]"), src: imgSrc, alt: "icon", width: 20, height: 20 })), _jsx("span", { className: concat(imgSrc ? "pr-4" : "group-hover:underline"), children: children })] }) }));
}
function Solid({}) {
    return _jsx(_Fragment, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvYnV0dG9uL3RleHQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsTUFBTSxFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFjLFNBQVMsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNoRixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFhL0IsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixRQUFRLEVBQ1IsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDbEIsYUFBYSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDeEIsU0FBUyxHQUFHLFFBQVEsRUFDcEIsS0FBSyxHQUFHLFNBQVMsRUFDakIsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEdBQUcsUUFBUSxHQUNZO0lBQzNCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBc0MsRUFBRSxFQUFFO1FBQzVELFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQztnQkFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsT0FBTztZQUNSLEtBQUssQ0FBQztnQkFDTCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87UUFDVCxDQUFDO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxDQUNOLGlCQUNDLElBQUksRUFBRSxJQUFJLEVBQ1YsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsTUFBTSxDQUNoQixTQUFTLEVBQ1QsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFDdkIsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQixzREFBc0QsRUFDdEQsbUNBQW1DLENBQ25DLEVBQ0QsU0FBUyxFQUFFLFNBQVMsWUFDcEIsZUFBSyxTQUFTLEVBQUMsa0NBQWtDLGFBQy9DLE1BQU0sSUFBSSxDQUNWLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLGlCQUFpQixDQUFDLEVBQ3hELEdBQUcsRUFBRSxNQUFNLEVBQ1gsR0FBRyxFQUFDLE1BQU0sRUFDVixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsQ0FDRixFQUNELGVBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsWUFBRyxRQUFRLEdBQVEsSUFDaEYsR0FDRSxDQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsRUFBb0M7SUFDbEQsT0FBTyxtQkFBTyxDQUFDO0FBQ2hCLENBQUMifQ==