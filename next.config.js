/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
    ],
  },

  webpack: (config, { isServer }) => {
    // Ensure client-side build doesn't break on server-only modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
      }
    }
    return config
  },
}

module.exports = nextConfig
