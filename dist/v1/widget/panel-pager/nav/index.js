"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { usePathname } from "next/navigation";
import { fnCss } from "nextjs-tools";
import Link from "next/link";
export default function ({ items, label }) {
    const pathname = usePathname();
    let idx = items.findIndex((item) => pathname.startsWith(item.href));
    if (idx === -1)
        idx = 0;
    return (_jsxs(_Fragment, { children: [label && _jsx("p", { children: label }), _jsx("div", { className: "flex", children: items.map((item, i) => (_jsx(Link, { href: item.href, className: fnCss.sum("rounded-tr-md rounded-tl-md bg-(--bg-panel) p-3 lg:pl-4 lg:pr-4", "border-right border-bottom", "hover:underline", idx === i
                        ? "font-bold bg-(--primary) text-(--primary-alt) hover:brightness-120"
                        : "hover:font-bold"), children: item.label }, i))) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvd2lkZ2V0L3BhbmVsLXBhZ2VyL25hdi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQVk3QixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBa0I7SUFDdkQsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFFL0IsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRXhCLE9BQU8sQ0FDTiw4QkFDRSxLQUFLLElBQUksc0JBQUksS0FBSyxHQUFLLEVBQ3hCLGNBQUssU0FBUyxFQUFDLE1BQU0sWUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3ZCLEtBQUMsSUFBSSxJQUNKLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUVmLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixpRUFBaUUsRUFDakUsNEJBQTRCLEVBQzVCLGlCQUFpQixFQUNqQixHQUFHLEtBQUssQ0FBQzt3QkFDUixDQUFDLENBQUMsb0VBQW9FO3dCQUN0RSxDQUFDLENBQUMsaUJBQWlCLENBQ3BCLFlBQ0EsSUFBSSxDQUFDLEtBQUssSUFUTixDQUFDLENBVUEsQ0FDUCxDQUFDLEdBQ0csSUFDSixDQUNILENBQUM7QUFDSCxDQUFDIn0=