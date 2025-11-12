import { jsx as _jsx } from "react/jsx-runtime";
import Base from "../base/index.js";
import ImgClock from "web-asset/svg/regular/fi-rr-clock-three.svg";
import { DateTime } from "luxon";
export default function ({ children = "", format = "yyyy-MM-dd (HH:mm)", align }) {
    if (children) {
        children = DateTime.fromISO(children).setZone("Asia/Seoul").toFormat(format);
    }
    return (_jsx(Base, { image: ImgClock, align: align, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvdmFsdWUvdGltZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQUMzQixPQUFPLFFBQVEsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBUS9CLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLE1BQU0sR0FBRyxvQkFBb0IsRUFBRSxLQUFLLEVBQWtCO0lBQzlGLElBQUksUUFBUSxFQUFFLENBQUM7UUFDZCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxPQUFPLENBQ04sS0FBQyxJQUFJLElBQ0osS0FBSyxFQUFFLFFBQVEsRUFDZixLQUFLLEVBQUUsS0FBSyxZQUNYLFFBQVEsR0FDSCxDQUNQLENBQUM7QUFDSCxDQUFDIn0=