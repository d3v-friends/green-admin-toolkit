"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ModalToggler from "../../modal/toggler";
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
    if (!state.err)
        return null;
    if (!children)
        return null;
    return (_jsx(ModalToggler, { open: open, onChange: setOpen, children: children(setOpen, state.err) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRTVELE9BQU8sWUFBWSxNQUFNLHFCQUFxQixDQUFDO0FBUy9DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFrQjtJQUMxRCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRXZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzVCLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFM0IsT0FBTyxDQUNOLEtBQUMsWUFBWSxJQUNaLElBQUksRUFBRSxJQUFJLEVBQ1YsUUFBUSxFQUFFLE9BQU8sWUFDaEIsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQ2hCLENBQ2YsQ0FBQztBQUNILENBQUMifQ==