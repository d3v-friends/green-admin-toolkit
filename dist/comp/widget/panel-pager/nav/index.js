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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvcGFuZWwtcGFnZXIvbmF2L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBWTdCLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFrQjtJQUN2RCxNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUUvQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztRQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFeEIsT0FBTyxDQUNOLDhCQUNFLEtBQUssSUFBSSxzQkFBSSxLQUFLLEdBQUssRUFDeEIsY0FBSyxTQUFTLEVBQUMsTUFBTSxZQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDdkIsS0FBQyxJQUFJLElBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBRWYsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLGlFQUFpRSxFQUNqRSw0QkFBNEIsRUFDNUIsaUJBQWlCLEVBQ2pCLEdBQUcsS0FBSyxDQUFDO3dCQUNSLENBQUMsQ0FBQyxvRUFBb0U7d0JBQ3RFLENBQUMsQ0FBQyxpQkFBaUIsQ0FDcEIsWUFDQSxJQUFJLENBQUMsS0FBSyxJQVROLENBQUMsQ0FVQSxDQUNQLENBQUMsR0FDRyxJQUNKLENBQ0gsQ0FBQztBQUNILENBQUMifQ==