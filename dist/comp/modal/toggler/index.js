"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import Base from "../base/index.js";
export default function ({ open, onChange, children, disableEscapeKey, onClickBackdrop }) {
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
    return _jsx(Base, { onClick: onClickBackdrop, children: children });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9tb2RhbC90b2dnbGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUErQixXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRWxGLE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQVczQixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFrQjtJQUN0RyxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQzdCLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsQ0FBQztJQUNGLENBQUMsRUFDRCxDQUFDLFFBQVEsQ0FBQyxDQUNWLENBQUM7SUFFRixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3RCLE9BQU87UUFDUixDQUFDO1FBRUQsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNWLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQUFNLENBQUM7WUFDUCxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCxPQUFPLEdBQUcsRUFBRTtZQUNYLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFekMsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUV2QixJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNCLE9BQU8sS0FBQyxJQUFJLElBQUMsT0FBTyxFQUFFLGVBQWUsWUFBRyxRQUFRLEdBQVEsQ0FBQztBQUMxRCxDQUFDIn0=