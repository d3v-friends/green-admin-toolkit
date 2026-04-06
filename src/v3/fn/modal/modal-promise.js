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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLXByb21pc2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFVNUMsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQztBQUUxQyxNQUFNLENBQUMsT0FBTyxXQUFXLFFBQThCLEVBQUUsT0FBcUMsRUFBRTtJQUMvRixPQUFPLElBQUksT0FBTyxDQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQy9DLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFFekIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFnQixFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVE7Z0JBQUUsT0FBTztZQUMvQixPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFBRSxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQztRQUdGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQzNCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FDVixjQUNDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNoQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckIsQ0FBQyxZQUNBLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEdBQ0csQ0FDTixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDIn0=