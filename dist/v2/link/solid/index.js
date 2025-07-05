"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { ButtonSolid } from "../..";
export default function (props) {
    const router = useRouter();
    return (_jsx(ButtonSolid, Object.assign({}, props, { onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            router.push(props.href);
        }, onMiddleClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            window.open(props.href, "_blank");
        } })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjIvbGluay9zb2xpZC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUdiLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBTWxDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsS0FBc0I7SUFDOUMsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDM0IsT0FBTyxDQUNOLEtBQUMsV0FBVyxvQkFDUCxLQUFLLElBQ1QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDZCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFDRCxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuQyxDQUFDLElBQ0EsQ0FDRixDQUFDO0FBQ0gsQ0FBQyJ9