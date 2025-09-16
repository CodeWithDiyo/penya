// app/business-and-technology/page.tsx
import EmbeddedContent from '@/components/EmbeddedContent';
import { ContentItem } from '@/types/content';

export default function BusinessAndTechnologyPage() {  // Fixed component name
  // Featured affiliate product for the overlay CTA
  const featuredProduct = {
    text: "Boost your business with AI trend intelligence (quantumrun foresight 50% discount)",
    link: "https://www.digistore24.com/redir/508567/Diyowlink/"
  };
  const contentItems: ContentItem[] = [
    {
  "type": "youtube",
  "videoId": "LGHsNaIv5os",
  "title": "craig percoco- how to invest in crypto",
  "description": "How To Invest in Crypto as A COMPLETE Beginner [2025 GUIDE]!",
  "ctaText": "Bybit: Earn upto $30,000 in rewards when you sign up and trade on bybit",
  "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
  "tags": ["crypto", "investing", "beginner"]
},
{
  "type": "youtube",
  "videoId": "S0RxMYir6zE",
  "title": "school of mentors- best business advice by steve jobs",
  "description": "How The Top 1% Usually START THEIR BUSINESSES | Steve Jobs",
  "ctaText": "Boost your business with AI trend intelligence (quantumrun foresight 50% discount)",
  "affiliateLink": "https://www.digistore24.com/redir/508567/Diyowlink/",
  "tags": ["business", "entrepreneurship", "advice"]
},
{
    "type": "youtube",
    "videoId": "zzKZm4XIhjs",
    "title": "mark tilbury- best side hustle ideas",
    "description": "The Best Side Hustles Ideas To Make $1000/month",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["business", "money"]
  },
  {
    "type": "youtube",
    "videoId": "KvN3JXICzdM",
    "title": "AI uncovered- 20 new tech",
    "description": "Top 20 New Technology Trends That Will Define the Future",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["technology", "ai"]
  },
  {
    "type": "youtube",
    "videoId": "qrvK_KuIeJk",
    "title": "60 minutes- Godfather of AI",
    "description": "\"Godfather of AI\" Geoffrey Hinton: The 60 Minutes Interview",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["ai", "interview"]
  },
    // Add more items as needed
  ];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pt-10">
      <h1 className="text-3xl font-bold mb-8 pt-18">Business and Technology</h1>
      
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
