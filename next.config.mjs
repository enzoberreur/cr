/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Ajout pour s'assurer que le CSS est correctement chargé
    optimizeCss: true,
  },
};

export default nextConfig;
