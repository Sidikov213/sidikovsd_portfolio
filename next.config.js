/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Статический экспорт для загрузки на обычный хостинг (Рег.ру и др.)
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
