"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import modal from "./index";
import Container from "../../comp/modal/elem/container";
import Header from "../../comp/modal/elem/header";
import Content from "../../comp/modal/elem/content";
export default function (children, { header = "알림", okText = "확인" } = {}) {
    modal((onClose) => (_jsxs(Container, { children: [header && _jsx(Header, { children: header }), _jsxs(Content, { children: [_jsx("div", { children: children }), _jsx("div", { className: "text-right pt-2", children: _jsx("button", { autoFocus: true, className: "filled", onClick: onClose, children: okText }) })] })] })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZy1hbGVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImctYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxTQUFTLE1BQU0saUNBQWlDLENBQUM7QUFDeEQsT0FBTyxNQUFNLE1BQU0sOEJBQThCLENBQUM7QUFDbEQsT0FBTyxPQUFPLE1BQU0sK0JBQStCLENBQUM7QUFPcEQsTUFBTSxDQUFDLE9BQU8sV0FBVyxRQUFtQixFQUFFLEVBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxLQUEyQixFQUFFO0lBQ3ZHLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FDbEIsTUFBQyxTQUFTLGVBQ1IsTUFBTSxJQUFJLEtBQUMsTUFBTSxjQUFFLE1BQU0sR0FBVSxFQUNwQyxNQUFDLE9BQU8sZUFDUCx3QkFBTSxRQUFRLEdBQU8sRUFDckIsY0FBSyxTQUFTLEVBQUMsaUJBQWlCLFlBQy9CLGlCQUNDLFNBQVMsUUFDVCxTQUFTLEVBQUMsUUFBUSxFQUNsQixPQUFPLEVBQUUsT0FBTyxZQUNmLE1BQU0sR0FDQyxHQUNKLElBQ0csSUFDQyxDQUNaLENBQUMsQ0FBQztBQUNKLENBQUMifQ==