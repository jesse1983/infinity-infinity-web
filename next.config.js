const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  dest: 'public',
  // precachePages: ['*'], // Cacheia todas as páginas no build
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  scope: '/',
  runtimeCaching: [
    ...runtimeCaching,
    {
      urlPattern: new RegExp(`/^${process.env.WORDPRESS_API_URL}.*\.(png|jpg|jpeg|gif|svg|php|mp4)$/`),
      handler: 'NetworkFirst',
    },
    {
      urlPattern: new RegExp(`/^http?.*/`),
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pages-cache',
        expiration: {
          maxEntries: 100, // Número máximo de páginas no cache
          maxAgeSeconds: 30 * 24 * 60 * 60, // Tempo máximo de 30 dias
        },
      },
    },
  ],
});

const isGithubActionsPages = process.env.GITHUB_ACTIONS_PAGES || false;


if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL
)


let assetPrefix = '';
let basePath = '';

if (isGithubActionsPages) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
  console.log({ assetPrefix, basePath });
}


/** @type {import('next').NextConfig} */
module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return {
      ...config,
      optimization: {
        minimize: false
      },
    }
  },
  // assetPrefix: assetPrefix,
  // basePath: basePath,
  output: 'standalone',
});
