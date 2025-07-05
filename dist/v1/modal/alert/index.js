"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button, ModalToggler } from "../../index.js";
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
    return (_jsx(ModalToggler, { backdropClassName: " ", open: open, onChange: setOpen, children: _jsxs("div", { className: fnCss.sum("border-all", "w-[20rem] lg:w-[30rem] bg-(--bg-panel) p-2 lg:p-4 rounded-md", "shadow-2xl shadow-[rgba(0,0,0,0.07)]", className), children: [value.content, _jsx("div", { className: fnCss.sum("pt-2 lg:pt-4 text-right"), children: _jsx(Button, { className: "w-20", style: "outlined", onClick: () => setOpen(false), children: "\uD655\uC778" }) })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvbW9kYWwvYWxlcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUMzQyxPQUFPLEVBQUMsS0FBSyxFQUFXLE1BQU0sY0FBYyxDQUFDO0FBWTdDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBa0I7SUFDaEUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNuQixJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN2QixJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRWhDLE9BQU8sQ0FDTixLQUFDLFlBQVksSUFDWixpQkFBaUIsRUFBQyxHQUFHLEVBQ3JCLElBQUksRUFBRSxJQUFJLEVBQ1YsUUFBUSxFQUFFLE9BQU8sWUFDakIsZUFDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FDbkIsWUFBWSxFQUNaLDhEQUE4RCxFQUM5RCxzQ0FBc0MsRUFDdEMsU0FBUyxDQUNULGFBQ0EsS0FBSyxDQUFDLE9BQU8sRUFFZCxjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLFlBQ25ELEtBQUMsTUFBTSxJQUNOLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEtBQUssRUFBQyxVQUFVLEVBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUVyQixHQUNKLElBQ0QsR0FDUSxDQUNmLENBQUM7QUFDSCxDQUFDIn0=