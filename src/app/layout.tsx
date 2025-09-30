import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import './globals.css';
// Modify the root layout to include TikTok script
import Script from 'next/script';
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PENYA',
  description: 'Discover the best deals and trending products',
  openGraph: {
    title: 'PENYA',
    description: 'Discover the best deals and trending products',
    url: 'https://yourwebsite.com',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIYOWLINK',
    description: 'Discover the best deals and trending products',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXX');
            `,
          }}
        />
      </head>
      <body className="bg-gray-50">
        <Script 
  strategy="afterInteractive" 
  src="https://www.tiktok.com/embed.js" 
/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
