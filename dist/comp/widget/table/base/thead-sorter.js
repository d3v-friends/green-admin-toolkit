"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
export default function ({ cols, onChange = () => { }, value }) {
    return (_jsx("thead", { children: _jsx("tr", { className: "border-top", children: cols.map((v, key) => (_jsx("th", { className: fnCss.sum(v.headerClassName || "", "pt-2 pb-2"), children: v.columnKey ? (_jsx(HeaderButton, { columnKey: v.columnKey, onChange: (sorter) => {
                        onChange(v.columnKey, sorter);
                    }, value: v.columnKey === (value === null || value === void 0 ? void 0 : value.columnKey) ? value.sorter : "NONE", children: v.name })) : (_jsx("span", { className: "text-(--text-2)", children: v.name })) }, key))) }) }));
}
function HeaderButton({ children, onChange = () => { }, value = "NONE", }) {
    let color = "filter-(--text-3-filter)";
    let img = ImgDash;
    switch (value) {
        case "ASC":
            color = "filter-(--danger-filter)";
            img = ImgAsc;
            break;
        case "DESC":
            color = "filter-(--success-filter)";
            img = ImgDesc;
            break;
    }
    const onClick = (_) => {
        onChange(toggle(value));
    };
    return (_jsxs("button", { className: "inline-flex items-baseline justify-center cursor-pointer", onClick: onClick, children: [_jsx(Image, { src: img, alt: "direction", width: 16, height: 16, className: fnCss.sum("no-drag mr-1 w-[0.7rem]", color) }), _jsx("div", { className: fnCss.sum(value === "NONE" ? "text-(--text-2)" : "text-(--text-5)"), children: children })] }));
}
function toggle(sorter) {
    const list = ["ASC", "DESC"];
    const idx = list.findIndex((v) => v === sorter);
    return list[(idx + 1) % list.length];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtc29ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXAvd2lkZ2V0L3RhYmxlL2Jhc2UvdGhlYWQtc29ydGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBR2IsT0FBTyxFQUFTLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sT0FBTyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xFLE9BQU8sTUFBTSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlELE9BQU8sT0FBTyxNQUFNLDRDQUE0QyxDQUFDO0FBZWpFLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBRSxLQUFLLEVBQXFCO0lBQ2pGLE9BQU8sQ0FDTiwwQkFDQyxhQUFJLFNBQVMsRUFBQyxZQUFZLFlBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNyQixhQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksRUFBRSxFQUFFLFdBQVcsQ0FBQyxZQUV6RCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUNkLEtBQUMsWUFBWSxJQUNaLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUN0QixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTt3QkFDcEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2hDLENBQUMsRUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsTUFBSyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsU0FBUyxDQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sWUFDOUQsQ0FBQyxDQUFDLElBQUksR0FDTyxDQUNmLENBQUMsQ0FBQyxDQUFDLENBQ0gsZUFBTSxTQUFTLEVBQUMsaUJBQWlCLFlBQUUsQ0FBQyxDQUFDLElBQUksR0FBUSxDQUNqRCxJQVpJLEdBQUcsQ0FhSixDQUNMLENBQUMsR0FDRSxHQUNFLENBQ1IsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxFQUNyQixRQUFRLEVBQ1IsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDbkIsS0FBSyxHQUFHLE1BQU0sR0FNYjtJQUNELElBQUksS0FBSyxHQUFHLDBCQUEwQixDQUFDO0lBQ3ZDLElBQUksR0FBRyxHQUFvQixPQUFPLENBQUM7SUFDbkMsUUFBUSxLQUFLLEVBQUUsQ0FBQztRQUNmLEtBQUssS0FBSztZQUNULEtBQUssR0FBRywwQkFBMEIsQ0FBQztZQUNuQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ2IsTUFBTTtRQUNQLEtBQUssTUFBTTtZQUNWLEtBQUssR0FBRywyQkFBMkIsQ0FBQztZQUNwQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ2QsTUFBTTtJQUNSLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBeUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUMzRCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGtCQUNDLFNBQVMsRUFBQywwREFBMEQsRUFDcEUsT0FBTyxFQUFFLE9BQU8sYUFDaEIsS0FBQyxLQUFLLElBQ0wsR0FBRyxFQUFFLEdBQUcsRUFDUixHQUFHLEVBQUMsV0FBVyxFQUNmLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsR0FDckQsRUFDRixjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFHLFFBQVEsR0FBTyxJQUM3RixDQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsTUFBYztJQUM3QixNQUFNLElBQUksR0FBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDaEQsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMifQ==