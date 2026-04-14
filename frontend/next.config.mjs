/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Cấu hình các domain hình ảnh để fix lỗi bạn gặp phải */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.prestigefloor.com.au',
        pathname: '/**',
      },
    ],
  },
  /* Các cấu hình khác nếu cần */
  reactStrictMode: true,
};

export default nextConfig;