import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ModalElement from "../../modal/element/index.js";
const { Body, Header, Content, Ok } = ModalElement;
export default function ({ ok, title, content, onClickOk = () => { } }) {
    return (onToggle, err) => (_jsxs(Body, { className: "min-w-[20rem]", children: [title && _jsx(Header, { disableCloseButton: true, children: title }), _jsx(Content, { children: content(err) }), _jsx(Ok, { onClick: (e) => {
                    onClickOk(e);
                    onToggle(false);
                }, children: ok })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvYWN0aW9uL2Vycm9yLW1vZGFsL21vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxZQUFZLE1BQU0scUJBQXFCLENBQUM7QUFVL0MsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBQyxHQUFHLFlBQVksQ0FBQztBQUVqRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBa0I7SUFDbkYsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ3pCLE1BQUMsSUFBSSxJQUFDLFNBQVMsRUFBQyxlQUFlLGFBQzdCLEtBQUssSUFBSSxLQUFDLE1BQU0sSUFBQyxrQkFBa0Isa0JBQUUsS0FBSyxHQUFVLEVBQ3JELEtBQUMsT0FBTyxjQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBVyxFQUNqQyxLQUFDLEVBQUUsSUFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDZCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDLFlBQ0EsRUFBRSxHQUNDLElBQ0MsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9