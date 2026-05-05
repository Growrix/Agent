import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV !== "production";

function buildContentSecurityPolicy() {
  const scriptSrc = ["'self'", "'unsafe-inline'", ...(isDevelopment ? ["'unsafe-eval'"] : [])].join(" ");
  const connectSrc = [
    "'self'",
    "https://*.sanity.io",
    "https://*.posthog.com",
    ...(isDevelopment ? ["ws:", "wss:", "http://localhost:*", "http://127.0.0.1:*"] : []),
  ].join(" ");

  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "form-action 'self'",
    "img-src 'self' https: data:",
    "font-src 'self' data:",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    `connect-src ${connectSrc}`,
    "frame-src https://challenges.cloudflare.com",
  ].join("; ");
}

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: buildContentSecurityPolicy(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
