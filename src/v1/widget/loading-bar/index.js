"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fnCss } from "nextjs-tools";
import Decimal from "decimal.js";
export default function ({ max, value, position = "top-0" }) {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, []);
    if (!init)
        return null;
    let width = new Decimal(value).mul(100).divToInt(max);
    if (width.gt(100))
        width = new Decimal(100);
    return (_jsx("div", { className: fnCss.sum("fixed left-0 w-screen h-[0.3rem] z-5 no-drag", position), children: _jsx("div", { className: "h-full bg-(--primary) transition-all duration-300", style: { width: `${width.toNumber()}%` } }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxPQUFPLE1BQU0sWUFBWSxDQUFDO0FBUWpDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQWtCO0lBQ3pFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUFFLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsRUFBRSxRQUFRLENBQUMsWUFDbEYsY0FDQyxTQUFTLEVBQUMsbURBQW1ELEVBQzdELEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLEdBQVEsR0FDMUMsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9