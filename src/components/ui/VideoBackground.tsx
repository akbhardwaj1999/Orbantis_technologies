'use client';

interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
}

const VideoBackground = ({
  videoSrc,
  overlayOpacity = 0.7,
  className = '',
  children,
}: VideoBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
