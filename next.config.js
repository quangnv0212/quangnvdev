/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fhan2-3.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "themes.vantheweb.com",
      },
      {
        protocol: "https",
        hostname: "store-images.s-microsoft.com",
      },
      {
        protocol: "https",
        hostname: "portfolio-one-livid-22.vercel.app",
      },
      {
        protocol: "https",
        hostname: "scontent.fsgn2-5.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "www.alissanguyen.dev",
      },
      {
        protocol: "https",
        hostname: "scontent-hkg4-1.xx.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "postimg.cc",
      },
      // postimg.cc,
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
