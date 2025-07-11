import React, { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  thumbnailUrl, 
  videoUrl, 
  title, 
  description,
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsPlaying(true);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={`relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg ${className}`}>
      {!isPlaying ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          ></div>
          <div className="absolute inset-0 video-overlay flex items-center justify-center">
            <div className="text-center text-white max-w-md px-6">
              {description && (
                <p className="text-sm md:text-base mb-4 opacity-90 animate-fade-in-up">
                  {description}
                </p>
              )}
              <button 
                onClick={handlePlay}
                disabled={isLoading}
                className="group relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl button-hover"
              >
                {isLoading ? (
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Play className="w-8 h-8 text-blue-600 ml-1 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </>
                )}
              </button>
              <div className="flex items-center justify-center mt-4 text-sm opacity-75">
                <Volume2 className="w-4 h-4 mr-2" />
                <span>Click to play with sound</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <iframe 
          className="absolute inset-0 w-full h-full"
          src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;