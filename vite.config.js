import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import removeAttr from "remove-attr";

// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [react()],
    plugins: [
        removeAttr({
            extensions: ["jsx"],
            attributes: ["playsinline, muted"],
            ignoreFolders: ["src/pages", "src/components"],
            ignoreFiles: ["src/pages/screen/about/About.jsx"],
        }),
        react(),
    ],
});
