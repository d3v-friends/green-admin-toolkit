"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import Base from "../base/index.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9tb2RhbC90b2dnbGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUErQixXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRWxGLE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQVkzQixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsaUJBQWlCLEdBQ0E7SUFDakIsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUM3QixDQUFDLENBQWdCLEVBQUUsRUFBRTtRQUNwQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUM7SUFDRixDQUFDLEVBQ0QsQ0FBQyxRQUFRLENBQUMsQ0FDVixDQUFDO0lBRUYsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUN0QixPQUFPO1FBQ1IsQ0FBQztRQUVELElBQUksSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7YUFBTSxDQUFDO1lBQ1AsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsT0FBTyxHQUFHLEVBQUU7WUFDWCxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBRXpDLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFdkIsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUUzQixPQUFPLENBQ04sS0FBQyxJQUFJLElBQ0osT0FBTyxFQUFFLGVBQWUsRUFDeEIsaUJBQWlCLEVBQUUsaUJBQWlCLFlBQ25DLFFBQVEsR0FDSCxDQUNQLENBQUM7QUFDSCxDQUFDIn0=