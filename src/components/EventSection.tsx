import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
}

interface EventSectionProps {
  title: string;
  media: MediaItem[];
  onMediaClick: (item: MediaItem) => void;
  onTitleClick: () => void;
  isExpanded: boolean;
}

const EventSection: React.FC<EventSectionProps> = ({ 
  title, 
  media, 
  onMediaClick, 
  onTitleClick,
  isExpanded 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Display first 3 items by default, all items when expanded
  const displayedMedia = isExpanded ? media : media.slice(0, 3);
  const hasMore = media.length > 3;

  useEffect(() => {
    // Ensure first video autoplays
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
    }
  }, []);

  return (
    <div className="mb-20">
      {/* Section Title */}
      <div 
        className="flex items-center gap-4 mb-8 cursor-pointer group"
        onClick={onTitleClick}
      >
        <h3 className="font-bebas text-4xl md:text-5xl tracking-wider">
          {title}
        </h3>
        {hasMore && (
          <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="font-courier text-xs">
              {isExpanded ? 'SHOW LESS' : `+${media.length - 3} MORE`}
            </span>
            <ArrowRight 
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} 
            />
          </div>
        )}
      </div>

      {/* Media Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ${isExpanded ? '' : ''}`}>
        {displayedMedia.map((item, index) => (
          <div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden border border-white/10 hover:border-white/50 transition-all duration-500"
            onClick={() => onMediaClick(item)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="aspect-square relative overflow-hidden bg-black">
              {/* First item autoplaying video */}
              {index === 0 && item.type === 'video' ? (
                <>
                  <video
                    ref={index === 0 ? videoRef : null}
                    src={item.url}
                    className="w-full h-full object-cover transition-all duration-500"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute top-4 right-4 p-2 border border-white/50 bg-black/50 backdrop-blur-sm">
                    <Play className="w-4 h-4" fill="white" />
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.url}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === item.id ? 'scale-110 blur-[1px]' : 'scale-100'
                    }`}
                  />
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 p-2 border border-white/50 bg-black/50 backdrop-blur-sm">
                      <Play className="w-4 h-4" fill="white" />
                    </div>
                  )}
                </>
              )}
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                hoveredId === item.id ? 'opacity-60' : 'opacity-0'
              }`} />

              {/* Title */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-500 ${
                hoveredId === item.id ? 'translate-y-0' : 'translate-y-full'
              }`}>
                <h4 className="font-courier text-sm md:text-base">{item.title}</h4>
                <p className="font-courier text-xs opacity-60 mt-1">
                  {item.type === 'video' ? 'MOTION' : 'VISUAL'}
                </p>
              </div>

              {/* Glitch effect on hover */}
              {hoveredId === item.id && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-white/5 animate-glitch" />
                  <div className="absolute inset-0 bg-white/5 animate-glitch-2" />
                </div>
              )}

              {/* Index number */}
              <div className="absolute top-4 left-4 font-courier text-xs opacity-60">
                {String(index + 1).padStart(3, '0')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
