"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button, ModalToggler } from "../../../index.js";
import { fnCss } from "nextjs-tools";
export default function ({ value, className = "" }) {
    const [time, setTime] = useState(0);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (!value)
            return;
        if (time === value.time)
            return;
        setOpen(true);
        setTime(value.time);
    }, [value]);
    if (!open)
        return null;
    if (!value)
        return null;
    if (!value.content)
        return null;
    return (_jsx(ModalToggler, { backdropClassName: " ", open: open, onChange: setOpen, children: _jsxs("div", { className: fnCss.sum("w-[20rem] lg:w-[30rem] bg-(--bg-panel) p-2 lg:p-4 rounded-md shadow-2xl shadow-[rgba(0,0,0,0.07)]", className), children: [value.content, _jsx("div", { className: "pt-2 lg:pt-4 text-right", children: _jsx(Button, { className: "w-20", style: "outlined", onClick: () => setOpen(false), children: "\uD655\uC778" }) })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9tb2RhbC9hbGVydC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxLQUFLLEVBQVcsTUFBTSxjQUFjLENBQUM7QUFZN0MsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFrQjtJQUNoRSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV4QyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFaEMsT0FBTyxDQUNOLEtBQUMsWUFBWSxJQUNaLGlCQUFpQixFQUFDLEdBQUcsRUFDckIsSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsT0FBTyxZQUNqQixlQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixtR0FBbUcsRUFDbkcsU0FBUyxDQUNULGFBQ0EsS0FBSyxDQUFDLE9BQU8sRUFFZCxjQUFLLFNBQVMsRUFBQyx5QkFBeUIsWUFDdkMsS0FBQyxNQUFNLElBQ04sU0FBUyxFQUFDLE1BQU0sRUFDaEIsS0FBSyxFQUFDLFVBQVUsRUFDaEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBRXJCLEdBQ0osSUFDRCxHQUNRLENBQ2YsQ0FBQztBQUNILENBQUMifQ==