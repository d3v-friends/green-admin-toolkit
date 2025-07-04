import { jsx as _jsx } from "react/jsx-runtime";
import ModalBase from "../../modal/base/index.js";
export default function ({ children, pending }) {
    if (!pending)
        return null;
    return _jsx(ModalBase, { children: children || _jsx("div", { className: "text-(--text-1)", children: "\uB85C\uB529\uC911..." }) });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvYWN0aW9uL2xvYWRpbmctYmFja2Ryb3AvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQVN6QyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBa0I7SUFDNUQsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPLElBQUksQ0FBQztJQUUxQixPQUFPLEtBQUMsU0FBUyxjQUFFLFFBQVEsSUFBSSxjQUFLLFNBQVMsRUFBQyxpQkFBaUIsc0NBQWEsR0FBYSxDQUFDO0FBQzNGLENBQUMifQ==