"use client";
import { useEffect, useState } from "react";
export default function ({ data: initData, fetch, query, variables, delay = 10, children, }) {
    const [data, setData] = useState(Object.assign(Object.assign({}, initData), { syncAt: new Date() }));
    useEffect(() => {
        onReload(new Date());
    }, [variables]);
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
        fetch(query, variables)
            .then((res) => setData(Object.assign(Object.assign({}, res.data), { syncAt })))
            .catch((err) => console.error(err));
    };
    return children(data);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvZmV0Y2gvcmVsb2FkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBa0JyRCxNQUFNLENBQUMsT0FBTyxXQUFnQyxFQUM3QyxJQUFJLEVBQUUsUUFBUSxFQUNkLEtBQUssRUFDTCxLQUFLLEVBQ0wsU0FBUyxFQUNULEtBQUssR0FBRyxFQUFFLEVBQ1YsUUFBUSxHQUM4QjtJQUN0QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsaUNBQW9CLFFBQVEsS0FBRSxNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBRSxDQUFDO0lBRW5GLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFaEIsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN2QixRQUFRLEtBQUssRUFBRSxDQUFDO2dCQUNmLEtBQUssRUFBRTtvQkFDTixJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO3dCQUFFLE9BQU87b0JBQ25DLE1BQU07Z0JBQ1A7b0JBQ0MsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsS0FBSyxLQUFLLENBQUM7d0JBQUUsT0FBTztZQUM3QyxDQUFDO1lBQ0QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFZLEVBQUUsRUFBRTtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQzthQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8saUNBQUssR0FBRyxDQUFDLElBQUksS0FBRSxNQUFNLElBQUUsQ0FBQzthQUM3QyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUM7SUFFRixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixDQUFDIn0=