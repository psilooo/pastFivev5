import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
}

interface MediaGridProps {
  items: MediaItem[];
  onItemClick: (item: MediaItem) => void;
}

const MediaGrid: React.FC<MediaGridProps> = ({ items, onItemClick }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {items.map((item, index) => (
    <div
      key={item.id}
      className="relative group cursor-pointer overflow-hidden border border-white/10 hover:border-white/50 transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onItemClick(item)}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      role="button"
      tabIndex={0}
      data-cursor="pointer"
    >
      <div className="aspect-square relative overflow-hidden bg-black overlay-exempt">
        <img
          src={item.type === 'video' ? item.thumbnail : item.url}
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            hoveredId === item.id ? 'scale-110 blur-[1px]' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          hoveredId === item.id ? 'opacity-60' : 'opacity-0'
        }`} />
        {item.type === 'video' && (
          <div className="absolute top-4 right-4 p-2 border border-white/50 bg-black/50 backdrop-blur-sm">
            <Play className="w-4 h-4" fill="white" />
          </div>
        )}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-500 ${
          hoveredId === item.id ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <h3 className="font-courier text-sm md:text-base">{item.title}</h3>
          <p className="font-courier text-xs opacity-60 mt-1">
            {item.type === 'video' ? 'MOTION' : 'VISUAL'}
          </p>
        </div>
      </div>

      <div className="absolute top-4 left-4 font-courier text-xs opacity-60">
        {String(index + 1).padStart(3, '0')}
      </div>
    </div>
  ))}
</div>

  );
};

export default MediaGrid;
