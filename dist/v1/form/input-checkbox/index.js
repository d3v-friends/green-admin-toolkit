"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";
export default function ({ children, defaultValue = false, onChange = () => { }, className = "" }) {
    const [value, setValue] = useState(defaultValue);
    const onClick = (e) => {
        setValue(!value);
        onChange(!value);
    };
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    return (_jsxs(_Fragment, { children: [_jsx("input", { hidden: true, value: value ? "true" : "false", onChange: () => { } }), _jsxs("div", { className: fnCss.sum("inline-flex items-center cursor-default no-drag", className), onClick: onClick, children: [_jsx("div", { className: fnCss.sum("border-(--border) border-[2px] w-[1.2rem] h-[1.2rem] rounded-sm flex items-center justify-center", value ? "border-(--primary) bg-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("w-[0.7rem] filter-(--primary-alt-filter)"), src: ImgCheck, alt: "check", width: 20, height: 20 }) }), _jsx("div", { className: fnCss.sum("pl-2", value ? "text-(--text-3)" : "text-(--text-1)"), children: children })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvZm9ybS9pbnB1dC1jaGVja2JveC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBK0IsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUMvRSxPQUFPLEVBQVMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLFFBQVEsTUFBTSx1Q0FBdUMsQ0FBQztBQVM3RCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLFlBQVksR0FBRyxLQUFLLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFrQjtJQUM5RyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVqRCxNQUFNLE9BQU8sR0FBc0MsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN4RCxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUM7SUFFRixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFFbkIsT0FBTyxDQUNOLDhCQUNDLGdCQUNDLE1BQU0sUUFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFDL0IsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FDakIsRUFFRixlQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxFQUFFLFNBQVMsQ0FBQyxFQUNsRixPQUFPLEVBQUUsT0FBTyxhQUNoQixjQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixrR0FBa0csRUFDbEcsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNoRCxZQUNELEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLEVBQ2hFLEdBQUcsRUFBRSxRQUFRLEVBQ2IsR0FBRyxFQUFDLE9BQU8sRUFDWCxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsR0FDRyxFQUNOLGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFlBQUcsUUFBUSxHQUFPLElBQzdGLElBQ0osQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9