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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvbWFya2Rvd24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEdBQUcsTUFBTSxZQUFZLENBQUM7QUFDN0IsT0FBTyxLQUFLLE1BQU0sY0FBYyxDQUFDO0FBQ2pDLE9BQU8sTUFBTSxNQUFNLGVBQWUsQ0FBQztBQUNuQyxPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQztBQUlqQyxPQUFPLHFEQUFxRCxDQUFDO0FBQzdELE9BQU8sc0NBQXNDLENBQUM7QUFDOUMsT0FBTyw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLHFDQUFxQyxDQUFDO0FBTzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEVBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQWtCO0lBQ3pFLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxNQUFNLEtBQUssR0FBRyxNQUFNLE9BQU8sRUFBRTtTQUMzQixHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDWCxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQztTQUN2QyxHQUFHLENBQUMsU0FBUyxDQUFDO1NBQ2QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBWXBCLE9BQU8sQ0FDTixjQUNDLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxHQUMvQyxDQUNGLENBQUM7QUFDSCxDQUFDIn0=