import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalElement } from "../../../index.js";
const { Body, Header, Content, Ok } = ModalElement;
export default function ({ ok, title, content, onClick = () => { }, }) {
    return (onToggle, state) => (_jsxs(Body, { className: "min-w-[20rem]", children: [title && _jsx(Header, { disableCloseButton: true, children: title }), _jsx(Content, { children: content }), _jsx(Ok, { onClick: (e) => {
                    onClick(e);
                    onToggle(false);
                }, children: ok })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vcmVzcG9uc2UtbW9kYWwvbW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBVXhDLE1BQU0sRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsR0FBRyxZQUFZLENBQUM7QUFFakQsTUFBTSxDQUFDLE9BQU8sV0FBcUIsRUFDbEMsRUFBRSxFQUNGLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FDRDtJQUNqQixPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDM0IsTUFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLGVBQWUsYUFDN0IsS0FBSyxJQUFJLEtBQUMsTUFBTSxJQUFDLGtCQUFrQixrQkFBRSxLQUFLLEdBQVUsRUFDckQsS0FBQyxPQUFPLGNBQUUsT0FBTyxHQUFXLEVBQzVCLEtBQUMsRUFBRSxJQUNGLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDWCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsWUFDQSxFQUFFLEdBQ0MsSUFDQyxDQUNQLENBQUM7QUFDSCxDQUFDIn0=