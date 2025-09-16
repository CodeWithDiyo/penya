// app/sports-and-fun/page.tsx
import EmbeddedContent from '@/components/EmbeddedContent';
import { ContentItem } from '@/types/content';

export default function SportsAndHealthPage() {  // Fixed component name
  // Featured affiliate product for the overlay CTA
  const featuredProduct = {
    text: "The best online therapy community- want to access therapy from Home or anywhrer? try online therapy now ",
    link: "https://onlinetherapy.go2cloud.org/SHhd"
  };
  const contentItems: ContentItem[] = [
    {
    "type": "youtube",
    "videoId": "lG5fBDsSixM",
    "title": "SportsHD- football moments",
    "description": "Moments that Cannot be Repeated in Football",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["football", "highlights"]
  },
  {
    "type": "youtube",
    "videoId": "u6VDTpla4AY",
    "title": "TiboinShape - weight loss",
    "description": "Best exercise to lose weight fast !! 🔥😱",
    "ctaText": "African lean belly- Best weight loss supplements (50% discount)",
    "affiliateLink": "https://www.digistore24.com/redir/382628/Diyowlink/",
    "tags": ["fitness", "health"]
  },
  {
    "type": "youtube",
    "videoId": "-GXfLY4-d8w",
    "title": "you are strong",
    "description": "YOU ARE STRONG - Inspiring Speech On Depression & Mental Health",
    "ctaText": "The best online therapy community- want to access therapy? go one on one with a therapist",
    "affiliateLink": "https://onlinetherapy.go2cloud.org/SHhd",
    "tags": ["motivation", "mental-health"]
  },
  {
    "type": "youtube",
    "videoId": "LnJwH_PZXnM",
    "title": "TEDx talks",
    "description": "How not to take things personally? | Frederik Imbo",
    "ctaText": "The best online therapy community- want to access therapy? go one on one with a therapist",
    "affiliateLink": "https://onlinetherapy.go2cloud.org/SHhd",
    "tags": ["self-improvement", "talk"]
  },
  {
    "type": "youtube",
    "videoId": "b4_PA7GsLwA",
    "title": "messi- best skills",
    "description": "50 Messi Skills that Stopped the Internet",
    "ctaText": "The best crypto masterclass by keystone research group (FREE ACCESS)",
    "affiliateLink": "https://keystoneinvestors.com/event-24/?utm_source=ds24&utm_medium=email&utm_campaign=[AFFILIATE]#aff=Diyowlink",
    "tags": ["football", "skills"]
  },
  {
    "type": "youtube",
    "videoId": "mhfJSTJTnXU",
    "title": "Ronaldo- best skills",
    "description": "Cristiano Ronaldo 100 Legendary Skills Impossible To Forget",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["football", "skills"]
  }
 
    // Add more items as needed
  ];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pt-10">
      <h1 className="text-3xl font-bold mb-8 pt-18">Sports and Health</h1>
      
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
