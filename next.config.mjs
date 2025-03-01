/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // İzin verilen resim domainlerini buraya ekleyin
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig; 