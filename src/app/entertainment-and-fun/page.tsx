// app/entertainment-and-fun/page.tsx
import EmbeddedContent from '@/components/EmbeddedContent';
import { ContentItem } from '@/types/content';

export default function EntertainmentAndFunPage() {  // Fixed component name
  // Featured affiliate product for the overlay CTA
  const featuredProduct = {
    text: "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    link: "https://partner.bybit.com/b/aff_7_137622"
  };
  const contentItems: ContentItem[] = [
    {
    "type": "youtube",
    "videoId": "uYVrqfaoHLk",
    "title": "khaby.lame- samsung galaxy",
    "description": "Khaby x Samsung Galaxy, lets head to UCLA to shoot hoops with Sebastian Mack! #withgalaxy",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["comedy", "brand"]
  },
  {
    "type": "youtube",
    "videoId": "oNW2p0nTEto",
    "title": "Nas Daily-",
    "description": "My Israel And Palestine, Explained (watch more from Nas Daily)",
    "ctaText": "The best trading offers are on Bybit, sign up to claim rewards and discounts",
    "affiliateLink": "https://partner.bybit.com/b/137622",
    "tags": ["education", "politics"]
  },
  {
    "type": "youtube",
    "videoId": "-YUSP_P4aEE",
    "title": "Project Nightfall",
    "description": "How I became a Millionaire (watch more from Nas Daily)",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["money", "story"]
  },
    {
    "type": "youtube",
    "videoId": "pzBi1nwDn8U",
    "title": "MrBeast - trapped in a private jet",
    "description": "Survive 100 Days Trapped In A Private Jet, Keep It",
    "ctaText": "The best trading offers are on Bybit, sign up to claim rewards and discounts",
    "affiliateLink": "https://partner.bybit.com/b/137622",
    "tags": ["challenge", "viral"]
  },
  {
    "type": "tiktok",
    "videoId": "7532465100771413270",
    "title": "khaby lame- trending",
    "description": "khaby lame viral",
    "ctaText": "Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["comedy", "trending"]
  },
  {
    "type": "tiktok",
    "videoId": "7516905495962209558",
    "title": "khaby lame- trending",
    "description": "khaby lame showed neymar jr that he is the goat",
    "ctaText": "Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["football", "comedy"]
  }
 
    // Add more items as needed
  ];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pt-10">
      <h1 className="text-3xl font-bold mb-8 pt-18">Entertainment and Fun</h1>
      
      <div className="space-y-12">
        {contentItems.map((item, index) => (
          <div key={index}>
            <EmbeddedContent {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
