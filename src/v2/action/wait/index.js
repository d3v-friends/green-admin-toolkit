"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
export default function ({ data, children, fallback = _jsx(Fallback, {}) }) {
    return (_jsxs(_Fragment, { children: [!data && fallback, _jsx("div", { className: concat("transition duration-300", data ? "opacity-100" : "opacity-0"), children: data && children(data) })] }));
}
function Fallback({}) {
    return _jsx("div", { className: "h-20 w-full flex items-center justify-center", children: "\uB85C\uB529\uC911" });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxNQUFNLEVBQVksTUFBTSxjQUFjLENBQUM7QUFVL0MsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLEtBQUMsUUFBUSxLQUFHLEVBQXFCO0lBQ3hGLE9BQU8sQ0FDTiw4QkFDRSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQ2xCLGNBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQ25GLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQ2xCLElBQ0osQ0FDSCxDQUFDO0FBQ0gsQ0FBQztBQUdELFNBQVMsUUFBUSxDQUFDLEVBQW9DO0lBQ3JELE9BQU8sY0FBSyxTQUFTLEVBQUMsOENBQThDLG1DQUFVLENBQUM7QUFDaEYsQ0FBQyJ9