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
        setOpen(true);
        setTime(state.time);
    }, [state]);
    if (state.err)
        return null;
    if (!children)
        return null;
    if (!state.response)
        return null;
    return (_jsx(ModalToggler, { open: open, onChange: setOpen, children: children(setOpen, state.response) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRTVELE9BQU8sWUFBWSxNQUFNLHFCQUFxQixDQUFDO0FBUy9DLE1BQU0sQ0FBQyxPQUFPLFdBQTRCLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBbUM7SUFDNUYsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNuQixJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosSUFBSSxLQUFLLENBQUMsR0FBRztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzNCLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFakMsT0FBTyxDQUNOLEtBQUMsWUFBWSxJQUNaLElBQUksRUFBRSxJQUFJLEVBQ1YsUUFBUSxFQUFFLE9BQU8sWUFDaEIsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQ3BCLENBQ2YsQ0FBQztBQUNILENBQUMifQ==