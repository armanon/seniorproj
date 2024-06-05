// src/components/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeString = `${timeLeft.days || 0}d ${timeLeft.hours || 0}h ${timeLeft.minutes || 0}m ${timeLeft.seconds || 0}s`;

  return <p>{timeLeft.days !== undefined ? timeString : "Loading timer..."}</p>;
}

function Home() {
  const releaseDate = "2024-08-22T00:00:00";

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div className="home">
      <div className="content">
        <div className="home-image" data-aos="fade-up">
          <img src="/LOGO_KAIN.jpg" alt="Kain" />
        </div>
        
        <p data-aos="fade-up">KAIN is an up and coming melodic producer with an ear for music like no other. With genre-defying music, KAIN’s art and talent speaks for itself. Already garnering attention from established musicians in the electronic scene, KAIN is looking to create a lasting impact and change electronic music forever.</p>
        <div className="upcoming-release" data-aos="fade-up">
          <h2>Upcoming Release</h2>
<p>Buttons</p>
          <CountdownTimer targetDate={releaseDate} />
          <h2>Latest Release</h2>
          <p>Do It For Myself</p>
          <p>March 22, 2024</p>
          <img src="/difmlogo.png" alt="Cover Art" />
        </div>
        <div className="releases" data-aos="fade-up">
          <h2>Releases</h2>
<p>Feel Your Lovin'</p>
          <p>August 18, 2023</p>
<img src="/fyllogo.jpg" alt="Cover Art fyl" />
          <p>
          </p>
        </div>
      </div>
      <div className="instagram-reels" data-aos="fade-up">
        <h2>Instagram Reels</h2>
        <iframe src="https://www.instagram.com/reel/C7rnKzVpSCH/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      </div>
      <div className="social-media-links" data-aos="fade-up">
        <a href="https://www.instagram.com/kainmusicofficial/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="your-facebook-url" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://open.spotify.com/artist/3hUzmwo4uCNNY5XS1h3GP0?si=aQ5FkeauSNWlIx1fYatHLg" target="_blank" rel="noopener noreferrer">Spotify</a>
        <a href="https://music.apple.com/us/artist/kain/1719080281" target="_blank" rel="noopener noreferrer">Apple Music</a>
        <a href="discord.gg" target="_blank" rel="noopener noreferrer">Discord</a>
      </div>
    </div>
  );
}

export default Home;
