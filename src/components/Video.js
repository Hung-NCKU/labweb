import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <section className="connect">
      <video
        className="video-container"
        autoPlay
        muted
        loop
        playsInline
 
      >
        <source src="/video/connect.mp4" type="video/mp4" />
        Sorry, your browser does not support embedded videos.
      </video>

      <div className="video-banner">
        <h2 className="section-title">Welcome to INHPC</h2>
        <p className="video-text">High-performance computing & interconnection networks.</p>
      </div>
      
    </section>
  );
};

export default Video;


