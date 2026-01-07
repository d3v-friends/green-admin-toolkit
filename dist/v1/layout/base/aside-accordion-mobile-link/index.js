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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvbGF5b3V0L2Jhc2UvYXNpZGUtYWNjb3JkaW9uLW1vYmlsZS1saW5rL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFTLEtBQUssRUFBUyxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLE1BQU0sTUFBTSx3Q0FBd0MsQ0FBQztBQVc1RCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFrQjtJQUNsRyxNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUMvQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztJQUMvQyxNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUMzQixPQUFPLENBQ04sa0JBQ0MsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN0RyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxhQUNBLE1BQU0sSUFBSSxDQUNWLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEdBQUcsRUFBRSxNQUFNLEVBQ1gsR0FBRyxFQUFDLE1BQU0sRUFDVixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsQ0FDRixFQUNELGVBQUssU0FBUyxFQUFDLFVBQVUsYUFDdkIsUUFBUSxFQUNSLEtBQUssSUFBSSxDQUNULGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQ25CLHFFQUFxRSxFQUNyRSw2RkFBNkYsQ0FDN0YsWUFDQSxLQUFLLEdBQ0QsQ0FDTixJQUNJLElBQ0UsQ0FDVCxDQUFDO0FBQ0gsQ0FBQyJ9