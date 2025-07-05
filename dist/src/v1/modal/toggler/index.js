"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import Base from "../base";
export default function ({ open, onChange, children, disableEscapeKey, onClickBackdrop, backdropClassName, }) {
    const onEscPress = useCallback((e) => {
        if (e.key == "Escape") {
            onChange(false);
        }
    }, [onChange]);
    useEffect(() => {
        if (disableEscapeKey) {
            return;
        }
        if (open) {
            window.addEventListener("keydown", onEscPress);
        }
        else {
            window.removeEventListener("keydown", onEscPress);
        }
        return () => {
            window.removeEventListener("keydown", onEscPress);
        };
    }, [onEscPress, open, disableEscapeKey]);
    if (!open)
        return null;
    if (!children)
        return null;
    return (_jsx(Base, { onClick: onClickBackdrop, backdropClassName: backdropClassName, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvbW9kYWwvdG9nZ2xlci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBK0IsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUVsRixPQUFPLElBQUksTUFBTSxTQUFTLENBQUM7QUFZM0IsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGlCQUFpQixHQUNBO0lBQ2pCLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FDN0IsQ0FBQyxDQUFnQixFQUFFLEVBQUU7UUFDcEIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDO0lBQ0YsQ0FBQyxFQUNELENBQUMsUUFBUSxDQUFDLENBQ1YsQ0FBQztJQUVGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDdEIsT0FBTztRQUNSLENBQUM7UUFFRCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNoRCxDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELE9BQU8sR0FBRyxFQUFFO1lBQ1gsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUV6QyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXZCLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFM0IsT0FBTyxDQUNOLEtBQUMsSUFBSSxJQUNKLE9BQU8sRUFBRSxlQUFlLEVBQ3hCLGlCQUFpQixFQUFFLGlCQUFpQixZQUNuQyxRQUFRLEdBQ0gsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9