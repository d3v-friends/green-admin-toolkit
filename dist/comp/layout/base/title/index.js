import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
export default function ({ imgSrc, children, href = "/" }) {
    return (_jsxs(Link, { href: href, className: "h-[3.5rem] overflow-hidden flex items-center font-bold text-xl", children: [imgSrc && (_jsx(Image, { className: "m-3", src: imgSrc, alt: "logo", width: 40, height: 40 })), children] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvYmFzZS90aXRsZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sS0FBd0IsTUFBTSxZQUFZLENBQUM7QUFDbEQsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBUTdCLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQWtCO0lBQ3ZFLE9BQU8sQ0FDTixNQUFDLElBQUksSUFDSixJQUFJLEVBQUUsSUFBSSxFQUNWLFNBQVMsRUFBQyxnRUFBZ0UsYUFDekUsTUFBTSxJQUFJLENBQ1YsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFDLEtBQUssRUFDZixHQUFHLEVBQUUsTUFBTSxFQUNYLEdBQUcsRUFBQyxNQUFNLEVBQ1YsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULENBQ0YsRUFDQSxRQUFRLElBQ0gsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9