import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // metadataBase tells Next.js the production URL (prevents OG/Twitter image warning)
  ...(process.env.NODE_ENV === "production" && {
    env: { NEXT_PUBLIC_SITE_URL: "https://ongroundpm.com.au" },
  }),
};

export default nextConfig;
