import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnStrings } from "nextjs-tools";
export default function ({ children = "", className = "text-right", symbol }) {
    return (_jsxs("div", { className: className, children: [fnStrings.numberThousandSeparator(children), symbol && _jsx("span", { className: "ml-1 text-(--text-2) text-xs", children: symbol })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvdmFsdWUvbnVtYmVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVF2QyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxTQUFTLEdBQUcsWUFBWSxFQUFFLE1BQU0sRUFBa0I7SUFDMUYsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLFNBQVMsYUFDdkIsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxFQUMzQyxNQUFNLElBQUksZUFBTSxTQUFTLEVBQUMsOEJBQThCLFlBQUUsTUFBTSxHQUFRLElBQ3BFLENBQ04sQ0FBQztBQUNILENBQUMifQ==