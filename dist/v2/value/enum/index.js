import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
export default function ({ children, data, className = "" }) {
    if (!data.hasOwnProperty(children))
        return _jsx(_Fragment, { children: "not_found_enum" });
    const item = data[children];
    return (_jsx("div", { className: concat("pl-2 pr-2 inline-flex rounded-md", item.colorClassName || "bg-(--primary) text-(--primary-alt)", className), children: item.label }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjIvdmFsdWUvZW51bS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFRcEMsTUFBTSxDQUFDLE9BQU8sV0FBNkIsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQXFCO0lBQzlGLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUFFLE9BQU8sK0NBQW1CLENBQUM7SUFDL0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTVCLE9BQU8sQ0FDTixjQUNDLFNBQVMsRUFBRSxNQUFNLENBQ2hCLGtDQUFrQyxFQUNsQyxJQUFJLENBQUMsY0FBYyxJQUFJLHFDQUFxQyxFQUM1RCxTQUFTLENBQ1QsWUFDQSxJQUFJLENBQUMsS0FBSyxHQUNOLENBQ04sQ0FBQztBQUNILENBQUMifQ==