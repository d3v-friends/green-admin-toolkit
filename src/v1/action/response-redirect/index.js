"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function ({ state, href }) {
    const [time, setTime] = useState(0);
    const router = useRouter();
    useEffect(() => {
        if (!state)
            return;
        if (time === state.time)
            return;
        setTime(state.time);
        router.push(href);
    }, [state]);
    if (state.err)
        return null;
    if (!state.response)
        return null;
    return _jsx(_Fragment, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRWpELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU8xQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBa0I7SUFDdEQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFFM0IsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNuQixJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixJQUFJLEtBQUssQ0FBQyxHQUFHO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDakMsT0FBTyxtQkFBSyxDQUFDO0FBQ2QsQ0FBQyJ9