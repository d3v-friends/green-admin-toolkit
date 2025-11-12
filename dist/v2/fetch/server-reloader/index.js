"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import Reloader from "../reloader/index.js";
import { PageError } from "../../index.js";
export default async function ({ fetch, delay, children }) {
    const { data, error } = await fetch();
    if (error)
        return _jsx(PageError, { error: error });
    return (_jsx(Reloader, { data: data, delay: delay, fetch: fetch, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvZmV0Y2gvc2VydmVyLXJlbG9hZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBR2IsT0FBTyxRQUF5QixNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBWXRDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFvQixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUEyQjtJQUN6RixNQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxHQUFHLE1BQU0sS0FBSyxFQUFFLENBQUM7SUFFcEMsSUFBSSxLQUFLO1FBQUUsT0FBTyxLQUFDLFNBQVMsSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLENBQUM7SUFFOUMsT0FBTyxDQUNOLEtBQUMsUUFBUSxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxZQUNYLFFBQVEsR0FDQyxDQUNYLENBQUM7QUFDSCxDQUFDIn0=