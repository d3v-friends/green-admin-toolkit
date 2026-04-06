"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { ButtonText } from "../..";
export default function (props) {
    const router = useRouter();
    return (_jsx(ButtonText, Object.assign({}, props, { onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            router.push(props.href);
        }, onMiddleClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            window.open(props.href, "_blank");
        } })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBT2pDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsS0FBc0I7SUFDOUMsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDM0IsT0FBTyxDQUNOLEtBQUMsVUFBVSxvQkFDTixLQUFLLElBQ1QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDZCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFDRCxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuQyxDQUFDLElBQ0EsQ0FDRixDQUFDO0FBQ0gsQ0FBQyJ9