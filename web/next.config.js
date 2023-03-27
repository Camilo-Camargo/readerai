/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: "/graphql",
        destination: "http://0.0.0.0:8000/graphql"
      }
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
