"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
export default function ({ data, children, fallback = _jsx(Fallback, {}) }) {
    return (_jsxs(_Fragment, { children: [!data && fallback, _jsx("div", { className: concat("transition duration-300", data ? "opacity-100" : "opacity-0"), children: data && children(data) })] }));
}
function Fallback({}) {
    return _jsx("div", { className: "h-20 w-full flex items-center justify-center", children: "\uB85C\uB529\uC911" });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvYWN0aW9uL3dhaXQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsTUFBTSxFQUFZLE1BQU0sY0FBYyxDQUFDO0FBVS9DLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsR0FBRyxLQUFDLFFBQVEsS0FBRyxFQUFxQjtJQUN4RixPQUFPLENBQ04sOEJBQ0UsQ0FBQyxJQUFJLElBQUksUUFBUSxFQUNsQixjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUNuRixJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUNsQixJQUNKLENBQ0gsQ0FBQztBQUNILENBQUM7QUFHRCxTQUFTLFFBQVEsQ0FBQyxFQUFvQztJQUNyRCxPQUFPLGNBQUssU0FBUyxFQUFDLDhDQUE4QyxtQ0FBVSxDQUFDO0FBQ2hGLENBQUMifQ==