import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: "./",
  optimizeDeps: {
    exclude: ["Download", "FAQ", "Privacy", "ContactUs"]
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'src/home.html'),
        faq: resolve(__dirname, 'src/faq.html'),
        privacy: resolve(__dirname, 'src/privacy.html'),
        contactus: resolve(__dirname, 'src/contactus.html'),
        download: resolve(__dirname, 'src/download.html'),
        shop: resolve(__dirname, 'src/shop.html'),
        videos: resolve(__dirname, 'src/videos.html'),
      },
    },
  },
  
});