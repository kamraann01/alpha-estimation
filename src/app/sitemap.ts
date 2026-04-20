import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alphaestimation.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/commercial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/residential`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/takeoffs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/subcontractor`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/industrial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/get-a-quote`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
