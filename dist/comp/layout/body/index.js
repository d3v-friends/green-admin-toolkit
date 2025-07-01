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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvYm9keS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8seUJBQXlCLENBQUM7QUFDakMsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFPeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsRUFBa0I7SUFDdEUsT0FBTyxDQUNOLGVBQU0sSUFBSSxFQUFFLElBQUksWUFDZixlQUFNLFNBQVMsRUFBQyxvRkFBb0YsWUFDbEcsUUFBUSxHQUNILEdBQ0QsQ0FDUCxDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUN6QixPQUFPLEVBQUUsTUFBTTtJQUNmLE9BQU8sRUFBRSxJQUFJO0lBQ2IsR0FBRyxFQUFFO1FBQ0o7WUFDQyxJQUFJLEVBQUUsc0NBQXNDO1lBQzVDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHNDQUFzQztZQUM1QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSx3Q0FBd0M7WUFDOUMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsd0NBQXdDO1lBQzlDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHFDQUFxQztZQUMzQyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSxxQ0FBcUM7WUFDM0MsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FB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