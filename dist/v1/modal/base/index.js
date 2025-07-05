"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
Component.__isStatic = true;
export default function Component({ children, onClick, className = "flex items-center justify-center", backdropClassName = "bg-[rgba(0,0,0,0.3)] backdrop-grayscale-40", }) {
    if (!children)
        return null;
    return (_jsx("div", { onClick: onClick, className: fnCss.concat("fixed w-screen h-screen z-10 left-0 top-0", "backdrop-blur-xs", backdropClassName, className), children: _jsx("div", { onClick: (e) => {
                e.stopPropagation();
            }, children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvbW9kYWwvYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFTbkMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFFNUIsTUFBTSxDQUFDLE9BQU8sVUFBVSxTQUFTLENBQUMsRUFDakMsUUFBUSxFQUNSLE9BQU8sRUFDUCxTQUFTLEdBQUcsa0NBQWtDLEVBQzlDLGlCQUFpQixHQUFHLDRDQUE0QyxHQUMvQztJQUNqQixJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzNCLE9BQU8sQ0FDTixjQUNDLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUN0QiwyQ0FBMkMsRUFDM0Msa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixTQUFTLENBQ1QsWUFDRCxjQUNDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNkLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNyQixDQUFDLFlBQ0EsUUFBUSxHQUNKLEdBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9