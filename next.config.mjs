/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: '/andromeda',
  assetPrefix: '/andromeda/',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
