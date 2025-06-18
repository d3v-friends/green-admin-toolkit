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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90b3VjaC9yaWdodC1jbGljay9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBK0IsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQVMvRSxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFrQjtJQUN0RixNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0QyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDO1FBQ0YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsRCxPQUFPLEdBQUcsRUFBRTtZQUNYLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNOLGNBQ0MsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFDRCxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNqQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQ2xELFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQ0QsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUM7UUFDWixDQUFDLEVBQ0QsS0FBSyxFQUFFO1lBQ04sVUFBVSxFQUFFLE1BQU07WUFDbEIsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixrQkFBa0IsRUFBRSxNQUFNO1NBQzFCLFlBQ0EsUUFBUSxHQUNKLENBQ04sQ0FBQztBQUNILENBQUMifQ==