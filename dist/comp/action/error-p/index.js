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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vZXJyb3ItcC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBYyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFVaEQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBa0I7SUFDaEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFNUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwQixLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztJQUNGLENBQUM7SUFFRCxPQUFPLFlBQUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFdBQVcsS0FBSyxHQUFHLEVBQUUsU0FBUyxDQUFDLFlBQUcsR0FBRyxHQUFLLENBQUM7QUFDN0YsQ0FBQyJ9