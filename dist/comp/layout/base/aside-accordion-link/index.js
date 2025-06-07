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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvYmFzZS9hc2lkZS1hY2NvcmRpb24tbGluay9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxLQUFLLEVBQVMsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxNQUFNLE1BQU0sd0NBQXdDLENBQUM7QUFVNUQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFrQjtJQUN6RixNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUMvQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztJQUUvQyxPQUFPLENBQ04sTUFBQyxJQUFJLElBQ0osU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdEcsSUFBSSxFQUFFLElBQUksYUFDVCxNQUFNLElBQUksQ0FDVixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsTUFBTSxFQUNoQixHQUFHLEVBQUUsTUFBTSxFQUNYLEdBQUcsRUFBQyxNQUFNLEVBQ1YsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULENBQ0YsRUFDRCxlQUFLLFNBQVMsRUFBQyxVQUFVLGFBQ3ZCLFFBQVEsRUFDUixLQUFLLElBQUksQ0FDVCxjQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixxRUFBcUUsRUFDckUsNkZBQTZGLENBQzdGLFlBQ0EsS0FBSyxHQUNELENBQ04sSUFDSSxJQUNBLENBQ1AsQ0FBQztBQUNILENBQUMifQ==