/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
exclude: [/\.jpg$/, /\.jpeg$/, /\.png$/, /\.gif$/, /\.svg$/],
}

module.exports = nextConfig
