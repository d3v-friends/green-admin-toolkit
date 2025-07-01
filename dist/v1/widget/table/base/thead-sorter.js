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
    const list = ["ASC", "DESC"];
    const idx = list.findIndex((v) => v === sorter);
    return list[(idx + 1) % list.length];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtc29ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3YxL3dpZGdldC90YWJsZS9iYXNlL3RoZWFkLXNvcnRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUdiLE9BQU8sRUFBUyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLE9BQU8sTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRSxPQUFPLE1BQU0sTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RCxPQUFPLE9BQU8sTUFBTSw0Q0FBNEMsQ0FBQztBQWVqRSxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQzNCLElBQUksRUFDSixRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNuQixLQUFLLEdBQUc7SUFDUCxTQUFTLEVBQUUsRUFBRTtJQUNiLE1BQU0sRUFBRSxNQUFNO0NBQ2QsR0FDbUI7SUFDcEIsT0FBTyxDQUNOLDBCQUNDLGFBQUksU0FBUyxFQUFDLFlBQVksWUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ3JCLGFBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxFQUFFLEVBQUUsV0FBVyxDQUFDLFlBRXpELENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ2QsS0FBQyxZQUFZLElBQ1osU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQ3RCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO3dCQUNwQixRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxFQUNELEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxNQUFLLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxTQUFTLENBQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxZQUM5RCxDQUFDLENBQUMsSUFBSSxHQUNPLENBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FDSCxlQUFNLFNBQVMsRUFBQyxpQkFBaUIsWUFBRSxDQUFDLENBQUMsSUFBSSxHQUFRLENBQ2pELElBWkksR0FBRyxDQWFKLENBQ0wsQ0FBQyxHQUNFLEdBQ0UsQ0FDUixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEVBQ3JCLFFBQVEsRUFDUixRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNuQixLQUFLLEdBQUcsTUFBTSxHQU1iO0lBQ0QsSUFBSSxLQUFLLEdBQUcsMEJBQTBCLENBQUM7SUFDdkMsSUFBSSxHQUFHLEdBQW9CLE9BQU8sQ0FBQztJQUNuQyxRQUFRLEtBQUssRUFBRSxDQUFDO1FBQ2YsS0FBSyxLQUFLO1lBQ1QsS0FBSyxHQUFHLDBCQUEwQixDQUFDO1lBQ25DLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDYixNQUFNO1FBQ1AsS0FBSyxNQUFNO1lBQ1YsS0FBSyxHQUFHLDJCQUEyQixDQUFDO1lBQ3BDLEdBQUcsR0FBRyxPQUFPLENBQUM7WUFDZCxNQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sT0FBTyxHQUF5QyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzNELFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sa0JBQ0MsU0FBUyxFQUFDLDBEQUEwRCxFQUNwRSxPQUFPLEVBQUUsT0FBTyxhQUNoQixLQUFDLEtBQUssSUFDTCxHQUFHLEVBQUUsR0FBRyxFQUNSLEdBQUcsRUFBQyxXQUFXLEVBQ2YsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxHQUNyRCxFQUNGLGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFlBQUcsUUFBUSxHQUFPLElBQzdGLENBQ1QsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxNQUFjO0lBQzdCLE1BQU0sSUFBSSxHQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUNoRCxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQyJ9