// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isCloudflarePages = process.env.CF_PAGES === "1";

export default defineConfig({
  // Pages는 루트 배포라 base 불필요
  site: isCloudflarePages
    ? "https://conferencehomepage.pages.dev"
    : "https://dsa04156.github.io",

  base: isCloudflarePages ? "/" : "/ConferenceHomepage/",

  trailingSlash: "always",

  vite: {
    plugins: [tailwindcss()],
  },
});
