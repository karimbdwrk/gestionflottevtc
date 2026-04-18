import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://gestionflottevtc.fr/sitemap.xml",
    host: "https://gestionflottevtc.fr",
  }
}
