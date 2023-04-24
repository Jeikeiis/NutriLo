/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: false,
  exclude: [/\.jpg$/, /\.jpeg$/, /\.png$/, /\.gif$/, /\.svg$/],
}

module.exports = nextConfig