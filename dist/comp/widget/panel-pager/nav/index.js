"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { usePathname } from "next/navigation";
import { fnCss } from "nextjs-tools";
import Link from "next/link";
export default function ({ items }) {
    const pathname = usePathname();
    let idx = items.findIndex((item) => pathname.startsWith(item.href));
    if (idx === -1)
        idx = 0;
    return (_jsx("div", { className: "flex", children: items.map((item, i) => (_jsx(Link, { href: item.href, className: fnCss.sum("rounded-tr-md rounded-tl-md bg-(--bg-panel) p-3 lg:pl-4 lg:pr-4", "border-right border-bottom", "hover:underline", idx === i
                ? "font-bold bg-(--primary) text-(--primary-alt) hover:brightness-120"
                : "hover:font-bold"), children: item.label }, i))) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvcGFuZWwtcGFnZXIvbmF2L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBVzdCLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQWtCO0lBQ2hELE1BQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBQy9CLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUV4QixPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUMsTUFBTSxZQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDdkIsS0FBQyxJQUFJLElBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBRWYsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLGlFQUFpRSxFQUNqRSw0QkFBNEIsRUFDNUIsaUJBQWlCLEVBQ2pCLEdBQUcsS0FBSyxDQUFDO2dCQUNSLENBQUMsQ0FBQyxvRUFBb0U7Z0JBQ3RFLENBQUMsQ0FBQyxpQkFBaUIsQ0FDcEIsWUFDQSxJQUFJLENBQUMsS0FBSyxJQVROLENBQUMsQ0FVQSxDQUNQLENBQUMsR0FDRyxDQUNOLENBQUM7QUFDSCxDQUFDIn0=