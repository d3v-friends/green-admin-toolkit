import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalElement } from "../../../index.js";
const { Body, Header, Content, Ok } = ModalElement;
export default function ({ ok, title, content, onClick = () => { }, }) {
    return (onToggle, state) => (_jsxs(Body, { className: "min-w-[20rem]", children: [title && _jsx(Header, { disableCloseButton: true, children: title }), _jsx(Content, { children: content }), _jsx(Ok, { onClick: (e) => {
                    onClick(e);
                    onToggle(false);
                }, children: ok })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvYWN0aW9uL3Jlc3BvbnNlLW1vZGFsL21vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFlBQVksQ0FBQztBQVV4QyxNQUFNLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFDLEdBQUcsWUFBWSxDQUFDO0FBRWpELE1BQU0sQ0FBQyxPQUFPLFdBQXFCLEVBQ2xDLEVBQUUsRUFDRixLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEdBQ0Q7SUFDakIsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQzNCLE1BQUMsSUFBSSxJQUFDLFNBQVMsRUFBQyxlQUFlLGFBQzdCLEtBQUssSUFBSSxLQUFDLE1BQU0sSUFBQyxrQkFBa0Isa0JBQUUsS0FBSyxHQUFVLEVBQ3JELEtBQUMsT0FBTyxjQUFFLE9BQU8sR0FBVyxFQUM1QixLQUFDLEVBQUUsSUFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDZCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDLFlBQ0EsRUFBRSxHQUNDLElBQ0MsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9