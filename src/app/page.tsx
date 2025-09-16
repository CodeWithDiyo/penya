// app/page.tsx
import EmbeddedContent from '@/components/EmbeddedContent';
import CTAOverlay from '@/components/CTAOverlay';
import { ContentItem } from '@/types/content';


// Trending content data
const trendingContent: ContentItem[] = [
  {
    "type": "youtube",
    "videoId": "_ZsZ4-HyjCg",
    "title": "UR cristiano - with mrBeast",
    "description": "I face off with MrBeast",
    "ctaText": "Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["football", "mrbeast"]
  },
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
    "videoId": "uYVrqfaoHLk",
    "title": "khaby.lame- samsung galaxy",
    "description": "Khaby x Samsung Galaxy, lets head to UCLA to shoot hoops with Sebastian Mack! #withgalaxy",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["comedy", "brand"]
  },
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
  "videoId": "Z4hVGCWH1Kc",
  "title": "MrBeast - Clean Water Initiative",
  "description": "2,000,000 People Get Clean Water For The First Time!",
  "ctaText": "the best VIP crypto masterclass by intelligence cryptocurrency (50% discount)",
  "affiliateLink": "https://www.digistore24.com/redir/363385/Diyowlink/",
  "tags": ["charity", "viral", "youtube"]
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
    "type": "youtube",
    "videoId": "b4_PA7GsLwA",
    "title": "messi- best skills",
    "description": "50 Messi Skills that Stopped the Internet",
    "ctaText": "The best crypto masterclass by keystone research group (FREE ACCESS)",
    "affiliateLink": "https://keystoneinvestors.com/event-24/?utm_source=ds24&utm_medium=email&utm_campaign=[AFFILIATE]#aff=Diyowlink",
    "tags": ["football", "skills"]
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
  },
  {
    "type": "youtube",
    "videoId": "CPLxHAgIdXY",
    "title": "coin bureau",
    "description": "Rich People Are LEAVING Their Countries! Here is WHY",
    "ctaText": "Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["crypto", "news"]
  },
  {
    "type": "youtube",
    "videoId": "14HIIUjOLGY",
    "title": "coin bureau- crypto trading guide",
    "description": "Crypto Trading Guide: Step-by-Step For Complete Beginners",
    "ctaText": "Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["crypto", "tutorial"]
  },
  {
    "type": "youtube",
    "videoId": "mhfJSTJTnXU",
    "title": "Ronaldo- best skills",
    "description": "Cristiano Ronaldo 100 Legendary Skills Impossible To Forget",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["football", "skills"]
  },
  {
    "type": "youtube",
    "videoId": "ekl4Tc5-qJ4",
    "title": "crypto banter",
    "description": "How To Trade Crypto on Bybit! (Beginners Tutorial)",
    "ctaText": "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["crypto", "tutorial"]
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
    "videoId": "KvN3JXICzdM",
    "title": "AI uncovered- 20 new tech",
    "description": "Top 20 New Technology Trends That Will Define the Future",
    "ctaText": "Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["technology", "ai"]
  },
  {
    "type": "youtube",
    "videoId": "qrvK_KuIeJk",
    "title": "60 minutes- Godfather of AI",
    "description": "\"Godfather of AI\" Geoffrey Hinton: The 60 Minutes Interview",
    "ctaText": "Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    "affiliateLink": "https://partner.bybit.com/b/aff_7_137622",
    "tags": ["ai", "interview"]
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
  }

];

export default function Home() {
  // Featured affiliate product for the overlay CTA
  const featuredProduct = {
    text: "Bybit: Earn upto $30, 000 in rewards when you sign up and trade on bybit",
    link: "https://partner.bybit.com/b/aff_7_137622"
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pt-8">
      {/* Hero Section */}
      <section className="text-center mb-12 pt-10">
        <h1 className="text-4xl pt-18 font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Trending Now
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the most popular opportunities, educative contents, and the most trending contents on the internet
        </p>
      </section>

      {/* Content Grid */}
      <div className="space-y-12">
        {trendingContent.map((item, index) => (
          <div key={index} className={index === 0 ? 'ring-2 ring-blue-500 rounded-lg p-2' : ''}>
            <EmbeddedContent {...item} />
          </div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <section className="mt-16 bg-gray-50 rounded-xl p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Get Weekly Trends</h2>
        <p className="text-gray-600 mb-4">Join our newsletter to receive the hottest deals every Friday</p>
        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Floating CTA Overlay */}
      <CTAOverlay 
        text={featuredProduct.text}
        link={featuredProduct.link}
        delay={10000} // Show after 10 seconds
      />
    </div>
  );
}
