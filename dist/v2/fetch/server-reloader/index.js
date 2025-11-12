"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import Reloader from "../reloader/index.js";
import { PageError } from "../../index.js";
export default async function ({ query, fetch, variables, delay, children, }) {
    const { data, error } = await fetch(query, variables);
    if (error)
        return _jsx(PageError, { error: error });
    return (_jsx(Reloader, { data: data, variables: variables, delay: delay, fetch: fetch, query: query, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvZmV0Y2gvc2VydmVyLXJlbG9hZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBR2IsT0FBTyxRQUF5QixNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBY3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFnQyxFQUNuRCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxHQUM4QjtJQUN0QyxNQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVwRCxJQUFJLEtBQUs7UUFBRSxPQUFPLEtBQUMsU0FBUyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztJQUU5QyxPQUFPLENBQ04sS0FBQyxRQUFRLElBQ1IsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsU0FBUyxFQUNwQixLQUFLLEVBQUUsS0FBSyxFQUNaLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLEtBQUssWUFDWCxRQUFRLEdBQ0MsQ0FDWCxDQUFDO0FBQ0gsQ0FBQyJ9