"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { concat } from "nextjs-tools";
const alignCss = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
export default function ({ align = "center", children, image, copyable, ellipsis, className = "", monospace, }) {
    const onCopy = (e) => {
        if (!copyable)
            return;
        e.stopPropagation();
        e.preventDefault();
        switch (typeof children) {
            case "string":
                window.navigator.clipboard.writeText(children).catch((err) => console.error(err));
                break;
            default:
        }
    };
    let value = children;
    if (ellipsis && typeof children === "string") {
        value = children.slice(0, 10) + "...";
    }
    return (_jsxs("div", { className: concat("flex items-center", alignCss[align], copyable ? "hover:underline hover:cursor-pointer" : ""), onClick: onCopy, children: [image && (_jsx(Image, { className: "mr-2 filter-(--primary-filter)", src: image, alt: "icon", width: 20, height: 20 })), _jsx("div", { suppressHydrationWarning: true, className: concat(className, monospace ? "font-d2" : ""), children: value })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvdmFsdWUvYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sS0FBd0IsTUFBTSxZQUFZLENBQUM7QUFDbEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQWNwQyxNQUFNLFFBQVEsR0FBMEI7SUFDdkMsSUFBSSxFQUFFLGVBQWU7SUFDckIsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QixLQUFLLEVBQUUsYUFBYTtDQUNwQixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixLQUFLLEdBQUcsUUFBUSxFQUNoQixRQUFRLEVBQ1IsS0FBSyxFQUNMLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxHQUFHLEVBQUUsRUFDZCxTQUFTLEdBQ1E7SUFDakIsTUFBTSxNQUFNLEdBQXNDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDdkQsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3RCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsUUFBUSxPQUFPLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLEtBQUssUUFBUTtnQkFDWixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xGLE1BQU07WUFDUCxRQUFRO1FBQ1QsQ0FBQztJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNyQixJQUFJLFFBQVEsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPLENBQ04sZUFDQyxTQUFTLEVBQUUsTUFBTSxDQUNoQixtQkFBbUIsRUFDbkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUNmLFFBQVEsQ0FBQyxDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDdEQsRUFDRCxPQUFPLEVBQUUsTUFBTSxhQUNkLEtBQUssSUFBSSxDQUNULEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxnQ0FBZ0MsRUFDMUMsR0FBRyxFQUFFLEtBQUssRUFDVixHQUFHLEVBQUMsTUFBTSxFQUNWLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxDQUNGLEVBQ0QsY0FDQyx3QkFBd0IsUUFDeEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUN2RCxLQUFLLEdBQ0QsSUFDRCxDQUNOLENBQUM7QUFDSCxDQUFDIn0=