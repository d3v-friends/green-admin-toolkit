"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouterTools } from "nextjs-tools";
import ImgCaretUp from "web-asset/svg/solid/fi-sr-caret-up.svg";
import ImgCaretDown from "web-asset/svg/solid/fi-sr-caret-down.svg";
import ImgCaretNone from "web-asset/svg/solid/fi-sr-minus-small.svg";
import Image from "next/image";
export default function ({ children, sortkey, multiSortable }) {
    if (!sortkey)
        return children;
    const params = useSearchParams();
    const getDirection = () => {
        if (multiSortable) {
            return parseDirection(params.get(sortkey) || "none");
        }
        if (params.get("sortkey") !== sortkey)
            return "none";
        return parseDirection(params.get("direction") || "none");
    };
    const router = useRouterTools();
    const [dir, onChangeDir] = useState(getDirection());
    useEffect(() => {
        onChangeDir(getDirection());
    }, [params.toString()]);
    const onClick = () => {
        const next = getNextDirection(dir);
        if (multiSortable) {
            router.pushBySearchParams({
                [sortkey]: next,
            });
        }
        else {
            router.pushBySearchParams({
                sortkey: sortkey,
                direction: next,
            });
        }
        onChangeDir(next);
    };
    const getImage = (d) => {
        switch (d) {
            case "asc":
                return ImgCaretUp;
            case "desc":
                return ImgCaretDown;
            default:
                return ImgCaretNone;
        }
    };
    return (_jsxs("button", { onClick: onClick, className: "flex inline-flex items-center", children: [children, _jsx(Image, { className: "ml-2 no-drag", src: getImage(dir), alt: "direction", width: 15, height: 15 })] }));
}
function parseDirection(dir) {
    switch (dir.toLowerCase()) {
        case "asc":
            return "asc";
        case "desc":
            return "desc";
        default:
            return "none";
    }
}
function getNextDirection(dir) {
    switch (dir.toLowerCase()) {
        case "asc":
            return "desc";
        case "desc":
            return "none";
        default:
            return "asc";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjMvY29tcC90YWJsZS9iYXNlL3RoZWFkLXRkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDNUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxZQUFZLE1BQU0sMENBQTBDLENBQUM7QUFDcEUsT0FBTyxZQUFZLE1BQU0sMkNBQTJDLENBQUM7QUFDckUsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQVFsRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWtCO0lBQzNFLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxRQUFRLENBQUM7SUFDOUIsTUFBTSxNQUFNLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDakMsTUFBTSxZQUFZLEdBQUcsR0FBVyxFQUFFO1FBQ2pDLElBQUksYUFBYSxFQUFFLENBQUM7WUFDbkIsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLE9BQU87WUFBRSxPQUFPLE1BQU0sQ0FBQztRQUVyRCxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQztJQUNGLE1BQU0sTUFBTSxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFFcEQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFeEIsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksYUFBYSxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2dCQUN6QixDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFDSixDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztnQkFDekIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFNBQVMsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQVMsRUFBbUIsRUFBRTtRQUMvQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ1gsS0FBSyxLQUFLO2dCQUNULE9BQU8sVUFBVSxDQUFDO1lBQ25CLEtBQUssTUFBTTtnQkFDVixPQUFPLFlBQVksQ0FBQztZQUNyQjtnQkFDQyxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGtCQUNDLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFNBQVMsRUFBQywrQkFBK0IsYUFDeEMsUUFBUSxFQUNULEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxjQUFjLEVBQ3hCLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQ2xCLEdBQUcsRUFBQyxXQUFXLEVBQ2YsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULElBQ00sQ0FDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLEdBQVc7SUFDbEMsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQUMzQixLQUFLLEtBQUs7WUFDVCxPQUFPLEtBQUssQ0FBQztRQUNkLEtBQUssTUFBTTtZQUNWLE9BQU8sTUFBTSxDQUFDO1FBQ2Y7WUFDQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0FBQ0YsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsR0FBVztJQUNwQyxRQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBQzNCLEtBQUssS0FBSztZQUNULE9BQU8sTUFBTSxDQUFDO1FBQ2YsS0FBSyxNQUFNO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDZjtZQUNDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztBQUNGLENBQUMifQ==