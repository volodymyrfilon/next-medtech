import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = {
    url: process.env.NEXT_PUBLIC_API_BASE_URL || '',
    lastModified: new Date(2024, 5, 30),
  };

  const privacyPolicy = {
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/privacy-policy` || '',
    lastModified: new Date(2024, 5, 6),
  };

  return [home, privacyPolicy];
}
