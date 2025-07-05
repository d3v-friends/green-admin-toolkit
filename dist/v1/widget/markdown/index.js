"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import gfm from "remark-gfm";
import parse from "remark-parse";
import rehype from "remark-rehype";
import stringify from "rehype-stringify";
import { unified } from "unified";
import prism from "rehype-prism";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism-okaidia.min.css";
import "prismjs/components/prism-go";
import "prismjs/components/prism-typescript";
export default async function ({ children = "", className }) {
    children = children.replaceAll("\n", "\r");
    const value = await unified()
        .use(parse)
        .use(gfm)
        .use(rehype)
        .use(prism, { plugins: ["line-numbers"] })
        .use(stringify)
        .process(children);
    return (_jsx("div", { className: className, dangerouslySetInnerHTML: { __html: String(value) } }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvd2lkZ2V0L21hcmtkb3duL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxHQUFHLE1BQU0sWUFBWSxDQUFDO0FBQzdCLE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQztBQUNqQyxPQUFPLE1BQU0sTUFBTSxlQUFlLENBQUM7QUFDbkMsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEtBQUssTUFBTSxjQUFjLENBQUM7QUFJakMsT0FBTyxxREFBcUQsQ0FBQztBQUM3RCxPQUFPLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxxQ0FBcUMsQ0FBQztBQU83QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFrQjtJQUN6RSxRQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxPQUFPLEVBQUU7U0FDM0IsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUNWLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDUixHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ1gsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFDLENBQUM7U0FDdkMsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUNkLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQVlwQixPQUFPLENBQ04sY0FDQyxTQUFTLEVBQUUsU0FBUyxFQUNwQix1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsR0FDL0MsQ0FDRixDQUFDO0FBQ0gsQ0FBQyJ9