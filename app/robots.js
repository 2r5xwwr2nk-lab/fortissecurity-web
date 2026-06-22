export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fortissecurity.eu/sitemap.xml",
  };
}