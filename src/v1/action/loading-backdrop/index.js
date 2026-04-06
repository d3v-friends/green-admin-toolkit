import { jsx as _jsx } from "react/jsx-runtime";
import ModalBase from "../../modal/base";
export default function ({ children, pending }) {
    if (!pending)
        return null;
    return _jsx(ModalBase, { children: children || _jsx("div", { className: "text-(--text-1)", children: "\uB85C\uB529\uC911..." }) });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBU3pDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFrQjtJQUM1RCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTFCLE9BQU8sS0FBQyxTQUFTLGNBQUUsUUFBUSxJQUFJLGNBQUssU0FBUyxFQUFDLGlCQUFpQixzQ0FBYSxHQUFhLENBQUM7QUFDM0YsQ0FBQyJ9