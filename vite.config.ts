// vite.config.ts or vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  plugins: [
    react(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   devOptions: {
    //     enabled: true,
    //   },

    //   includeAssets: [
    //     "favicon.ico",
    //     "apple-touch-icon.png",
    //     "masked-icon.svg",
    //     "robots.txt",
    //   ],
    //   manifest: {
    //     name: "Vibet",
    //     short_name: "Vibet",
    //     description: "Start Up web app",
    //     lang: "en",
    //     start_url: "/",
    //     scope: "/",
    //     display: "standalone",
    //     theme_color: "#ffffff",
    //     background_color: "#ffffff",
    //     orientation: "portrait",
    //     icons: [
    //       {
    //         src: "pwa-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-512-maskable.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any maskable",
    //       },
    //     ],
    //   },
    //   workbox: {
    //     cleanupOutdatedCaches: true,
    //     globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    //     skipWaiting: true,
    //     clientsClaim: true,
    //     sourcemap: false,
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
    //         handler: "CacheFirst",
    //         options: {
    //           cacheName: "google-fonts-cache",
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
    //         handler: "CacheFirst",
    //         options: {
    //           cacheName: "jsdelivr-cache",
    //           expiration: {
    //             maxEntries: 30,
    //             maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: ({ request }) => request.destination === "document",
    //         handler: "NetworkFirst",
    //         options: {
    //           cacheName: "html-cache",
    //           networkTimeoutSeconds: 3,
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24, // 1 day
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: ({ request }) =>
    //           ["style", "script", "worker"].includes(request.destination),
    //         handler: "StaleWhileRevalidate",
    //         options: {
    //           cacheName: "assets-cache",
    //           expiration: {
    //             maxEntries: 50,
    //             maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: ({ request }) => request.destination === "image",
    //         handler: "CacheFirst",
    //         options: {
    //           cacheName: "image-cache",
    //           expiration: {
    //             maxEntries: 60,
    //             maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
  ],
});
