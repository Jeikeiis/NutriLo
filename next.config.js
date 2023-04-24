/** @type {import('next').NextConfig} */
const nextConfig = {
  images: false,
  exclude: [/\.jpg$/, /\.jpeg$/, /\.png$/, /\.gif$/, /\.svg$/],
}

module.exports = nextConfig