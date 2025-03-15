
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { sitemapPlugin } from "./src/vite-plugins/sitemap-plugin";

// Sitemap routes
const sitemapRoutes = [
  { loc: "/", lastmod: "2023-11-15", changefreq: "yearly", priority: 1.0 },
  { loc: "/about", lastmod: "2023-11-01", changefreq: "yearly", priority: 0.8 },
  { loc: "/services", lastmod: "2023-11-10", changefreq: "yearly", priority: 0.9 },
  { loc: "/contact", lastmod: "2023-11-01", changefreq: "yearly", priority: 0.8 },
  { loc: "/blog", lastmod: "2023-11-20", changefreq: "weekly", priority: 0.7 },
  { loc: "/gallery", lastmod: "2023-11-05", changefreq: "monthly", priority: 0.6 },
  { loc: "/services/persian-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
  { loc: "/services/oriental-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
  { loc: "/services/antique-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
  { loc: "/services/area-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
  { loc: "/services/wool-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
  { loc: "/services/hand-knotted-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
  { loc: "/services/rug-stain-removal", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
  { loc: "/services/synthetic-rug-cleaning", lastmod: "2023-11-10", changefreq: "monthly", priority: 0.8 },
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' && 
    sitemapPlugin({
      baseUrl: 'https://londonrugcleaning.co.uk',
      routes: sitemapRoutes,
      blogPostsDir: path.resolve(__dirname, './src/data/blog')
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    // Optimize HTML/CSS size
    minify: 'terser',
    cssMinify: true,
    // Improve chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-scroll-area',
          ],
          icons: ['lucide-react'],
          utils: ['class-variance-authority', 'clsx', 'tailwind-merge'],
          forms: ['react-hook-form', '@hookform/resolvers'],
          charts: ['recharts'],
        },
        // Make sure chunks aren't too small
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Generate source maps in development only
    sourcemap: mode === 'development',
    // Add asset size reporting
    reportCompressedSize: true,
  },
}));
