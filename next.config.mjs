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
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
};

export default nextConfig;
