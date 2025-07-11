import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See why resellers choose SortMyBusiness
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Watch how our partners are transforming their advisory services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            {!isPlaying ? (
              <>
                <div 
                  className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
                ></div>
                <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
                  <button 
                    onClick={handlePlay}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
                  >
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </button>
                </div>
              </>
            ) : (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="SortMyBusiness Partner Program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;