import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ cols, value, index }) {
    return cols.map((v, key) => (_jsx("td", { className: fnCss.sum("border-top", v.cellClassName || "pt-2 pb-2"), children: v.parser(value, index) }, key)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvdGFibGUvYmFzZS9yb3ctYnVpbGRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFRbkMsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFxQjtJQUNuRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUMzQixhQUVDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLFdBQVcsQ0FBQyxZQUNqRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFGbEIsR0FBRyxDQUdKLENBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9