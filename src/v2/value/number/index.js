import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnStrings } from "nextjs-tools";
export default function ({ children = "", className = "text-right", symbol }) {
    return (_jsxs("div", { className: className, children: [fnStrings.numberThousandSeparator(children), symbol && _jsx("span", { className: "ml-1 text-(--text-2) text-xs", children: symbol })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFRdkMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsU0FBUyxHQUFHLFlBQVksRUFBRSxNQUFNLEVBQWtCO0lBQzFGLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxTQUFTLGFBQ3ZCLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsRUFDM0MsTUFBTSxJQUFJLGVBQU0sU0FBUyxFQUFDLDhCQUE4QixZQUFFLE1BQU0sR0FBUSxJQUNwRSxDQUNOLENBQUM7QUFDSCxDQUFDIn0=