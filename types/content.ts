export interface ContentItem {
  type: 'youtube' | 'tiktok' | 'document';
  videoId: string;
  title: string;
  description: string;
  ctaText: string;
  affiliateLink: string;
  tags?: string[];
}
