"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ max, value, position = "top-0" }) {
    if (!value)
        return null;
    const width = `${(value / max) * 100}%`;
    return (_jsx("div", { className: fnCss.sum("fixed left-0 w-screen h-[0.3rem] z-5 no-drag", position), children: _jsx("div", { className: "h-full bg-(--primary) transition-all duration-300", style: { width } }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvbG9hZGluZy1iYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBUW5DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQWtCO0lBQ3pFLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN4QyxPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsRUFBRSxRQUFRLENBQUMsWUFDbEYsY0FDQyxTQUFTLEVBQUMsbURBQW1ELEVBQzdELEtBQUssRUFBRSxFQUFDLEtBQUssRUFBQyxHQUFRLEdBQ2xCLENBQ04sQ0FBQztBQUNILENBQUMifQ==