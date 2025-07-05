import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ModalElement from "../../modal/element/index.js";
const { Body, Header, Content, Ok } = ModalElement;
export default function ({ ok, title, content, onClick = () => { }, }) {
    return (onToggle, state) => (_jsxs(Body, { className: "min-w-[20rem]", children: [title && _jsx(Header, { disableCloseButton: true, children: title }), _jsx(Content, { children: content }), _jsx(Ok, { onClick: (e) => {
                    onClick(e);
                    onToggle(false);
                }, children: ok })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvYWN0aW9uL3Jlc3BvbnNlLW1vZGFsL21vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxZQUFZLE1BQU0scUJBQXFCLENBQUM7QUFVL0MsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBQyxHQUFHLFlBQVksQ0FBQztBQUVqRCxNQUFNLENBQUMsT0FBTyxXQUFxQixFQUNsQyxFQUFFLEVBQ0YsS0FBSyxFQUNMLE9BQU8sRUFDUCxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxHQUNEO0lBQ2pCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUMzQixNQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsZUFBZSxhQUM3QixLQUFLLElBQUksS0FBQyxNQUFNLElBQUMsa0JBQWtCLGtCQUFFLEtBQUssR0FBVSxFQUNyRCxLQUFDLE9BQU8sY0FBRSxPQUFPLEdBQVcsRUFDNUIsS0FBQyxFQUFFLElBQ0YsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNYLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxZQUNBLEVBQUUsR0FDQyxJQUNDLENBQ1AsQ0FBQztBQUNILENBQUMifQ==