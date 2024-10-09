/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ["@acme/internal-single", "@acme/internal-multiple"],
  reactStrictMode: true,
};

export default nextConfig;
