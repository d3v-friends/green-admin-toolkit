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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sR0FBRyxNQUFNLFlBQVksQ0FBQztBQUM3QixPQUFPLEtBQUssTUFBTSxjQUFjLENBQUM7QUFDakMsT0FBTyxNQUFNLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxLQUFLLE1BQU0sY0FBYyxDQUFDO0FBSWpDLE9BQU8scURBQXFELENBQUM7QUFDN0QsT0FBTyxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8scUNBQXFDLENBQUM7QUFPN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBa0I7SUFDekUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLE1BQU0sS0FBSyxHQUFHLE1BQU0sT0FBTyxFQUFFO1NBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDVixHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUNYLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBQyxDQUFDO1NBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUM7U0FDZCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFZcEIsT0FBTyxDQUNOLGNBQ0MsU0FBUyxFQUFFLFNBQVMsRUFDcEIsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLEdBQy9DLENBQ0YsQ0FBQztBQUNILENBQUMifQ==