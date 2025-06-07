"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
Component.__isStatic = true;
export default function Component({ children, onClick, className = "flex items-center justify-center", }) {
    if (!children)
        return null;
    return (_jsx("div", { onClick: onClick, className: fnCss.concat("fixed w-screen h-screen z-10 left-0 top-0", "backdrop-blur-xs backdrop-grayscale-40", "bg-[rgba(0,0,0,0.3)]", className), children: _jsx("div", { onClick: (e) => {
                e.stopPropagation();
            }, children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9tb2RhbC9iYXNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVFuQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUU1QixNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxFQUNqQyxRQUFRLEVBQ1IsT0FBTyxFQUNQLFNBQVMsR0FBRyxrQ0FBa0MsR0FDN0I7SUFDakIsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixPQUFPLENBQ04sY0FDQyxPQUFPLEVBQUUsT0FBTyxFQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDdEIsMkNBQTJDLEVBQzNDLHdDQUF3QyxFQUN4QyxzQkFBc0IsRUFDdEIsU0FBUyxDQUNULFlBQ0QsY0FDQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDZCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckIsQ0FBQyxZQUNBLFFBQVEsR0FDSixHQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==