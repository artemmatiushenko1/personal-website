module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
    minimumCacheTTL: 31536000,
  },
  pageExtensions: ['page.js'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgo: false,
            dimensions: false,
          },
        },
      ],
    });

    return config;
  },
};
