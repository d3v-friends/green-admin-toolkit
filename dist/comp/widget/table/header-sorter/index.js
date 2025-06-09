"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ children, asc = "ASC", desc = "DESC", initValue = "ASC", onChange = () => { }, }) {
    const [value, setValue] = useState(initValue);
    return (_jsxs("div", { className: "inline-flex items-center justify-center cursor-pointer", onClick: () => {
            setValue(value === asc ? desc : asc);
            onChange(value === asc ? desc : asc);
        }, children: [_jsx(Image, { src: value === asc ? ImgAsc : ImgDesc, alt: "direction", width: 16, height: 16, className: fnCss.sum("no-drag mr-1 w-[1rem]", value === asc ? "filter-(--danger-filter)" : "filter-(--success-filter)") }), _jsx("div", { className: fnCss.sum(value === asc ? "text-(--text-2)" : "text-(--text-5)"), children: children })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvdGFibGUvaGVhZGVyLXNvcnRlci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxNQUFNLE1BQU0sMENBQTBDLENBQUM7QUFDOUQsT0FBTyxPQUFPLE1BQU0sNENBQTRDLENBQUM7QUFDakUsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sRUFBUyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFVM0MsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixRQUFRLEVBQ1IsR0FBRyxHQUFHLEtBQUssRUFDWCxJQUFJLEdBQUcsTUFBTSxFQUNiLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEdBQ0Y7SUFDakIsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsT0FBTyxDQUNOLGVBQ0MsU0FBUyxFQUFDLHdEQUF3RCxFQUNsRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ2IsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxhQUNELEtBQUMsS0FBSyxJQUNMLEdBQUcsRUFBRSxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFDckMsR0FBRyxFQUFDLFdBQVcsRUFDZixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLHVCQUF1QixFQUN2QixLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQ3hFLEdBQ0EsRUFDRixjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFHLFFBQVEsR0FBTyxJQUM3RixDQUNOLENBQUM7QUFDSCxDQUFDIn0=