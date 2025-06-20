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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vZXJyb3ItcGFyc2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0EsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQWtCO0lBQ3hELEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDeEIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDekIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixNQUFNO1FBQ1AsQ0FBQztJQUNGLENBQUM7SUFFRCxPQUFPLHNCQUFJLEtBQUssR0FBSyxDQUFDO0FBQ3ZCLENBQUMifQ==