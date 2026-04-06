"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from "../../comp/modal/elem/container";
import Header from "../../comp/modal/elem/header";
import Content from "../../comp/modal/elem/content";
import modalPromise from "./modal-promise";
export default function (children, { header = "알림", okText = "확인" } = {}) {
    return modalPromise((onClose) => (_jsxs(Container, { children: [header && _jsx(Header, { children: header }), _jsxs(Content, { children: [_jsx("div", { children: children }), _jsx("div", { className: "text-right pt-2", children: _jsx("button", { autoFocus: true, className: "filled", onClick: () => onClose(true), children: okText }) })] })] })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZy1hbGVydC1wcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZy1hbGVydC1wcm9taXNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxTQUFTLE1BQU0saUNBQWlDLENBQUM7QUFDeEQsT0FBTyxNQUFNLE1BQU0sOEJBQThCLENBQUM7QUFDbEQsT0FBTyxPQUFPLE1BQU0sK0JBQStCLENBQUM7QUFDcEQsT0FBTyxZQUFZLE1BQU0saUJBQWlCLENBQUM7QUFPM0MsTUFBTSxDQUFDLE9BQU8sV0FBVyxRQUFtQixFQUFFLEVBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxLQUE0QixFQUFFO0lBQ3hHLE9BQU8sWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUNoQyxNQUFDLFNBQVMsZUFDUixNQUFNLElBQUksS0FBQyxNQUFNLGNBQUUsTUFBTSxHQUFVLEVBQ3BDLE1BQUMsT0FBTyxlQUNQLHdCQUFNLFFBQVEsR0FBTyxFQUNyQixjQUFLLFNBQVMsRUFBQyxpQkFBaUIsWUFDL0IsaUJBQ0MsU0FBUyxRQUNULFNBQVMsRUFBQyxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQzNCLE1BQU0sR0FDQyxHQUNKLElBQ0csSUFDQyxDQUNaLENBQUMsQ0FBQztBQUNKLENBQUMifQ==