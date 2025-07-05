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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjIvbGluay90ZXh0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFPakMsTUFBTSxDQUFDLE9BQU8sV0FBVyxLQUFzQjtJQUM5QyxNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUMzQixPQUFPLENBQ04sS0FBQyxVQUFVLG9CQUNOLEtBQUssSUFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNkLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUNELGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsSUFDQSxDQUNGLENBQUM7QUFDSCxDQUFDIn0=