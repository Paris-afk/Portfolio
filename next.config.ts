import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd && isGitHubPages ? '/Portfolio' : '',
  assetPrefix: isProd && isGitHubPages ? '/Portfolio' : '',
  images: {
    unoptimized: true
  },
};

export default nextConfig;
