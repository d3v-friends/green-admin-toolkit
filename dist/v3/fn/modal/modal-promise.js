"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
export const ModalCancel = "MODAL_CANCEL";
export default function (children, opts = {}) {
    return new Promise((resolve, reject) => {
        const cont = document.createElement("dialog");
        cont.className = "green";
        const escapeHandler = (e) => {
            if (e.key !== "Escape")
                return;
            unmount();
            reject(new Error(ModalCancel));
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
                reject(new Error(ModalCancel));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92My9mbi9tb2RhbC9tb2RhbC1wcm9taXNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBVTVDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUM7QUFFMUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxRQUE4QixFQUFFLE9BQXFDLEVBQUU7SUFDL0YsT0FBTyxJQUFJLE9BQU8sQ0FBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUMvQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBRXpCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRO2dCQUFFLE9BQU87WUFDL0IsT0FBTyxFQUFFLENBQUM7WUFDVixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFFRixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU07Z0JBQUUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUM7UUFHRixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNGLENBQUMsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxNQUFNLENBQ1YsY0FDQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDaEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsWUFDQSxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxHQUNHLENBQ04sQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9