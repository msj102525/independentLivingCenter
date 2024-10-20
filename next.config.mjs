// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // 추가 설정
  experimental: {
    // Experimental features (if any)
  },
  output: 'export',
};

export default nextConfig;
