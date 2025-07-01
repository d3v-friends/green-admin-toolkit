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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvd2lkZ2V0L2xvYWRpbmctYmFyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLE9BQU8sTUFBTSxZQUFZLENBQUM7QUFRakMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBa0I7SUFDekUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQUUsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxFQUFFLFFBQVEsQ0FBQyxZQUNsRixjQUNDLFNBQVMsRUFBQyxtREFBbUQsRUFDN0QsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsR0FBUSxHQUMxQyxDQUNOLENBQUM7QUFDSCxDQUFDIn0=