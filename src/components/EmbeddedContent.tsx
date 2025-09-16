"use client";
import { useState } from 'react';

type ContentType = 'youtube' | 'tiktok' | 'document';

interface EmbeddedContentProps {
  type: ContentType;
  videoId: string;
  title: string;
  description: string;
  ctaText: string;
  affiliateLink: string;
  tags?: string[];
}

export default function EmbeddedContent({
  type,
  videoId,
  title,
  description,
  ctaText,
  affiliateLink,
  tags = []
}: EmbeddedContentProps) {
  const [showCTA, setShowCTA] = useState(true);
  const [error, setError] = useState(false);

  const getEmbed = () => {
    switch (type) {
      case 'youtube':
        return (
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setError(true)}
              loading="lazy"
            />
          </div>
        );
      case 'tiktok':
        return (
          <div className="relative pb-[125%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.tiktok.com/embed/v2/${videoId}`}
              title={title}
              allowFullScreen
              onError={() => setError(true)}
              loading="lazy"
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <p className="dark:text-gray-200">Video failed to load. <a 
          href={type === 'youtube' 
            ? `https://youtube.com/watch?v=${videoId}` 
            : `https://tiktok.com/video/${videoId}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Watch on {type === 'youtube' ? 'YouTube' : 'TikTok'}
        </a></p>
      </div>
    );
  }

  return (
    <div className="mb-12 relative group">
      <div className="mb-4">
        {getEmbed()}
      </div>
      
      <div className="mt-2">
        <h3 className="text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {showCTA && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4 transition-all duration-300">
            <div className="flex justify-between items-center">
              <p className="font-medium dark:text-white">{ctaText}</p>
              <a 
                href={affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        )}

        <div className="flex space-x-4">
          <button 
            onClick={() => navigator.clipboard.writeText(affiliateLink)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Share
          </button>
          <button 
            onClick={() => setShowCTA(!showCTA)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {showCTA ? 'Hide CTA' : 'Show CTA'}
          </button>
        </div>
      </div>
    </div>
  );
}
