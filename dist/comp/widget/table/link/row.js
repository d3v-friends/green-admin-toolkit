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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXAvd2lkZ2V0L3RhYmxlL2xpbmsvcm93LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFRbkMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBa0I7SUFDekUsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDM0IsTUFBTSxPQUFPLEdBQWlELENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUM7Z0JBRUwsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsT0FBTztZQUNSLEtBQUssQ0FBQztnQkFFTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUIsT0FBTztRQUNULENBQUM7SUFDRixDQUFDLENBQUM7SUFDRixPQUFPLENBQ04sYUFDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFdBQVcsRUFBRSxPQUFPLFlBQ25CLFFBQVEsR0FDTCxDQUNMLENBQUM7QUFDSCxDQUFDIn0=