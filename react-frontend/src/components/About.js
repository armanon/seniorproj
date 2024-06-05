

// src/components/About.js
import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Ensure the animation happens only once
    });
  }, []);

  return (
    <div className="about">
      <h2 data-aos="fade-down">About</h2>
      <div className="portrait" data-aos="fade-up">
        <img src="/MOCKUP.jpg" alt="Portrait" />
      </div>
      <div className="biography" data-aos="fade-up">
        <h3>Biography</h3>
        <p>
          KAIN is a music producer duo from Los Angeles, California. KAIN embarked on a remarkable journey towards becoming a music producer rooted in their passion cultivated since childhood. Introduced to the world of music through piano lessons under the guidance of a conductor of the Armenian National Orchestra, their exceptional talent and perfect pitch quickly became evident. They expanded his musical repertoire through dedication and a love for the art, mastering the violin, guitar and saxophone under the tutelage of other renowned instructors from young ages. Despite one brother facing intermittent challenges and health problems due to illness from the young age of 12, KAIN's determination never wavered. Through the health challenges, they found comfort in electronic dance music as it served them as a means to cope with his condition. Following a life-saving surgery, Neema was bedridden and he sought to pursue music production as a means of self-expression and fulfillment in all that he faced. Influenced by icons like Tiesto, KSHMR, and Bingo Players, they immersed themselves in electronic dance music, navigating through the highs and lows of honing their craft and discovering a unique sound through years of experimentation. Their idols, and seeing the effect of their music on people all over the world inspired KAIN to begin their unique production journey. They seeks to encourage others to overcome their situations and provide the same comfort they had received from the art of music. After thousands of hours perfecting their craft, their debut collaboration on Hysteria Records/Spinnin' Records marked a significant milestone in their musical endeavors, paving the way for their solo release, "Do It For Myself." This poignant track reflects not only his musical journey but also the personal struggles they have overcome. With a vision to infuse joy and vitality into dance music, KAIN aspires to create anthems that resonate with audiences from all walks of life, revitalizing the spirit of the genre and fostering a sense of unity and euphoria on the dance floor. 
        </p>
      </div>
      <div className="follow-us" data-aos="fade-up">
        <h3>FOLLOW US</h3>
        <div className="social-media-links">
          <a href="https://www.instagram.com/kainmusicofficial/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="your-facebook-url" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://open.spotify.com/artist/3hUzmwo4uCNNY5XS1h3GP0?si=aQ5FkeauSNWlIx1fYatHLg" target="_blank" rel="noopener noreferrer">Spotify</a>
          <a href="https://music.apple.com/us/artist/kain/1719080281" target="_blank" rel="noopener noreferrer">Apple Music</a>
        </div>
      </div>
    </div>
  );
}

export default About;

