"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function ({ className, type, series, width, height, options }) {
    return (_jsx("div", { className: className, children: _jsx(Chart, { type, series, width, height, options }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvY2hhcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFHbkMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7QUEyQnRFLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBa0I7SUFDMUYsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFFLFNBQVMsWUFDeEIsS0FBQyxLQUFLLElBQU0sSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sR0FBSyxHQUNoRCxDQUNOLENBQUM7QUFDSCxDQUFDIn0=