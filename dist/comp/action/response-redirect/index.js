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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vcmVzcG9uc2UtcmVkaXJlY3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUVqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPMUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQWtCO0lBQ3RELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTNCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosSUFBSSxLQUFLLENBQUMsR0FBRztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ2pDLE9BQU8sbUJBQUssQ0FBQztBQUNkLENBQUMifQ==