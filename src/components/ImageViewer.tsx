import React, { useState } from 'react';

interface ImageViewerProps {
  url: string;
  title: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ url, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    // Sit above .grain (9999) / .scanlines (9998)
    // Use either overlay-exempt (utility) OR Tailwind z-[11000]
    <div className="relative inline-block overlay-exempt z-[11000]">
      <div className="relative bg-black p-[5px]">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-courier text-sm animate-pulse">LOADING...</div>
          </div>
        )}

        <img
          src={url}
          alt={title}
          className={`max-w-[90vw] max-h-[80vh] w-auto h-auto transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          draggable={false}
        />

        {/* Title overlay */}
        <div className="absolute bottom-[5px] left-[5px] right-[5px] p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="font-courier text-sm">{title}</h3>
          <p className="font-courier text-xs opacity-60 mt-1">VISUAL</p>
        </div>

        {/* Subtle distortion sheen */}
        <div className="absolute inset-[5px] pointer-events-none mix-blend-screen opacity-10">
          <div className="w-full h-full bg-gradient-to-b from-white to-transparent animate-distort" />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
