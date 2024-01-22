/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '200mb'
    }
  },
  output: 'export',
}

module.exports = nextConfig
