"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import "../../../../asset/style/index.scss";
import { fnCss } from "nextjs-tools";
export default async function ({ lang = "ko", children }) {
    return (_jsx("html", { lang: lang, children: _jsx("body", { className: fnCss.sum("bg-(--color-background-body)", "text-[14px] lg:text-[18px] text-(--color-text) font-roboto"), children: _jsx("main", { className: "max-w-[1440px] pl-5 pr-5 m-auto min-h-screen", children: children }) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvYm9keS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQU9uQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxFQUFrQjtJQUN0RSxPQUFPLENBQ04sZUFBTSxJQUFJLEVBQUUsSUFBSSxZQUNmLGVBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLDhCQUE4QixFQUM5Qiw0REFBNEQsQ0FDNUQsWUFDRCxlQUFNLFNBQVMsRUFBQyw4Q0FBOEMsWUFBRSxRQUFRLEdBQVEsR0FDMUUsR0FDRCxDQUNQLENBQUM7QUFDSCxDQUFDIn0=