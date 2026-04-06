"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { useServerAction } from "nextjs-tools";
import { useEffect, useState } from "react";
import { default as fnTheme } from "./fn";
import Action from "./action";
import Form from "./form";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQVcsZUFBZSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sRUFBQyxPQUFPLElBQUksT0FBTyxFQUFRLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUFXMUIsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBa0I7SUFDbkQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxFQUE2QixDQUFDO0lBQzlELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxFQUFtQixDQUFDO0lBQ3RELE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTNCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzVCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVyQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLElBQUksQ0FBQztJQUV4QixPQUFPLENBQ04sOEJBQ0MsZUFDQyxNQUFNLEVBQUUsTUFBTSxFQUNkLEdBQUcsRUFBRSxPQUFPLEdBQ1gsRUFFRCxJQUFJO2dCQUNKLFFBQVEsQ0FBQztvQkFDUixNQUFNLEVBQUUsR0FBRyxFQUFFO3dCQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFDRCxLQUFLO2lCQUNMLENBQUMsSUFDRCxDQUNILENBQUM7QUFDSCxDQUFDIn0=