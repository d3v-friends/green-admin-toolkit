"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { fnCss } from "nextjs-tools";
import Theme from "../theme/index.js";
import ImgDate from "web-asset/svg/regular/fi-rr-calendar-day.svg";
import { DateTime } from "luxon";
import { ModalToggler } from "../../../v1/index.js";
import Calendar from "react-calendar";
const DefaultOnSelectDateEventHandler = (value, _) => {
    if (!(value instanceof Date)) {
        return null;
    }
    return new Date(value.setHours(0, 0, 0, 0));
};
const { Label, Outline, Icon } = Theme;
export default function ({ value, onChange, label, className, icon = ImgDate, format = "yyyy-MM-dd", onSelectDate = DefaultOnSelectDateEventHandler, name, disabled = false, required = false, }) {
    const [isFocus, setIsFocus] = useState(false);
    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const strDate = value ? DateTime.fromJSDate(value).setZone("Asia/Seoul").toFormat(format) : "날짜";
    return (_jsxs("div", { className: className, children: [_jsx(Label, { children: label }), _jsxs(Outline, { isFocus: isFocus, isInvalid: false, children: [_jsx(Icon, { isFocus: isFocus, isDisabled: disabled, children: icon }), _jsx("button", { type: "button", className: fnCss.sum("outline-none pl-2 pr-2 text-left", disabled ? "" : " hover:cursor-pointer hover:underline"), onMouseOver: () => setIsFocus(true), onMouseOut: () => setIsFocus(false), onClick: () => setIsShowCalendar(true), disabled: disabled, children: strDate })] }), _jsx("input", { hidden: true, name, disabled, required, value: value ? value.toISOString() : "", onChange: (e) => onChange(new Date(e.target.value)) }), _jsx(ModalToggler, { open: isShowCalendar, onChange: setIsShowCalendar, onClickBackdrop: (e) => {
                    e.stopPropagation();
                    onChange(null);
                    setIsShowCalendar(false);
                }, children: _jsx(Calendar, { locale: "ko-kr", value: value, onChange: (value, e) => {
                        let date = value instanceof Date ? value : null;
                        onChange(onSelectDate(date, e));
                        setIsShowCalendar(false);
                    } }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvaW5wdXQvZGF0ZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFTLEtBQUssRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUNyRCxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyxPQUFPLE1BQU0sOENBQThDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBVXRDLE1BQU0sK0JBQStCLEdBQTZCLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQzlFLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNELE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQXFCRixNQUFNLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUM7QUFFckMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixLQUFLLEVBQ0wsUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsSUFBSSxHQUFHLE9BQU8sRUFHZCxNQUFNLEdBQUcsWUFBWSxFQUNyQixZQUFZLEdBQUcsK0JBQStCLEVBRzlDLElBQUksRUFDSixRQUFRLEdBQUcsS0FBSyxFQUNoQixRQUFRLEdBQUcsS0FBSyxHQUNDO0lBQ2pC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