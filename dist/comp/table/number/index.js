import { jsx as _jsx } from "react/jsx-runtime";
import { fnStrings } from "nextjs-tools";
export default function ({ children = "", className = "text-right" }) {
    return _jsx("div", { className: className, children: fnStrings.numberThousandSeparator(children) });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9udW1iZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBT3ZDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxZQUFZLEVBQWtCO0lBQ2xGLE9BQU8sY0FBSyxTQUFTLEVBQUUsU0FBUyxZQUFHLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsR0FBTyxDQUFDO0FBQ3ZGLENBQUMifQ==