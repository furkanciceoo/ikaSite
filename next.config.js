/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  export default nextConfig; // Eğer dosyanın adı next.config.js ise bu satırı "module.exports = nextConfig;" yap.