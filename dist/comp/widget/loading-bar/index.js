"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Decimal from "decimal.js";
export default function ({ max, value, position = "top-0" }) {
    let width = new Decimal(value).mul(100).divToInt(max);
    if (width.gt(100))
        width = new Decimal(100);
    return (_jsx("div", { className: fnCss.sum("fixed left-0 w-screen h-[0.3rem] z-5 no-drag", position), children: _jsx("div", { className: "h-full bg-(--primary) transition-all duration-300", style: { width: `${width.toNumber()}%` } }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvbG9hZGluZy1iYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQztBQVFqQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFrQjtJQUN6RSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFBRSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsOENBQThDLEVBQUUsUUFBUSxDQUFDLFlBQ2xGLGNBQ0MsU0FBUyxFQUFDLG1EQUFtRCxFQUM3RCxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQyxHQUFRLEdBQzFDLENBQ04sQ0FBQztBQUNILENBQUMifQ==