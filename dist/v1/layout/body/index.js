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
            path: "../../../../asset/font/neo/light.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../../../asset/font/neo/light.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../../../asset/font/neo/regular.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../../asset/font/neo/regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../../asset/font/neo/bold.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../../asset/font/neo/bold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../../asset/font/neo/extrabold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../../asset/font/neo/extrabold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../../../asset/font/neo/heavy.ttf",
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
            path: "../../../../asset/font/roboto/thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../../../asset/font/roboto/thin.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../../../asset/font/roboto/light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../../asset/font/roboto/regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../../asset/font/roboto/regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../../asset/font/roboto/medium.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../../asset/font/roboto/bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../../asset/font/roboto/bold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../../../asset/font/roboto/extrabold.ttf",
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
            path: "../../../../asset/font/d2/regular.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../../../asset/font/d2/regular.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../../../asset/font/d2/regular.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../../asset/font/d2/regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../../asset/font/d2/regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../../asset/font/d2/bold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../../asset/font/d2/bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../../asset/font/d2/bold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../../../asset/font/d2/bold.ttf",
            weight: "900",
            style: "normal",
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvbGF5b3V0L2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBT3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEVBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEVBQWtCO0lBQ3RFLE9BQU8sQ0FDTixlQUFNLElBQUksRUFBRSxJQUFJLFlBQ2YsZUFBTSxTQUFTLEVBQUMsb0ZBQW9GLFlBQ2xHLFFBQVEsR0FDSCxHQUNELENBQ1AsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDekIsT0FBTyxFQUFFLE1BQU07SUFDZixPQUFPLEVBQUUsSUFBSTtJQUNiLEdBQUcsRUFBRTtRQUNKO1lBQ0MsSUFBSSxFQUFFLHNDQUFzQztZQUM1QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSxzQ0FBc0M7WUFDNUMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsd0NBQXdDO1lBQzlDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHdDQUF3QztZQUM5QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSxxQ0FBcUM7WUFDM0MsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUscUNBQXFDO1lBQzNDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNE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