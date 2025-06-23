"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
export default function ({ cols, onChange = () => { }, value = {
    columnKey: "",
    sorter: "NONE",
}, }) {
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
    const list = ["ASC", "DESC", "NONE"];
    const idx = list.findIndex((v) => v === sorter);
    return list[(idx + 1) % list.length];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtc29ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXAvd2lkZ2V0L3RhYmxlL2Jhc2UvdGhlYWQtc29ydGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBR2IsT0FBTyxFQUFTLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sT0FBTyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xFLE9BQU8sTUFBTSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlELE9BQU8sT0FBTyxNQUFNLDRDQUE0QyxDQUFDO0FBZWpFLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFDM0IsSUFBSSxFQUNKLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ25CLEtBQUssR0FBRztJQUNQLFNBQVMsRUFBRSxFQUFFO0lBQ2IsTUFBTSxFQUFFLE1BQU07Q0FDZCxHQUNtQjtJQUNwQixPQUFPLENBQ04sMEJBQ0MsYUFBSSxTQUFTLEVBQUMsWUFBWSxZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDckIsYUFDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLEVBQUUsRUFBRSxXQUFXLENBQUMsWUFFekQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDZCxLQUFDLFlBQVksSUFDWixTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFDdEIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7d0JBQ3BCLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNoQyxDQUFDLEVBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLE1BQUssS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLFlBQzlELENBQUMsQ0FBQyxJQUFJLEdBQ08sQ0FDZixDQUFDLENBQUMsQ0FBQyxDQUNILGVBQU0sU0FBUyxFQUFDLGlCQUFpQixZQUFFLENBQUMsQ0FBQyxJQUFJLEdBQVEsQ0FDakQsSUFaSSxHQUFHLENBYUosQ0FDTCxDQUFDLEdBQ0UsR0FDRSxDQUNSLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsRUFDckIsUUFBUSxFQUNSLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ25CLEtBQUssR0FBRyxNQUFNLEdBTWI7SUFDRCxJQUFJLEtBQUssR0FBRywwQkFBMEIsQ0FBQztJQUN2QyxJQUFJLEdBQUcsR0FBb0IsT0FBTyxDQUFDO0lBQ25DLFFBQVEsS0FBSyxFQUFFLENBQUM7UUFDZixLQUFLLEtBQUs7WUFDVCxLQUFLLEdBQUcsMEJBQTBCLENBQUM7WUFDbkMsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNiLE1BQU07UUFDUCxLQUFLLE1BQU07WUFDVixLQUFLLEdBQUcsMkJBQTJCLENBQUM7WUFDcEMsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUNkLE1BQU07SUFDUixDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQXlDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDM0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixrQkFDQyxTQUFTLEVBQUMsMERBQTBELEVBQ3BFLE9BQU8sRUFBRSxPQUFPLGFBQ2hCLEtBQUMsS0FBSyxJQUNMLEdBQUcsRUFBRSxHQUFHLEVBQ1IsR0FBRyxFQUFDLFdBQVcsRUFDZixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLEdBQ3JELEVBQ0YsY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsWUFBRyxRQUFRLEdBQU8sSUFDN0YsQ0FDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLE1BQWM7SUFDN0IsTUFBTSxJQUFJLEdBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUNoRCxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQyJ9