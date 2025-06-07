import type {MDXComponents} from "mdx/types";

export default function (components: MDXComponents): MDXComponents {
	return {
		...components,
	};
}
