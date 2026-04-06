"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { ColorBg, ColorBorder, ColorFilterAlt, ColorTextAlt } from "../../..";
import Image from "next/image";
export default function ({ children, onClick = () => { }, onMiddleClick = () => { }, className = "w-full", color = "primary", imgSrc, ref, type = "button", disabled = false, }) {
    const onMouseUp = (e) => {
        switch (e.button) {
            case 0:
                onClick(e);
                return;
            case 1:
                onMiddleClick(e);
                return;
        }
    };
    return (_jsx("button", { disabled: disabled, type: type, ref: ref, className: concat(className, ColorBg[color], ColorTextAlt[color], ColorBorder[color], "min-h-[2.5rem] pl-2 pr-2", "rounded-md border-[1px] outline-none overflow-hidden", "transition-all duration-100 hover:brightness-130", disabled ? "cursor-not-allowed" : "cursor-pointer"), onMouseUp: onMouseUp, children: _jsxs("div", { className: "flex items-center justify-center", children: [imgSrc && (_jsx(Image, { className: concat(ColorFilterAlt[color], "mr-2 w-[0.8rem]"), src: imgSrc, alt: "icon", width: 20, height: 20 })), _jsx("span", { className: concat(imgSrc ? "pr-4" : ""), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxNQUFNLEVBQWlCLE1BQU0sY0FBYyxDQUFDO0FBQ3BELE9BQU8sRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBYyxZQUFZLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDeEYsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBYy9CLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsUUFBUSxFQUNSLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ2xCLGFBQWEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ3hCLFNBQVMsR0FBRyxRQUFRLEVBQ3BCLEtBQUssR0FBRyxTQUFTLEVBQ2pCLE1BQU0sRUFDTixHQUFHLEVBQ0gsSUFBSSxHQUFHLFFBQVEsRUFDZixRQUFRLEdBQUcsS0FBSyxHQUNZO0lBQzVCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBc0MsRUFBRSxFQUFFO1FBQzVELFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQztnQkFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsT0FBTztZQUNSLEtBQUssQ0FBQztnQkFDTCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87UUFDVCxDQUFDO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGlCQUNDLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLElBQUksRUFBRSxJQUFJLEVBQ1YsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsTUFBTSxDQUNoQixTQUFTLEVBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUNkLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDbkIsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUNsQiwwQkFBMEIsRUFDMUIsc0RBQXNELEVBQ3RELGtEQUFrRCxFQUNsRCxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDbEQsRUFDRCxTQUFTLEVBQUUsU0FBUyxZQUNwQixlQUFLLFNBQVMsRUFBQyxrQ0FBa0MsYUFDL0MsTUFBTSxJQUFJLENBQ1YsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsRUFDM0QsR0FBRyxFQUFFLE1BQU0sRUFDWCxHQUFHLEVBQUMsTUFBTSxFQUNWLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxDQUNGLEVBQ0QsZUFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBRyxRQUFRLEdBQVEsSUFDM0QsR0FDRSxDQUNULENBQUM7QUFDSCxDQUFDIn0=