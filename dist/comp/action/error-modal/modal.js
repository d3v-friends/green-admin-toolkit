import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalElement } from "../../../index.js";
const { Body, Header, Content, Ok } = ModalElement;
export default function ({ ok, title, content, onClickOk = () => { } }) {
    return (onToggle, err) => (_jsxs(Body, { className: "min-w-[20rem]", children: [title && _jsx(Header, { disableCloseButton: true, children: title }), _jsx(Content, { children: content(err) }), _jsx(Ok, { onClick: (e) => {
                    onClickOk(e);
                    onToggle(false);
                }, children: ok })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vZXJyb3ItbW9kYWwvbW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBVXhDLE1BQU0sRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsR0FBRyxZQUFZLENBQUM7QUFFakQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQWtCO0lBQ25GLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUN6QixNQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsZUFBZSxhQUM3QixLQUFLLElBQUksS0FBQyxNQUFNLElBQUMsa0JBQWtCLGtCQUFFLEtBQUssR0FBVSxFQUNyRCxLQUFDLE9BQU8sY0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQVcsRUFDakMsS0FBQyxFQUFFLElBQ0YsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxZQUNBLEVBQUUsR0FDQyxJQUNDLENBQ1AsQ0FBQztBQUNILENBQUMifQ==