import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
import { Button } from "../../../index.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9tb2RhbC9lbGVtZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFTLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxRQUFRLE1BQU0sdUNBQXVDLENBQUM7QUFDN0QsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUVsQyxNQUFNLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQztBQUV0QyxTQUFTLElBQUksQ0FBQyxFQUNiLFFBQVEsRUFDUixTQUFTLEdBQUcsRUFBRSxHQUliO0lBQ0QsT0FBTyxjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLFNBQVMsQ0FBQyxZQUFHLFFBQVEsR0FBTyxDQUFDO0FBQ3hHLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxFQUNmLFFBQVEsRUFDUixTQUFTLEdBQUcsRUFBRSxFQUNkLGtCQUFrQixHQUFHLEtBQUssRUFDMUIsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FNbEI7SUFDRCxPQUFPLENBQ04sZUFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixDQUFDLGFBQ3pFLFFBQVEsRUFDUixDQUFDLGtCQUFrQixJQUFJLENBQ3ZCLGNBQUssU0FBUyxFQUFDLGlCQUFpQixZQUMvQixpQkFDQyxTQUFTLEVBQUMsY0FBYyxFQUN4QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUM5QixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsbUVBQW1FLEVBQzdFLEdBQUcsRUFBRSxRQUFRLEVBQ2IsR0FBRyxFQUFDLE9BQU8sRUFDWCxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsR0FDTSxHQUNKLENBQ04sSUFDSSxDQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsRUFBQyxTQUFTLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBdUQ7SUFDaEcsT0FBTyxjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLFlBQUcsUUFBUSxHQUFPLENBQUM7QUFDeEYsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDLEVBQ1gsUUFBUSxHQUFHLElBQUksRUFDZixPQUFPLEdBSU47SUFDRCxPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQy9DLEtBQUMsTUFBTSxJQUNOLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLE9BQU8sRUFBRSxPQUFPLFlBQ2YsUUFBUSxHQUNELEdBQ0osQ0FDTixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEVBQ2pCLEVBQUUsR0FBRyxJQUFJLEVBQ1QsTUFBTSxHQUFHLElBQUksRUFDYixTQUFTLEVBQ1QsYUFBYSxHQU1aO0lBQ0QsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFDLGtCQUFrQixZQUNoQyxlQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLE9BQU8sQ0FBQyxhQUNyRSxLQUFDLE1BQU0sSUFDTixJQUFJLEVBQUMsUUFBUSxFQUNiLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEtBQUssRUFBQyxNQUFNLEVBQ1osT0FBTyxFQUFFLGFBQWEsWUFDckIsTUFBTSxHQUNDLEVBQ1QsS0FBQyxNQUFNLElBQ04sSUFBSSxFQUFDLFFBQVEsRUFDYixPQUFPLEVBQUUsU0FBUyxZQUNqQixFQUFFLEdBQ0ssSUFDSixHQUNELENBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlO0lBQ2QsSUFBSTtJQUNKLE1BQU07SUFDTixPQUFPO0lBQ1AsRUFBRTtJQUNGLFFBQVE7Q0FDUixDQUFDIn0=