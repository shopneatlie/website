import type { Config } from "@react-router/dev/config";

// BASE_PATH is set to "/website/" when deploying to GitHub Pages
// (project pages are served from a subpath). Drop it once a custom
// domain is connected.
const basePath = process.env.BASE_PATH ?? "/";

export default {
  ssr: false,
  prerender: true,
  basename: basePath,
} satisfies Config;
