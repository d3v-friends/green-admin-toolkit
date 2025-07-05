"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { useServerAction } from "nextjs-tools";
import { useEffect, useState } from "react";
import { default as fnTheme } from "./fn.js";
import Action from "./action.js";
import Form from "./form.js";
export default function ({ children }) {
    const [time, setTime] = useState(0);
    const [state, action] = useServerAction(Action, Form);
    const [form, setForm] = useState();
    const [theme, setTheme] = useState();
    const router = useRouter();
    useEffect(() => {
        if (!state.response)
            return;
        if (state.response.time === time)
            return;
        setTime(state.response.time);
        if (state.response.value.reload) {
            router.refresh();
        }
        setTheme(state.response.value.theme);
    }, [state.response]);
    useEffect(() => {
        setTheme(fnTheme.expect(document.documentElement.classList.values().toArray()));
    }, []);
    if (!children)
        return null;
    if (!theme)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("form", { action: action, ref: setForm }), form &&
                children({
                    toggle: () => {
                        form.requestSubmit();
                    },
                    theme,
                })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZm4vd3JhcC90aGVtZS10b2dnbGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBVyxlQUFlLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBYyxFQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDNUQsT0FBTyxFQUFDLE9BQU8sSUFBSSxPQUFPLEVBQVEsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQzlCLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQVcxQixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFrQjtJQUNuRCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFDOUQsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLEVBQW1CLENBQUM7SUFDdEQsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFFM0IsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDNUIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJO1lBQUUsT0FBTztRQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQ0QsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXJCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXhCLE9BQU8sQ0FDTiw4QkFDQyxlQUNDLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxFQUFFLE9BQU8sR0FDWCxFQUVELElBQUk7Z0JBQ0osUUFBUSxDQUFDO29CQUNSLE1BQU0sRUFBRSxHQUFHLEVBQUU7d0JBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN0QixDQUFDO29CQUNELEtBQUs7aUJBQ0wsQ0FBQyxJQUNELENBQ0gsQ0FBQztBQUNILENBQUMifQ==