// src/components/Contact.js
import React, { useEffect } from 'react';
import './Contact.css'; // Make sure to create this CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Ensure the animation happens only once
    });
  }, []);

  return (
    <div className="contact">
      <h2 data-aos="fade-down">Contact</h2>
      <p data-aos="fade-up">For music & business: contact@kainmusic.com</p>
      <p data-aos="fade-up">For management & booking: arman@kainmusic.com</p>
      <form data-aos="fade-up">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="social-media-links" data-aos="fade-up">
        <a href="https://www.instagram.com/kainmusicofficial/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="your-facebook-url" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://open.spotify.com/artist/3hUzmwo4uCNNY5XS1h3GP0?si=aQ5FkeauSNWlIx1fYatHLg" target="_blank" rel="noopener noreferrer">Spotify</a>
        <a href="https://music.apple.com/us/artist/kain/1719080281" target="_blank" rel="noopener noreferrer">Apple Music</a>
      </div>
    </div>
  );
}

export default Contact;
