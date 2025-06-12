"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ children, onChange = () => { }, value = "NONE" }) {
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
    const onClick = (e) => {
        onChange(toggle(value));
    };
    return (_jsxs("button", { className: "inline-flex items-baseline justify-center cursor-pointer", onClick: onClick, children: [_jsx(Image, { src: img, alt: "direction", width: 16, height: 16, className: fnCss.sum("no-drag mr-1 w-[0.7rem]", color) }), _jsx("div", { className: fnCss.sum(value === "NONE" ? "text-(--text-2)" : "text-(--text-5)"), children: children })] }));
}
function toggle(sorter) {
    const list = ["ASC", "DESC", "NONE"];
    const idx = list.findIndex((v) => v === sorter);
    return list[(idx + 1) % list.length];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXAvd2lkZ2V0L3RhYmxlL3NvcnRlci9oZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLE1BQU0sTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RCxPQUFPLE9BQU8sTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRSxPQUFPLE9BQU8sTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRSxPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sRUFBUyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFVM0MsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQWtCO0lBQ3hGLElBQUksS0FBSyxHQUFHLDBCQUEwQixDQUFDO0lBQ3ZDLElBQUksR0FBRyxHQUFvQixPQUFPLENBQUM7SUFDbkMsUUFBUSxLQUFLLEVBQUUsQ0FBQztRQUNmLEtBQUssS0FBSztZQUNULEtBQUssR0FBRywwQkFBMEIsQ0FBQztZQUNuQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ2IsTUFBTTtRQUNQLEtBQUssTUFBTTtZQUNWLEtBQUssR0FBRywyQkFBMkIsQ0FBQztZQUNwQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ2QsTUFBTTtJQUNSLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBeUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUMzRCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGtCQUNDLFNBQVMsRUFBQywwREFBMEQsRUFDcEUsT0FBTyxFQUFFLE9BQU8sYUFDaEIsS0FBQyxLQUFLLElBQ0wsR0FBRyxFQUFFLEdBQUcsRUFDUixHQUFHLEVBQUMsV0FBVyxFQUNmLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsR0FDckQsRUFDRixjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFHLFFBQVEsR0FBTyxJQUM3RixDQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsTUFBYztJQUM3QixNQUFNLElBQUksR0FBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QyxDQUFDIn0=