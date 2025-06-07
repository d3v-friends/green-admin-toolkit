import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, className }) {
    className = className || "";
    return (_jsx("div", { className: className, children: _jsx("table", { className: fnCss.sum("w-full border-bottom"), children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvdGFibGUvYmFzZS90YWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFRbkMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQWtCO0lBQzlELFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQzVCLE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxTQUFTLFlBQ3hCLGdCQUFPLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLFlBQUcsUUFBUSxHQUFTLEdBQ2xFLENBQ04sQ0FBQztBQUNILENBQUMifQ==