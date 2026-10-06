/** @type {import('next').NextConfig} */

// When building for GitHub Pages we produce a fully static export served from
// a project subpath (https://<user>.github.io/<repo>/). Locally (dev / next
// start) none of this applies, so the normal server build is untouched.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? process.env.PAGES_BASE_PATH ?? "/dreamlife" : "";

const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export", // emit static HTML/CSS/JS into ./out
        basePath,
        assetPrefix: basePath || undefined,
        trailingSlash: true, // directory-style URLs work well on Pages
      }
    : {}),
  images: {
    // GitHub Pages has no image optimization server, so serve images as-is
    // for the static export. Local builds keep optimization on.
    unoptimized: isPages,
    formats: ["image/avif", "image/webp"],
  },
  // Expose the base path to the app (e.g. for the favicon URL in metadata).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
