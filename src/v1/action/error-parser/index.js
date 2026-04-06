import { jsx as _jsx } from "react/jsx-runtime";
export default function ({ error, parser }) {
    for (let key in parser) {
        if (error.includes(key)) {
            error = parser[key];
            break;
        }
    }
    return _jsx("p", { children: error });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFrQjtJQUN4RCxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsTUFBTTtRQUNQLENBQUM7SUFDRixDQUFDO0lBRUQsT0FBTyxzQkFBSSxLQUFLLEdBQUssQ0FBQztBQUN2QixDQUFDIn0=