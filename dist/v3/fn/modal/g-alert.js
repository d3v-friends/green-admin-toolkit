"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import modal from "./index.js";
import Container from "../../comp/modal/elem/container.js";
import Header from "../../comp/modal/elem/header.js";
import Content from "../../comp/modal/elem/content.js";
export default function (children, { header = "알림", okText = "확인" } = {}) {
    modal((onClose) => (_jsxs(Container, { children: [header && _jsx(Header, { children: header }), _jsxs(Content, { children: [_jsx("div", { children: children }), _jsx("div", { className: "text-right pt-2", children: _jsx("button", { autoFocus: true, className: "filled", onClick: onClose, children: okText }) })] })] })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZy1hbGVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92My9mbi9tb2RhbC9nLWFsZXJ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sU0FBUyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hELE9BQU8sTUFBTSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xELE9BQU8sT0FBTyxNQUFNLCtCQUErQixDQUFDO0FBT3BELE1BQU0sQ0FBQyxPQUFPLFdBQVcsUUFBbUIsRUFBRSxFQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksS0FBMkIsRUFBRTtJQUN2RyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQ2xCLE1BQUMsU0FBUyxlQUNSLE1BQU0sSUFBSSxLQUFDLE1BQU0sY0FBRSxNQUFNLEdBQVUsRUFDcEMsTUFBQyxPQUFPLGVBQ1Asd0JBQU0sUUFBUSxHQUFPLEVBQ3JCLGNBQUssU0FBUyxFQUFDLGlCQUFpQixZQUMvQixpQkFDQyxTQUFTLFFBQ1QsU0FBUyxFQUFDLFFBQVEsRUFDbEIsT0FBTyxFQUFFLE9BQU8sWUFDZixNQUFNLEdBQ0MsR0FDSixJQUNHLElBQ0MsQ0FDWixDQUFDLENBQUM7QUFDSixDQUFDIn0=