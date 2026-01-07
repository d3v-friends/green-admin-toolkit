"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function ({ children, onRightClick, onCancel = () => { } }) {
    const [start, setStart] = useState(0);
    useEffect(() => {
        const onTouchmove = () => {
            onCancel();
        };
        window.addEventListener("touchmove", onTouchmove);
        return () => {
            window.removeEventListener("touchmove", onTouchmove);
        };
    }, []);
    return (_jsx("div", { onTouchStart: (e) => {
            setStart(Date.now());
        }, onTouchEnd: (e) => {
            const duration = Date.now() - start;
            if (!(2000 < duration && duration < 5000))
                return;
            onRightClick(e);
        }, onTouchMove: (e) => {
            setStart(0);
            onCancel();
        }, style: {
            userSelect: "none",
            WebkitUserSelect: "none",
            WebkitTouchCallout: "none",
        }, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvdG91Y2gvcmlnaHQtY2xpY2svaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQStCLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFTL0UsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBa0I7SUFDdEYsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEQsT0FBTyxHQUFHLEVBQUU7WUFDWCxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTixjQUNDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQ0QsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNsRCxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUNELFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDO1FBQ1osQ0FBQyxFQUNELEtBQUssRUFBRTtZQUNOLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGdCQUFnQixFQUFFLE1BQU07WUFDeEIsa0JBQWtCLEVBQUUsTUFBTTtTQUMxQixZQUNBLFFBQVEsR0FDSixDQUNOLENBQUM7QUFDSCxDQUFDIn0=