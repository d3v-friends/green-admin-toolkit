"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { createPortal } from "react-dom";
export default function () {
    const [children, setChildren] = useState(null);
    return [_jsx(_Fragment, { children: children && createPortal(_jsx(_Fragment, { children: children }), document.body) }), setChildren];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvaG9vay91c2UtbW9kYWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFJdkMsTUFBTSxDQUFDLE9BQU87SUFDYixNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBWSxJQUFJLENBQUMsQ0FBQztJQUUxRCxPQUFPLENBQUMsNEJBQUcsUUFBUSxJQUFJLFlBQVksQ0FBQyw0QkFBRyxRQUFRLEdBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN2RixDQUFDIn0=