// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isCloudflarePages = process.env.CF_PAGES === "1";

export default defineConfig({
  site: isCloudflarePages ? "https://conferencehomepage.pages.dev" : "http://localhost:4321",
  base: "/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
