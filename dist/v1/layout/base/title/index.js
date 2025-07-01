import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
export default function ({ imgSrc, children, href = "/" }) {
    return (_jsxs(Link, { href: href, className: "h-[3.5rem] overflow-hidden flex items-center font-bold text-xl", children: [imgSrc && (_jsx(Image, { className: "m-3", src: imgSrc, alt: "logo", width: 40, height: 40 })), children] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvbGF5b3V0L2Jhc2UvdGl0bGUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQVE3QixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFrQjtJQUN2RSxPQUFPLENBQ04sTUFBQyxJQUFJLElBQ0osSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUMsZ0VBQWdFLGFBQ3pFLE1BQU0sSUFBSSxDQUNWLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxLQUFLLEVBQ2YsR0FBRyxFQUFFLE1BQU0sRUFDWCxHQUFHLEVBQUMsTUFBTSxFQUNWLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxDQUNGLEVBQ0EsUUFBUSxJQUNILENBQ1AsQ0FBQztBQUNILENBQUMifQ==