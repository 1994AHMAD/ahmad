import { resolve } from "path";
import { defineConfig } from "vite";
import libCss from "vite-plugin-libcss";

export default defineConfig({
    build: {
        rollupOptions: {
            input: [
                resolve(__dirname, "index.html"),
                resolve(__dirname,"styles.css"),
                resolve(__dirname, "pages/button.html"),
                resolve(__dirname, "pages/video.html"),
                resolve(__dirname, "pages/main.html"),
                resolve(__dirname, "css/video.css"),
                resolve(__dirname, "css/control.css"),
                resolve(__dirname, "css/button.css")
            ]
        }
    },
    plugins: [libCss()]
});