import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalElement } from "../../../index.js";
const { Body, Header, Content, Ok } = ModalElement;
export default function ({ ok, title, content, onClickOk = () => { } }) {
    return (onToggle, err) => (_jsxs(Body, { className: "min-w-[20rem]", children: [title && _jsx(Header, { disableCloseButton: true, children: title }), _jsx(Content, { children: content(err) }), _jsx(Ok, { onClick: (e) => {
                    onClickOk(e);
                    onToggle(false);
                }, children: ok })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvYWN0aW9uL2Vycm9yLW1vZGFsL21vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFlBQVksQ0FBQztBQVV4QyxNQUFNLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFDLEdBQUcsWUFBWSxDQUFDO0FBRWpELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFrQjtJQUNuRixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDekIsTUFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLGVBQWUsYUFDN0IsS0FBSyxJQUFJLEtBQUMsTUFBTSxJQUFDLGtCQUFrQixrQkFBRSxLQUFLLEdBQVUsRUFDckQsS0FBQyxPQUFPLGNBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFXLEVBQ2pDLEtBQUMsRUFBRSxJQUNGLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNkLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsWUFDQSxFQUFFLEdBQ0MsSUFDQyxDQUNQLENBQUM7QUFDSCxDQUFDIn0=