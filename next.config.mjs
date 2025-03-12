/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // İzin verilen resim domainlerini buraya ekleyin
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      }
    ],
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
  i18n: {
    locales: ['tr'],
    defaultLocale: 'tr',
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['firebase']
  },
};

export default nextConfig; 