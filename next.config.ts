import type {NextConfig} from "next";
import createMDX from "@next/mdx";
import gfm from "remark-gfm";

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx", "svg"],
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		// rehypePlugins: [stringify, prism({plugins: ["line-numbers"]})],
		remarkPlugins: [gfm],
	},
});

export default withMDX(nextConfig);
