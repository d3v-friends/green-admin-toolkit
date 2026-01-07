"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
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
export default {
    Label,
    Outline,
    Icon,
    InvalidMessage,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvaW5wdXQvdGhlbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQU8sS0FBd0IsTUFBTSxZQUFZLENBQUM7QUFFbEQsU0FBUyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQW1DO0lBQzFELElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsT0FBTyxZQUFHLFNBQVMsRUFBQyxXQUFXLFlBQUUsUUFBUSxHQUFLLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEVBQ2hCLE9BQU8sRUFDUCxTQUFTLEVBQ1QsUUFBUSxHQUNnRTtJQUN4RSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakQsSUFBSSxTQUFTO1FBQUUsTUFBTSxHQUFHLG1CQUFtQixDQUFDO0lBRTVDLE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxFQUFFLE1BQU0sQ0FBQyxZQUNyRyxRQUFRLEdBQ0osQ0FDTixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFDLEVBQ2IsUUFBUSxFQUNSLFVBQVUsRUFDVixPQUFPLEdBQ3dFO0lBQy9FLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsT0FBTyxDQUNOLGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLG9DQUFvQyxFQUNwQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQzdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDbkMsWUFDRCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FDbkIsU0FBUyxFQUNULFVBQVUsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUMzRSxFQUNELEdBQUcsRUFBRSxRQUFRLEVBQ2IsR0FBRyxFQUFDLE1BQU0sRUFDVixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsR0FDRyxDQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUF1RDtJQUNsRyxJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzNCLElBQUksQ0FBQyxTQUFTO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFNUIsT0FBTyxjQUFLLFNBQVMsRUFBQyxnQ0FBZ0MsWUFBRSxRQUFRLEdBQU8sQ0FBQztBQUN6RSxDQUFDO0FBRUQsZUFBZTtJQUNkLEtBQUs7SUFDTCxPQUFPO0lBQ1AsSUFBSTtJQUNKLGNBQWM7Q0FDZCxDQUFDIn0=