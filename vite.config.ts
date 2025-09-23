import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { sitemapPlugin } from "./src/vite-plugins/sitemap-plugin";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { vitePluginBeasties } from 'vite-plugin-beasties';

// Sitemap routes (keeping your existing sitemap configuration)
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
    // Image optimization plugin
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),
    // Add vite-plugin-beasties for critical CSS extraction
    mode === 'production' && vitePluginBeasties({
        // an array of files to find critical CSS and inline it
        critical: [
            'dist/index.html'
        ]
    }),
    // Sitemap generation for production builds
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
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        // More refined chunking strategy
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            if (id.includes('react-router-dom') || id.includes('@remix-run') || id.includes('react-router')) {
              return 'react-router';
            }
            if (id.includes('react-dom') || id.includes('react')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    sourcemap: mode === 'development',
    reportCompressedSize: true,
  },
}));