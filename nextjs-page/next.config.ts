import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // 支援 GitHub Pages 的 base path（如果需要的話）
    // basePath: '/your-repo-name',
    // assetPrefix: '/your-repo-name/',
};

export default nextConfig;
