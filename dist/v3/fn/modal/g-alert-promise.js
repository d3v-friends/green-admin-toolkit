"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from "../../comp/modal/elem/container.js";
import Header from "../../comp/modal/elem/header.js";
import Content from "../../comp/modal/elem/content.js";
import modalPromise from "./modal-promise.js";
export default function (children, { header = "알림", okText = "확인" } = {}) {
    return modalPromise((onClose) => (_jsxs(Container, { children: [header && _jsx(Header, { children: header }), _jsxs(Content, { children: [_jsx("div", { children: children }), _jsx("div", { className: "text-right pt-2", children: _jsx("button", { autoFocus: true, className: "filled", onClick: () => onClose(true), children: okText }) })] })] })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZy1hbGVydC1wcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3YzL2ZuL21vZGFsL2ctYWxlcnQtcHJvbWlzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sU0FBUyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hELE9BQU8sTUFBTSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xELE9BQU8sT0FBTyxNQUFNLCtCQUErQixDQUFDO0FBQ3BELE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBTzNDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsUUFBbUIsRUFBRSxFQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksS0FBNEIsRUFBRTtJQUN4RyxPQUFPLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FDaEMsTUFBQyxTQUFTLGVBQ1IsTUFBTSxJQUFJLEtBQUMsTUFBTSxjQUFFLE1BQU0sR0FBVSxFQUNwQyxNQUFDLE9BQU8sZUFDUCx3QkFBTSxRQUFRLEdBQU8sRUFDckIsY0FBSyxTQUFTLEVBQUMsaUJBQWlCLFlBQy9CLGlCQUNDLFNBQVMsUUFDVCxTQUFTLEVBQUMsUUFBUSxFQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUMzQixNQUFNLEdBQ0MsR0FDSixJQUNHLElBQ0MsQ0FDWixDQUFDLENBQUM7QUFDSixDQUFDIn0=