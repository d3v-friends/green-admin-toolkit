"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function ({ className, type, series, width, height, options }) {
    return (_jsx("div", { className: className, children: _jsx(Chart, { type, series, width, height, options }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUduQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztBQTJCdEUsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFrQjtJQUMxRixPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUUsU0FBUyxZQUN4QixLQUFDLEtBQUssSUFBTSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFLLEdBQ2hELENBQ04sQ0FBQztBQUNILENBQUMifQ==