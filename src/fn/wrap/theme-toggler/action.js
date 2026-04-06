"use server";
import { cookies } from "next/headers";
import { fnServerAction } from "nextjs-tools";
import { default as fnTheme, THEME_KEY } from "./fn";
import actionForm from "./form";
export default async function (_, form) {
    return fnServerAction.parser(form, actionForm, async () => {
        var _a;
        const c = await cookies();
        const prev = fnTheme.validate(((_a = c.get(THEME_KEY)) === null || _a === void 0 ? void 0 : _a.value) || "light");
        const next = fnTheme.toggle(prev);
        if (prev !== next) {
            c.set(THEME_KEY, next);
        }
        return {
            time: new Date().getTime(),
            value: {
                reload: prev !== next,
                theme: next,
            },
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDckMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxVQUFVLE1BQU0sUUFBUSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQU0sRUFBRSxJQUFjO0lBQ3BELE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssSUFBSSxFQUFFOztRQUN6RCxNQUFNLENBQUMsR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO1FBQzFCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQSxNQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLDBDQUFFLEtBQUssS0FBSSxPQUFPLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxPQUFPO1lBQ04sSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzFCLEtBQUssRUFBRTtnQkFDTixNQUFNLEVBQUUsSUFBSSxLQUFLLElBQUk7Z0JBQ3JCLEtBQUssRUFBRSxJQUFJO2FBQ1g7U0FDRCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDIn0=