/** @type {import('next').NextConfig} */
const nextConfig = {
  exclude: [/\.jpg$/, /\.jpeg$/, /\.png$/, /\.gif$/, /\.svg$/],
  images: false,
}

module.exports = nextConfig