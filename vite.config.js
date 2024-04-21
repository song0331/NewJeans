import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        profile: resolve(__dirname, "src/pages/profile/index.html"),
        discography: resolve(__dirname, "src/pages/discography/index.html"),
        gallery: resolve(__dirname, "src/pages/gallery/index.html"),
        video: resolve(__dirname, "src/pages/video/index.html"),
      },
    },
  },
  base: process.env.NODE_ENV === "production" ? "/NewJeans/" : "/",
  css: {
    devSourcemap: true,
  },
});
