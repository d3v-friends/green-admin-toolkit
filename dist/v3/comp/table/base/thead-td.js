"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouterTools } from "nextjs-tools";
import ImgCaretUp from "web-asset/svg/solid/fi-sr-caret-up.svg";
import ImgCaretDown from "web-asset/svg/solid/fi-sr-caret-down.svg";
import ImgCaretNone from "web-asset/svg/solid/fi-sr-minus-small.svg";
import Image from "next/image";
export default function ({ children, sortkey, multiSortable }) {
    if (!sortkey)
        return children;
    const pathname = usePathname();
    const params = useSearchParams();
    const router = useRouterTools();
    const [dir, onChangeDir] = useState(getDirection(params.get(sortkey) || "none"));
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
function getDirection(dir) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjMvY29tcC90YWJsZS9iYXNlL3RoZWFkLXRkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqRCxPQUFPLEVBQUMsV0FBVyxFQUFFLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxZQUFZLE1BQU0sMENBQTBDLENBQUM7QUFDcEUsT0FBTyxZQUFZLE1BQU0sMkNBQTJDLENBQUM7QUFDckUsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQVFsRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWtCO0lBQzNFLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxRQUFRLENBQUM7SUFFOUIsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDL0IsTUFBTSxNQUFNLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDakMsTUFBTSxNQUFNLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFDaEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVqRixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDcEIsTUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNuQixNQUFNLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3pCLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztRQUNKLENBQUM7YUFBTSxDQUFDO1lBQ1AsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2dCQUN6QixPQUFPLEVBQUUsT0FBTztnQkFDaEIsU0FBUyxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFtQixFQUFFO1FBQy9DLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDWCxLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxVQUFVLENBQUM7WUFDbkIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDO1lBQ3JCO2dCQUNDLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7SUFDRixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sa0JBQ0MsT0FBTyxFQUFFLE9BQU8sRUFDaEIsU0FBUyxFQUFDLCtCQUErQixhQUN4QyxRQUFRLEVBQ1QsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFDLGNBQWMsRUFDeEIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDbEIsR0FBRyxFQUFDLFdBQVcsRUFDZixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsSUFDTSxDQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsR0FBVztJQUNoQyxRQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBQzNCLEtBQUssS0FBSztZQUNULE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxNQUFNO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDZjtZQUNDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7QUFDRixDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFXO0lBQ3BDLFFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDM0IsS0FBSyxLQUFLO1lBQ1QsT0FBTyxNQUFNLENBQUM7UUFDZixLQUFLLE1BQU07WUFDVixPQUFPLE1BQU0sQ0FBQztRQUNmO1lBQ0MsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0FBQ0YsQ0FBQyJ9