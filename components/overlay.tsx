import React from 'react';

interface VideoOverlayProps {
  videoSource: string | null;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({ videoSource }) => {
  if (!videoSource) {
    return null; // If no video source is provided, don't render the component
  }

  return (
    <div className="video-overlay">
      <video autoPlay controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoOverlay;
