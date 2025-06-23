"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";
export default function ({ children, defaultValue = false, onChange = () => { }, className = "" }) {
    const [value, setValue] = useState(defaultValue);
    const onClick = (e) => {
        setValue(!value);
        onChange(!value);
    };
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    return (_jsxs(_Fragment, { children: [_jsx("input", { hidden: true, value: value ? "true" : "false", onChange: () => { } }), _jsxs("div", { className: fnCss.sum("inline-flex items-center cursor-default no-drag", className), onClick: onClick, children: [_jsx("div", { className: fnCss.sum("border-(--border) border-[2px] w-[1.2rem] h-[1.2rem] rounded-sm flex items-center justify-center", value ? "border-(--primary) bg-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("w-[0.7rem] filter-(--primary-alt-filter)"), src: ImgCheck, alt: "check", width: 20, height: 20 }) }), _jsx("div", { className: fnCss.sum("pl-2", value ? "text-(--text-3)" : "text-(--text-1)"), children: children })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2lucHV0LWNoZWNrYm94L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUErQixTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQy9FLE9BQU8sRUFBUyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLHVDQUF1QyxDQUFDO0FBUzdELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsWUFBWSxHQUFHLEtBQUssRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQWtCO0lBQzlHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWpELE1BQU0sT0FBTyxHQUFzQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3hELFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQztJQUVGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUVuQixPQUFPLENBQ04sOEJBQ0MsZ0JBQ0MsTUFBTSxRQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUMvQixRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxHQUNqQixFQUVGLGVBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsaURBQWlELEVBQUUsU0FBUyxDQUFDLEVBQ2xGLE9BQU8sRUFBRSxPQUFPLGFBQ2hCLGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLGtHQUFrRyxFQUNsRyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ2hELFlBQ0QsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsRUFDaEUsR0FBRyxFQUFFLFFBQVEsRUFDYixHQUFHLEVBQUMsT0FBTyxFQUNYLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxHQUNHLEVBQ04sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsWUFBRyxRQUFRLEdBQU8sSUFDN0YsSUFDSixDQUNILENBQUM7QUFDSCxDQUFDIn0=