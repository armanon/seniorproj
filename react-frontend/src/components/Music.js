// src/components/Music.js
import React, { useState, useEffect } from 'react';
import './Music.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Directly defining the CountdownTimer component within Music.js
function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Format the time left as a string
  const timeString = `${timeLeft.days || 0}d ${timeLeft.hours || 0}h ${timeLeft.minutes || 0}m ${timeLeft.seconds || 0}s`;

  return <p>{timeLeft.days !== undefined ? timeString : "Loading timer..."}</p>;
}

function Music() {
  const releaseDate = "2024-08-22T00:00:00"; // Example release date
  const [embedType, setEmbedType] = useState('spotify'); // State to toggle between Spotify and Apple Music

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  const handleEmbedTypeChange = (type) => {
    setEmbedType(type);
  };

  return (
    <div className="music">
      <h2 data-aos="fade-down">Music</h2>
      <div className="upcoming-release" data-aos="fade-up">
        <h3>UPCOMING RELEASE</h3>
        <p>Buttons</p>
        <CountdownTimer targetDate={releaseDate} />
        <h3>LATEST RELEASE</h3>
        <p>Do It For Myself</p>
        <p>March 22, 2024</p>
        <img src="/difmlogo.png" alt="Cover Art" />
        <h3>PREVIOUS RELEASE</h3>
        <p>Feel Your Lovin'</p>
        <p>August 18, 2023</p>
        <img src="/fyllogo.jpg" alt="Another Image" />
      </div>
      <div className="music-links" data-aos="fade-up">
        <h3>Listen on</h3>
        <button onClick={() => handleEmbedTypeChange('spotify')}>Spotify</button>
        <button onClick={() => handleEmbedTypeChange('apple')}>Apple Music</button>
      </div>
      <div className="spotify-embeds" data-aos="fade-up">
        {embedType === 'spotify' && (
          <>
            <h3>Do It For Myself</h3>
            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/4SXZdkt0vQl9Rxsj7yfICY?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <h3>Feel Your Lovin'</h3>
            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/0lwYzmHvA5RVKWYsNnKQ48?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </>
        )}
        {embedType === 'apple' && (
          <>
            <h3>Do It For Myself</h3>
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/do-it-for-myself/1731000307?i=1731000308"></iframe>
            <h3>Feel Your Lovin'</h3>
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/feel-your-lovin/1699426043?i=1699426045"></iframe>
          </>
        )}
      </div>
    </div>
  );
}

export default Music;
