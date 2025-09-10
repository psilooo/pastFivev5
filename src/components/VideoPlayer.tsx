import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <div className="relative inline-block">
      <div className="relative bg-black p-[5px]">
        <video
          ref={videoRef}
          src={url}
          className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain"
          autoPlay
          loop
          onTimeUpdate={handleTimeUpdate}
        />
        
        {/* Custom controls */}
        <div className="absolute bottom-[5px] left-[5px] right-[5px] p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-courier text-sm">{title}</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={togglePlay}
                className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-px bg-white/20 relative">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
