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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvYWN0aW9uL3Jlc3BvbnNlLXJlZGlyZWN0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFFakQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTzFDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFrQjtJQUN0RCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUUzQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVaLElBQUksS0FBSyxDQUFDLEdBQUc7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNqQyxPQUFPLG1CQUFLLENBQUM7QUFDZCxDQUFDIn0=