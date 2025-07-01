"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { fnCss } from "nextjs-tools";
export default function ({ children, href, className = "" }) {
    const router = useRouter();
    const onClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        switch (e.button) {
            case 0:
                router.push(href);
                return;
            case 1:
                window.open(href, "_blank");
                return;
        }
    };
    return (_jsx("tr", { className: fnCss.sum("h-14", className), onClick: onClick, onMouseDown: onClick, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3YxL3dpZGdldC90YWJsZS9saW5rL3Jvdy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUUxQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBUW5DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQWtCO0lBQ3pFLE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQzNCLE1BQU0sT0FBTyxHQUFpRCxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ25FLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEIsS0FBSyxDQUFDO2dCQUVMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE9BQU87WUFDUixLQUFLLENBQUM7Z0JBRUwsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzVCLE9BQU87UUFDVCxDQUFDO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxDQUNOLGFBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUN2QyxPQUFPLEVBQUUsT0FBTyxFQUNoQixXQUFXLEVBQUUsT0FBTyxZQUNuQixRQUFRLEdBQ0wsQ0FDTCxDQUFDO0FBQ0gsQ0FBQyJ9