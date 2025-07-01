"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import "../../../../asset/style/index.scss";
import localFont from "next/font/local";
export default async function ({ lang = "ko", children }) {
    return (_jsx("html", { lang: lang, children: _jsx("body", { className: "bg-(--bg-main) min-h-screen text-[14px] lg:text-[18px] text-(--text-3) font-roboto", children: children }) }));
}
const neoFont = localFont({
    display: "swap",
    preload: true,
    src: [
        {
            path: "./font/neo/light.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./font/neo/light.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./font/neo/regular.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./font/neo/regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./font/neo/bold.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./font/neo/bold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./font/neo/extrabold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./font/neo/extrabold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./font/neo/heavy.ttf",
            weight: "900",
            style: "normal",
        },
    ],
});
const robotoFont = localFont({
    display: "swap",
    preload: true,
    src: [
        {
            path: "./font/roboto/thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./font/roboto/thin.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./font/roboto/light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./font/roboto/regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./font/roboto/regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./font/roboto/medium.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./font/roboto/bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./font/roboto/bold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./font/roboto/extrabold.ttf",
            weight: "900",
            style: "normal",
        },
    ],
});
const d2Font = localFont({
    display: "swap",
    preload: true,
    src: [
        {
            path: "./font/d2/regular.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./font/d2/regular.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./font/d2/regular.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./font/d2/regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./font/d2/regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./font/d2/bold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./font/d2/bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./font/d2/bold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./font/d2/bold.ttf",
            weight: "900",
            style: "normal",
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvbGF5b3V0L2h0bWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBT3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEVBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEVBQWtCO0lBQ3RFLE9BQU8sQ0FDTixlQUFNLElBQUksRUFBRSxJQUFJLFlBQ2YsZUFBTSxTQUFTLEVBQUMsb0ZBQW9GLFlBQ2xHLFFBQVEsR0FDSCxHQUNELENBQ1AsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDekIsT0FBTyxFQUFFLE1BQU07SUFDZixPQUFPLEVBQUUsSUFBSTtJQUNiLEdBQUcsRUFBRTtRQUNKO1lBQ0MsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSxxQkFBcUI7WUFDM0IsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUscUJBQXFCO1lBQzNCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNE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