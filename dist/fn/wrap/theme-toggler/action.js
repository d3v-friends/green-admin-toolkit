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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZuL3dyYXAvdGhlbWUtdG9nZ2xlci9hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxPQUFPLElBQUksT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLFVBQVUsTUFBTSxRQUFRLENBQUM7QUFFaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsQ0FBTSxFQUFFLElBQWM7SUFDcEQsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxJQUFJLEVBQUU7O1FBQ3pELE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7UUFDMUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBLE1BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsMENBQUUsS0FBSyxLQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVELE9BQU87WUFDTixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsS0FBSyxFQUFFO2dCQUNOLE1BQU0sRUFBRSxJQUFJLEtBQUssSUFBSTtnQkFDckIsS0FBSyxFQUFFLElBQUk7YUFDWDtTQUNELENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMifQ==