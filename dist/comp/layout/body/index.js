"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import "../../../../asset/style/index.scss";
import localFont from "next/font/local";
import { fnCss } from "nextjs-tools";
export default async function ({ lang = "ko", children }) {
    return (_jsx("html", { lang: lang, children: _jsx("body", { className: fnCss.sum("bg-(--bg-main) min-h-screen", "text-[14px] lg:text-[18px] text-(--text-3) font-roboto"), children: children }) }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvYm9keS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8seUJBQXlCLENBQUM7QUFDakMsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQU9uQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxFQUFrQjtJQUN0RSxPQUFPLENBQ04sZUFBTSxJQUFJLEVBQUUsSUFBSSxZQUNmLGVBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLDZCQUE2QixFQUM3Qix3REFBd0QsQ0FDeEQsWUFDQSxRQUFRLEdBQ0gsR0FDRCxDQUNQLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsT0FBTyxFQUFFLElBQUk7SUFDYixHQUFHLEVBQUU7UUFDSjtZQUNDLElBQUksRUFBRSxzQ0FBc0M7WUFDNUMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsc0NBQXNDO1lBQzVDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHdDQUF3QztZQUM5QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSx3Q0FBd0M7WUFDOUMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUscUNBQXFDO1lBQzNDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7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