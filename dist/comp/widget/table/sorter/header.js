"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ children, onChange = () => { }, activate = false }) {
    const [value, setValue] = useState("NONE");
    useEffect(() => {
        if (!activate)
            setValue("NONE");
    }, [activate]);
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
        setValue(toggle(value));
        onChange(toggle(value));
    };
    return (_jsxs("button", { className: "inline-flex items-baseline justify-center cursor-pointer", onClick: onClick, children: [_jsx(Image, { src: img, alt: "direction", width: 16, height: 16, className: fnCss.sum("no-drag mr-1 w-[0.7rem]", color) }), _jsx("div", { className: fnCss.sum(value === "NONE" ? "text-(--text-2)" : "text-(--text-5)"), children: children })] }));
}
function toggle(sorter) {
    const list = ["ASC", "DESC", "NONE"];
    const idx = list.findIndex((v) => v === sorter);
    return list[(idx + 1) % list.length];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXAvd2lkZ2V0L3RhYmxlL3NvcnRlci9oZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQStCLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDL0UsT0FBTyxNQUFNLE1BQU0sMENBQTBDLENBQUM7QUFDOUQsT0FBTyxPQUFPLE1BQU0sNENBQTRDLENBQUM7QUFDakUsT0FBTyxPQUFPLE1BQU0sNkNBQTZDLENBQUM7QUFDbEUsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLEVBQVMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBVTNDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBRSxRQUFRLEdBQUcsS0FBSyxFQUFrQjtJQUMxRixNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBUyxNQUFNLENBQUMsQ0FBQztJQUVuRCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLFFBQVE7WUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVmLElBQUksS0FBSyxHQUFHLDBCQUEwQixDQUFDO0lBQ3ZDLElBQUksR0FBRyxHQUFvQixPQUFPLENBQUM7SUFDbkMsUUFBUSxLQUFLLEVBQUUsQ0FBQztRQUNmLEtBQUssS0FBSztZQUNULEtBQUssR0FBRywwQkFBMEIsQ0FBQztZQUNuQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ2IsTUFBTTtRQUNQLEtBQUssTUFBTTtZQUNWLEtBQUssR0FBRywyQkFBMkIsQ0FBQztZQUNwQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ2QsTUFBTTtJQUNSLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBeUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUMzRCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixrQkFDQyxTQUFTLEVBQUMsMERBQTBELEVBQ3BFLE9BQU8sRUFBRSxPQUFPLGFBQ2hCLEtBQUMsS0FBSyxJQUNMLEdBQUcsRUFBRSxHQUFHLEVBQ1IsR0FBRyxFQUFDLFdBQVcsRUFDZixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLEdBQ3JELEVBQ0YsY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsWUFBRyxRQUFRLEdBQU8sSUFDN0YsQ0FDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLE1BQWM7SUFDN0IsTUFBTSxJQUFJLEdBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUNoRCxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQyJ9