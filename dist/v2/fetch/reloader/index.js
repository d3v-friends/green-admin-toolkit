"use client";
import { useEffect, useState } from "react";
export default function ({ data: initData, fetch, delay = 10, children }) {
    const [data, setData] = useState(Object.assign(Object.assign({}, initData), { syncAt: new Date() }));
    useEffect(() => {
        onReload(new Date());
    }, [fetch]);
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            switch (delay) {
                case 60:
                    if (now.getSeconds() !== 0)
                        return;
                    break;
                default:
                    if (now.getSeconds() % delay !== 0)
                        return;
            }
            onReload(now);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const onReload = (syncAt) => {
        fetch()
            .then((res) => setData(Object.assign(Object.assign({}, res.data), { syncAt })))
            .catch((err) => console.error(err));
    };
    return children(data);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvZmV0Y2gvcmVsb2FkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBZ0JyRCxNQUFNLENBQUMsT0FBTyxXQUFvQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUEyQjtJQUN4RyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsaUNBQW9CLFFBQVEsS0FBRSxNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBRSxDQUFDO0lBRW5GLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3ZCLFFBQVEsS0FBSyxFQUFFLENBQUM7Z0JBQ2YsS0FBSyxFQUFFO29CQUNOLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7d0JBQUUsT0FBTztvQkFDbkMsTUFBTTtnQkFDUDtvQkFDQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLEtBQUssQ0FBQzt3QkFBRSxPQUFPO1lBQzdDLENBQUM7WUFDRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQVksRUFBRSxFQUFFO1FBQ2pDLEtBQUssRUFBRTthQUNMLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxpQ0FBSyxHQUFHLENBQUMsSUFBSSxLQUFFLE1BQU0sSUFBRSxDQUFDO2FBQzdDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztJQUVGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLENBQUMifQ==