"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";
function Label({ children }) {
    if (!children)
        return null;
    return _jsx("p", { className: "mb-[-5px]", children: children });
}
function Outline({ isFocus, isInvalid, children, }) {
    let border = isFocus ? "border-(--primary)" : "";
    if (isInvalid)
        border = "border-(--danger)";
    return (_jsx("div", { className: fnCss.sum("flex items-center border-all rounded-md h-[2.5rem] overflow-hidden", border), children: children }));
}
function Icon({ children, isDisabled, isFocus, }) {
    if (!children)
        return null;
    return (_jsx("div", { className: fnCss.sum("border-right h-full flex pl-2 pr-2", isDisabled ? "bg-(--dark)" : "bg-(--primary)", isFocus ? "border-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("no-drag", isDisabled ? "filter-(--dark-alt-filter)" : "filter-(--primary-alt-filter)"), src: children, alt: "icon", width: 25, height: 25 }) }));
}
function InvalidMessage({ children, isInvalid }) {
    if (!children)
        return null;
    if (!isInvalid)
        return null;
    return _jsx("div", { className: "min-h-[1.5rem] text-(--danger)", children: children });
}
const DefaultOnClickCheckboxInterceptor = (e, value) => {
    e.stopPropagation();
    return value;
};
function Checkbox({ value, children, onClickInterceptor = DefaultOnClickCheckboxInterceptor, onChange, }) {
    return (_jsxs("button", { type: "button", className: "inline-flex items-center", onClick: (e) => onChange(onClickInterceptor(e, !value)), children: [_jsx("div", { className: fnCss.sum("border-(--border) border-[2px] w-[1.2rem] h-[1.2rem] rounded-sm flex items-center justify-center", value ? "border-(--primary) bg-(--primary)" : ""), children: _jsx(Image, { className: fnCss.sum("w-[0.7rem] filter-(--primary-alt-filter)"), src: ImgCheck, alt: "check", width: 20, height: 20 }) }), _jsx("div", { className: fnCss.sum("pl-2", value ? "text-(--text-3)" : "text-(--text-1)"), children: children })] }));
}
export default {
    Label,
    Outline,
    Icon,
    InvalidMessage,
    Checkbox,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBUyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLFFBQVEsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RCxTQUFTLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBbUM7SUFDMUQsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixPQUFPLFlBQUcsU0FBUyxFQUFDLFdBQVcsWUFBRSxRQUFRLEdBQUssQ0FBQztBQUNoRCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsRUFDaEIsT0FBTyxFQUNQLFNBQVMsRUFDVCxRQUFRLEdBQ2dFO0lBQ3hFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRCxJQUFJLFNBQVM7UUFBRSxNQUFNLEdBQUcsbUJBQW1CLENBQUM7SUFFNUMsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsb0VBQW9FLEVBQUUsTUFBTSxDQUFDLFlBQ3JHLFFBQVEsR0FDSixDQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUMsRUFDYixRQUFRLEVBQ1IsVUFBVSxFQUNWLE9BQU8sR0FDd0U7SUFDL0UsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixPQUFPLENBQ04sY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FDbkIsb0NBQW9DLEVBQ3BDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFDN0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNuQyxZQUNELEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixTQUFTLEVBQ1QsVUFBVSxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQzNFLEVBQ0QsR0FBRyxFQUFFLFFBQVEsRUFDYixHQUFHLEVBQUMsTUFBTSxFQUNWLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxHQUNHLENBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQXVEO0lBQ2xHLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsSUFBSSxDQUFDLFNBQVM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUU1QixPQUFPLGNBQUssU0FBUyxFQUFDLGdDQUFnQyxZQUFFLFFBQVEsR0FBTyxDQUFDO0FBQ3pFLENBQUM7QUFJRCxNQUFNLGlDQUFpQyxHQUErQixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUNsRixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEIsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixTQUFTLFFBQVEsQ0FBQyxFQUNqQixLQUFLLEVBQ0wsUUFBUSxFQUNSLGtCQUFrQixHQUFHLGlDQUFpQyxFQUN0RCxRQUFRLEdBTVA7SUFDRCxPQUFPLENBQ04sa0JBQ0MsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUMsMEJBQTBCLEVBQ3BDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQ3ZELGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLGtHQUFrRyxFQUNsRyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ2hELFlBQ0QsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsRUFDaEUsR0FBRyxFQUFFLFFBQVEsRUFDYixHQUFHLEVBQUMsT0FBTyxFQUNYLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxHQUNHLEVBQ04sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsWUFBRyxRQUFRLEdBQU8sSUFDMUYsQ0FDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWU7SUFDZCxLQUFLO0lBQ0wsT0FBTztJQUNQLElBQUk7SUFDSixjQUFjO0lBQ2QsUUFBUTtDQUNSLENBQUMifQ==