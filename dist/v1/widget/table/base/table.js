import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, className }) {
    className = className || "";
    return (_jsx("div", { className: className, children: _jsx("table", { className: fnCss.sum("w-full border-bottom"), children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvd2lkZ2V0L3RhYmxlL2Jhc2UvdGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBUW5DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFrQjtJQUM5RCxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUM1QixPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUUsU0FBUyxZQUN4QixnQkFBTyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxZQUFHLFFBQVEsR0FBUyxHQUNsRSxDQUNOLENBQUM7QUFDSCxDQUFDIn0=