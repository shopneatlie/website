import type { Config } from "@react-router/dev/config";

// Site is served at the domain root (neatlie.com). BASE_PATH exists as
// an escape hatch for serving from a subpath if ever needed again.
const basePath = process.env.BASE_PATH ?? "/";

export default {
  ssr: false,
  prerender: true,
  basename: basePath,
} satisfies Config;
