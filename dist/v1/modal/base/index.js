"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { createPortal } from "react-dom";
Component.__isStatic = true;
export default function Component({ children, onClick, className = "flex items-center justify-center", backdropClassName = "bg-[rgba(0,0,0,0.3)] backdrop-grayscale-40", }) {
    if (!children)
        return null;
    return createPortal(_jsx("div", { onClick: onClick, className: fnCss.concat("fixed w-screen h-screen z-10 left-0 top-0", "backdrop-blur-xs", backdropClassName, className), children: _jsx("div", { onClick: (e) => {
                e.stopPropagation();
            }, children: children }) }), document.body);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvbW9kYWwvYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFdBQVcsQ0FBQztBQVN2QyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUU1QixNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxFQUNqQyxRQUFRLEVBQ1IsT0FBTyxFQUNQLFNBQVMsR0FBRyxrQ0FBa0MsRUFDOUMsaUJBQWlCLEdBQUcsNENBQTRDLEdBQy9DO0lBQ2pCLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsT0FBTyxZQUFZLENBQ2xCLGNBQ0MsT0FBTyxFQUFFLE9BQU8sRUFDaEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQ3RCLDJDQUEyQyxFQUMzQyxrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLFNBQVMsQ0FDVCxZQUNELGNBQ0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2QsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsWUFDQSxRQUFRLEdBQ0osR0FDRCxFQUNOLFFBQVEsQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNILENBQUMifQ==