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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVhZC10ZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hFLE9BQU8sWUFBWSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sWUFBWSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JFLE9BQU8sS0FBd0IsTUFBTSxZQUFZLENBQUM7QUFRbEQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFrQjtJQUMzRSxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU8sUUFBUSxDQUFDO0lBQzlCLE1BQU0sTUFBTSxHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sWUFBWSxHQUFHLEdBQVcsRUFBRTtRQUNqQyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ25CLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxPQUFPO1lBQUUsT0FBTyxNQUFNLENBQUM7UUFFckQsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUM7SUFDRixNQUFNLE1BQU0sR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUNoQyxNQUFNLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBRXBELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXhCLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNwQixNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztnQkFDekIsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1FBQ0osQ0FBQzthQUFNLENBQUM7WUFDUCxNQUFNLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3pCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixTQUFTLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQW1CLEVBQUU7UUFDL0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssS0FBSztnQkFDVCxPQUFPLFVBQVUsQ0FBQztZQUNuQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxZQUFZLENBQUM7WUFDckI7Z0JBQ0MsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQztJQUNGLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixrQkFDQyxPQUFPLEVBQUUsT0FBTyxFQUNoQixTQUFTLEVBQUMsK0JBQStCLGFBQ3hDLFFBQVEsRUFDVCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsY0FBYyxFQUN4QixHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNsQixHQUFHLEVBQUMsV0FBVyxFQUNmLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxJQUNNLENBQ1QsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFXO0lBQ2xDLFFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDM0IsS0FBSyxLQUFLO1lBQ1QsT0FBTyxLQUFLLENBQUM7UUFDZCxLQUFLLE1BQU07WUFDVixPQUFPLE1BQU0sQ0FBQztRQUNmO1lBQ0MsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztBQUNGLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQVc7SUFDcEMsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQUMzQixLQUFLLEtBQUs7WUFDVCxPQUFPLE1BQU0sQ0FBQztRQUNmLEtBQUssTUFBTTtZQUNWLE9BQU8sTUFBTSxDQUFDO1FBQ2Y7WUFDQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDRixDQUFDIn0=