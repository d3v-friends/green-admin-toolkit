"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ImgDot from "web-asset/svg/regular/fi-rr-bullet.svg";
export default function ({ href, prefix, imgSrc = ImgDot, children, alert }) {
    const pathname = usePathname();
    let active = pathname.includes(prefix || href);
    return (_jsxs(Link, { className: fnCss.sum("flex items-center h-[2.5rem] pl-[2rem]", "aside-item", active ? "activate" : ""), href: href, children: [imgSrc && (_jsx(Image, { className: "mr-1", src: imgSrc, alt: "icon", width: 20, height: 20 })), _jsxs("div", { className: "relative", children: [children, alert && (_jsx("div", { className: fnCss.sum("absolute right-[-1rem] top-[-0.5rem] w-[1rem] h-[1rem] rounded-full", "bg-(--danger) text-[0.6rem] text-(--danger-text) font-bold flex items-center justify-center"), children: alert }))] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdjEvbGF5b3V0L2Jhc2UvYXNpZGUtYWNjb3JkaW9uLWxpbmsvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsS0FBSyxFQUFTLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sTUFBTSxNQUFNLHdDQUF3QyxDQUFDO0FBVTVELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBRyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBa0I7SUFDekYsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDL0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUM7SUFFL0MsT0FBTyxDQUNOLE1BQUMsSUFBSSxJQUNKLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3RHLElBQUksRUFBRSxJQUFJLGFBQ1QsTUFBTSxJQUFJLENBQ1YsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFDLE1BQU0sRUFDaEIsR0FBRyxFQUFFLE1BQU0sRUFDWCxHQUFHLEVBQUMsTUFBTSxFQUNWLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxDQUNGLEVBQ0QsZUFBSyxTQUFTLEVBQUMsVUFBVSxhQUN2QixRQUFRLEVBQ1IsS0FBSyxJQUFJLENBQ1QsY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FDbkIscUVBQXFFLEVBQ3JFLDZGQUE2RixDQUM3RixZQUNBLEtBQUssR0FDRCxDQUNOLElBQ0ksSUFDQSxDQUNQLENBQUM7QUFDSCxDQUFDIn0=