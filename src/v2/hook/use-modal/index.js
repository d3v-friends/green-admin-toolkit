"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { createPortal } from "react-dom";
export default function () {
    const [children, setChildren] = useState(null);
    return [_jsx(_Fragment, { children: children && createPortal(_jsx(_Fragment, { children: children }), document.body) }), setChildren];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUl2QyxNQUFNLENBQUMsT0FBTztJQUNiLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFZLElBQUksQ0FBQyxDQUFDO0lBRTFELE9BQU8sQ0FBQyw0QkFBRyxRQUFRLElBQUksWUFBWSxDQUFDLDRCQUFHLFFBQVEsR0FBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZGLENBQUMifQ==