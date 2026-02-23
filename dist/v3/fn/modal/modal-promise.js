"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
export const ModalEscaped = "MODAL_ESCAPED";
export const ModalCanceled = "MODAL_CANCELLED";
export default function (children, opts = {}) {
    return new Promise((resolve, reject) => {
        const cont = document.createElement("dialog");
        cont.className = "green";
        const escapeHandler = (e) => {
            if (e.key !== "Escape")
                return;
            unmount();
            reject(new Error(ModalEscaped));
        };
        const root = createRoot(cont);
        const unmount = () => {
            if (opts.escape)
                document.removeEventListener("keyup", escapeHandler);
            root.unmount();
            cont.remove();
        };
        cont.onmouseup = (e) => {
            if (e.button !== 0)
                return;
            if (opts.backdrop) {
                unmount();
                reject(new Error(ModalEscaped));
            }
        };
        if (opts.escape) {
            document.addEventListener("keyup", escapeHandler);
        }
        document.body.appendChild(cont);
        root.render(_jsx("div", { onMouseUp: (e) => {
                e.stopPropagation();
            }, children: children((value) => {
                unmount();
                resolve(value);
            }) }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92My9mbi9tb2RhbC9tb2RhbC1wcm9taXNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBVTVDLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxlQUFlLENBQUM7QUFDNUMsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDO0FBRS9DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsUUFBOEIsRUFBRSxPQUFxQyxFQUFFO0lBQy9GLE9BQU8sSUFBSSxPQUFPLENBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDL0MsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUV6QixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUTtnQkFBRSxPQUFPO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUFFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDO1FBR0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE9BQU87WUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDRixDQUFDLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsTUFBTSxDQUNWLGNBQ0MsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNyQixDQUFDLFlBQ0EsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsR0FDRyxDQUNOLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMifQ==