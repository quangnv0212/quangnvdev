/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent.fhan2-3.fna.fbcdn.net',
          },
          {
            protocol: 'https',
            hostname: 'themes.vantheweb.com',
          },
          {
            protocol: 'https',
            hostname: 'store-images.s-microsoft.com',
          },
          {
            protocol: 'https',
            hostname: 'portfolio-one-livid-22.vercel.app',
          },
          {
            protocol: 'https',
            hostname: 'scontent.fsgn2-5.fna.fbcdn.net',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
          },
        ],
      },
}

module.exports = nextConfig

