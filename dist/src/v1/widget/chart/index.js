"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function ({ className, type, series, width, height, options }) {
    return (_jsx("div", { className: className, children: _jsx(Chart, { type, series, width, height, options }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvd2lkZ2V0L2NoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxPQUFPLE1BQU0sY0FBYyxDQUFDO0FBR25DLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBMkJ0RSxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQWtCO0lBQzFGLE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxTQUFTLFlBQ3hCLEtBQUMsS0FBSyxJQUFNLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUssR0FDaEQsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9