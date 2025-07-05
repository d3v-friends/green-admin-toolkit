import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
import { Button } from "../../../../../app/index.js";
const padding = "p-2 lg:pl-4 lg:pr-4";
function Body({ children, className = "", }) {
    return _jsx("div", { className: fnCss.sum("bg-(--bg-modal) shadow-2xl rounded-md", className), children: children });
}
function Header({ children, className = "", disableCloseButton = false, onChange = () => { }, }) {
    return (_jsxs("div", { className: fnCss.sum(className, padding, "flex border-bottom text-lg"), children: [children, !disableCloseButton && (_jsx("div", { className: "grow text-right", children: _jsx("button", { className: "ml-2 no-drag", onClick: () => onChange(false), children: _jsx(Image, { className: "filter-(--text-1-filter) w-[1rem] hover:filter-(--primary-filter)", src: ImgCross, alt: "close", width: 20, height: 20 }) }) }))] }));
}
function Content({ className = "", children }) {
    return _jsx("div", { className: fnCss.sum(className, padding, "min-h-[3rem]"), children: children });
}
function Ok({ children = "확인", onClick, }) {
    return (_jsx("div", { className: fnCss.sum("text-right", padding), children: _jsx(Button, { className: "w-20", onClick: onClick, children: children }) }));
}
function OkCancel({ ok = "확인", cancel = "취소", onClickOk, onClickCancel, }) {
    return (_jsx("div", { className: "flex justify-end", children: _jsxs("div", { className: fnCss.sum("grid grid-cols-2 gap-2 w-[15rem]", padding), children: [_jsx(Button, { type: "button", className: "mr-2", style: "text", onClick: onClickCancel, children: cancel }), _jsx(Button, { type: "button", onClick: onClickOk, children: ok })] }) }));
}
export default {
    Body,
    Header,
    Content,
    Ok,
    OkCancel,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvbW9kYWwvZWxlbWVudC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBUyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFNUIsTUFBTSxPQUFPLEdBQUcscUJBQXFCLENBQUM7QUFFdEMsU0FBUyxJQUFJLENBQUMsRUFDYixRQUFRLEVBQ1IsU0FBUyxHQUFHLEVBQUUsR0FJYjtJQUNELE9BQU8sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxTQUFTLENBQUMsWUFBRyxRQUFRLEdBQU8sQ0FBQztBQUN4RyxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsRUFDZixRQUFRLEVBQ1IsU0FBUyxHQUFHLEVBQUUsRUFDZCxrQkFBa0IsR0FBRyxLQUFLLEVBQzFCLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEdBTWxCO0lBQ0QsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsQ0FBQyxhQUN6RSxRQUFRLEVBQ1IsQ0FBQyxrQkFBa0IsSUFBSSxDQUN2QixjQUFLLFNBQVMsRUFBQyxpQkFBaUIsWUFDL0IsaUJBQ0MsU0FBUyxFQUFDLGNBQWMsRUFDeEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFDOUIsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFDLG1FQUFtRSxFQUM3RSxHQUFHLEVBQUUsUUFBUSxFQUNiLEdBQUcsRUFBQyxPQUFPLEVBQ1gsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULEdBQ00sR0FDSixDQUNOLElBQ0ksQ0FDTixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEVBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQXVEO0lBQ2hHLE9BQU8sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxZQUFHLFFBQVEsR0FBTyxDQUFDO0FBQ3hGLENBQUM7QUFFRCxTQUFTLEVBQUUsQ0FBQyxFQUNYLFFBQVEsR0FBRyxJQUFJLEVBQ2YsT0FBTyxHQUlOO0lBQ0QsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUMvQyxLQUFDLE1BQU0sSUFDTixTQUFTLEVBQUMsTUFBTSxFQUNoQixPQUFPLEVBQUUsT0FBTyxZQUNmLFFBQVEsR0FDRCxHQUNKLENBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxFQUNqQixFQUFFLEdBQUcsSUFBSSxFQUNULE1BQU0sR0FBRyxJQUFJLEVBQ2IsU0FBUyxFQUNULGFBQWEsR0FNWjtJQUNELE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBQyxrQkFBa0IsWUFDaEMsZUFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxPQUFPLENBQUMsYUFDckUsS0FBQyxNQUFNLElBQ04sSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUMsTUFBTSxFQUNoQixLQUFLLEVBQUMsTUFBTSxFQUNaLE9BQU8sRUFBRSxhQUFhLFlBQ3JCLE1BQU0sR0FDQyxFQUNULEtBQUMsTUFBTSxJQUNOLElBQUksRUFBQyxRQUFRLEVBQ2IsT0FBTyxFQUFFLFNBQVMsWUFDakIsRUFBRSxHQUNLLElBQ0osR0FDRCxDQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZTtJQUNkLElBQUk7SUFDSixNQUFNO0lBQ04sT0FBTztJQUNQLEVBQUU7SUFDRixRQUFRO0NBQ1IsQ0FBQyJ9