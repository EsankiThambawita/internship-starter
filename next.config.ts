/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    //This tells Vercel/Next.js to IGNORE ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    //This ignores type errors (optional but helps with build)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
