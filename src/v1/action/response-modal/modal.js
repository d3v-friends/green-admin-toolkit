import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ModalElement from "../../modal/element";
const { Body, Header, Content, Ok } = ModalElement;
export default function ({ ok, title, content, onClick = () => { }, }) {
    return (onToggle, state) => (_jsxs(Body, { className: "min-w-[20rem]", children: [title && _jsx(Header, { disableCloseButton: true, children: title }), _jsx(Content, { children: content }), _jsx(Ok, { onClick: (e) => {
                    onClick(e);
                    onToggle(false);
                }, children: ok })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sWUFBWSxNQUFNLHFCQUFxQixDQUFDO0FBVS9DLE1BQU0sRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsR0FBRyxZQUFZLENBQUM7QUFFakQsTUFBTSxDQUFDLE9BQU8sV0FBcUIsRUFDbEMsRUFBRSxFQUNGLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FDRDtJQUNqQixPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDM0IsTUFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLGVBQWUsYUFDN0IsS0FBSyxJQUFJLEtBQUMsTUFBTSxJQUFDLGtCQUFrQixrQkFBRSxLQUFLLEdBQVUsRUFDckQsS0FBQyxPQUFPLGNBQUUsT0FBTyxHQUFXLEVBQzVCLEtBQUMsRUFBRSxJQUNGLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDWCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsWUFDQSxFQUFFLEdBQ0MsSUFDQyxDQUNQLENBQUM7QUFDSCxDQUFDIn0=