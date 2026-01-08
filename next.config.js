/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  webpack: (config, { isServer }) => {
    // Ignore @emailjs/browser during build if not installed
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
      }
    }
    return config
  },
}

module.exports = nextConfig
