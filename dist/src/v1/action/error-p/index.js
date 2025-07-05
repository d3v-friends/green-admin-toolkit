import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ className = "", color = "danger", state, printer = {} }) {
    if (!state.err)
        return null;
    let msg = state.err;
    for (const key in printer) {
        if (msg.includes(key)) {
            msg = printer[key];
        }
    }
    return _jsx("p", { className: fnCss.concat("text-center", `text-(--${color})`, className), children: msg });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvYWN0aW9uL2Vycm9yLXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQWMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBVWhELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxTQUFTLEdBQUcsRUFBRSxFQUFFLEtBQUssR0FBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQWtCO0lBQ2hHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTVCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDcEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN2QixHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7SUFDRixDQUFDO0lBRUQsT0FBTyxZQUFHLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFXLEtBQUssR0FBRyxFQUFFLFNBQVMsQ0FBQyxZQUFHLEdBQUcsR0FBSyxDQUFDO0FBQzdGLENBQUMifQ==