"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ImgDot from "web-asset/svg/regular/fi-rr-bullet.svg";
export default function ({ href, onClose, prefix, imgSrc = ImgDot, children, alert }) {
    const pathname = usePathname();
    let active = pathname.includes(prefix || href);
    const router = useRouter();
    return (_jsxs("button", { type: "button", className: fnCss.sum("flex items-center h-[2.5rem] pl-[2rem]", "aside-item", active ? "activate" : ""), onClick: () => {
            router.push(href);
            onClose(false);
        }, children: [imgSrc && (_jsx(Image, { className: "mr-1", src: imgSrc, alt: "icon", width: 20, height: 20 })), _jsxs("div", { className: "relative", children: [children, alert && (_jsx("div", { className: fnCss.sum("absolute right-[-1rem] top-[-0.5rem] w-[1rem] h-[1rem] rounded-full", "bg-(--danger) text-[0.6rem] text-(--danger-text) font-bold flex items-center justify-center"), children: alert }))] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBUyxLQUFLLEVBQVMsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxNQUFNLE1BQU0sd0NBQXdDLENBQUM7QUFXNUQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBRyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBa0I7SUFDbEcsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDL0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUM7SUFDL0MsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDM0IsT0FBTyxDQUNOLGtCQUNDLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdEcsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUMsYUFDQSxNQUFNLElBQUksQ0FDVixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsTUFBTSxFQUNoQixHQUFHLEVBQUUsTUFBTSxFQUNYLEdBQUcsRUFBQyxNQUFNLEVBQ1YsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULENBQ0YsRUFDRCxlQUFLLFNBQVMsRUFBQyxVQUFVLGFBQ3ZCLFFBQVEsRUFDUixLQUFLLElBQUksQ0FDVCxjQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixxRUFBcUUsRUFDckUsNkZBQTZGLENBQzdGLFlBQ0EsS0FBSyxHQUNELENBQ04sSUFDSSxJQUNFLENBQ1QsQ0FBQztBQUNILENBQUMifQ==