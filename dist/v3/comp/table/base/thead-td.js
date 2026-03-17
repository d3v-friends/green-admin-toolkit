"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouterTools } from "nextjs-tools";
import ImgCaretUp from "web-asset/svg/solid/fi-sr-caret-up.svg";
import ImgCaretDown from "web-asset/svg/solid/fi-sr-caret-down.svg";
import ImgCaretNone from "web-asset/svg/solid/fi-sr-minus-small.svg";
import Image from "next/image";
export default function ({ children, sortkey }) {
    if (!sortkey)
        return children;
    const params = useSearchParams();
    const router = useRouterTools();
    const [dir, onChangeDir] = useState(getDirection(params.get(sortkey) || "none"));
    const onClick = () => {
        const next = getNextDirection(dir);
        router.pushBySearchParams({
            [sortkey]: next,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjMvY29tcC90YWJsZS9iYXNlL3RoZWFkLXRkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRSxPQUFPLFlBQVksTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRSxPQUFPLFlBQVksTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRSxPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBT2xELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFrQjtJQUM1RCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU8sUUFBUSxDQUFDO0lBRTlCLE1BQU0sTUFBTSxHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sTUFBTSxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFakYsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztZQUN6QixDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQW1CLEVBQUU7UUFDL0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssS0FBSztnQkFDVCxPQUFPLFVBQVUsQ0FBQztZQUNuQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxZQUFZLENBQUM7WUFDckI7Z0JBQ0MsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQztJQUNGLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixrQkFDQyxPQUFPLEVBQUUsT0FBTyxFQUNoQixTQUFTLEVBQUMsK0JBQStCLGFBQ3hDLFFBQVEsRUFDVCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsY0FBYyxFQUN4QixHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNsQixHQUFHLEVBQUMsV0FBVyxFQUNmLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxJQUNNLENBQ1QsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxHQUFXO0lBQ2hDLFFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDM0IsS0FBSyxLQUFLO1lBQ1QsT0FBTyxLQUFLLENBQUM7UUFDZCxLQUFLLE1BQU07WUFDVixPQUFPLE1BQU0sQ0FBQztRQUNmO1lBQ0MsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztBQUNGLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQVc7SUFDcEMsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQUMzQixLQUFLLEtBQUs7WUFDVCxPQUFPLE1BQU0sQ0FBQztRQUNmLEtBQUssTUFBTTtZQUNWLE9BQU8sTUFBTSxDQUFDO1FBQ2Y7WUFDQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDRixDQUFDIn0=