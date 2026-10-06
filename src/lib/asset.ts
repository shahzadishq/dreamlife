// Prefix for public assets referenced by a string src (not a static import).
// next/image auto-applies basePath to static imports but NOT to string srcs,
// so for GitHub Pages (served under /dreamlife) we must prepend it ourselves.
// In local dev / server builds NEXT_PUBLIC_BASE_PATH is "", so this is a no-op.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path; // leave absolute URLs alone
  return `${BASE_PATH}${path}`;
}
