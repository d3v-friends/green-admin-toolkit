"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ModalToggler } from "../../../index.js";
export default function ({ state, children }) {
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(0);
    useEffect(() => {
        if (!state)
            return;
        if (time === state.time)
            return;
        if (!state.err)
            return;
        setOpen(true);
        setTime(state.time);
    }, [state]);
    if (state.err)
        return null;
    if (!children)
        return null;
    return (_jsx(ModalToggler, { open: open, onChange: setOpen, children: children(setOpen, state.err) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vZXJyb3ItbW9kYWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUU1RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBU3hDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFrQjtJQUMxRCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRXZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVaLElBQUksS0FBSyxDQUFDLEdBQUc7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNCLE9BQU8sQ0FDTixLQUFDLFlBQVksSUFDWixJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSxPQUFPLFlBQ2hCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUksQ0FBQyxHQUNoQixDQUNmLENBQUM7QUFDSCxDQUFDIn0=