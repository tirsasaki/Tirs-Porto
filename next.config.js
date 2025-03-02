/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing config...
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
