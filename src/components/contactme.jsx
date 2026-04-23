import React, { useRef, useState } from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';
import Footer from './myfooter';
import { ShineBorder } from './magicui/shine-border';
<style>{`
  /* Ambient base glow */
  .hero-glow {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 70% 20%, rgba(99,102,241,.12) 0%, transparent 70%),
      radial-gradient(ellipse 50% 35% at 10% 80%, rgba(167,139,250,.10) 0%, transparent 70%),
      radial-gradient(ellipse 40% 30% at 50% 50%, rgba(56,189,248,.08) 0%, transparent 70%);
  }

  .hero-bg {
    position: absolute; inset: 0; overflow: hidden; pointer-events: none;
  }

  /* Floating orbs */
  .orb {
    position: absolute; border-radius: 50%;
    filter: blur(70px);
    opacity: 0.8;
    will-change: transform;
  }

  .orb-1 {
    width: 320px; height: 320px;
    background: rgba(99,102,241,.15);
    top: -60px; right: 10%;
    animation: float1 10s ease-in-out infinite;
  }

  .orb-2 {
    width: 220px; height: 220px;
    background: rgba(167,139,250,.12);
    bottom: 10%; left: 5%;
    animation: float2 12s ease-in-out infinite;
  }

  .orb-3 {
    width: 160px; height: 160px;
    background: rgba(56,189,248,.10);
    top: 50%; right: 25%;
    animation: float3 9s ease-in-out infinite;
  }

  /* NEW subtle orbs (for depth) */
  .orb-4 {
    width: 140px; height: 140px;
    background: rgba(236,72,153,.08);
    top: 20%; left: 20%;
    animation: float2 14s ease-in-out infinite;
  }

  .orb-5 {
    width: 180px; height: 180px;
    background: rgba(34,197,94,.08);
    bottom: 15%; right: 15%;
    animation: float1 11s ease-in-out infinite;
  }
`}</style>

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('service_4ax2xso', 'template_fdg4ia7', form.current, 'Ye8-TajXVKRfwnLFr')
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('Failed to send message.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-16 bg-[#000319] text-white"
    >
       <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
          
        </div>
        <BlurFade>
            
            
      <div className="max-w-2xl mx-auto bg-[#1A1A2E] p-8 rounded-2xl shadow-md border border-white/10">
      
        <h2 className="text-4xl md:text-4xl font-bold  mb-6 text-center">
        
            <AuroraText>Description</AuroraText>
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#000319] text-white border border-gray-600/30 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#000319] text-white border border-gray-600/30 focus:border-indigo-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-[#000319] text-white border border-gray-600/30 focus:border-indigo-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-[#0f0f23] to-[#15162e] text-white text-md font-small border border-white/10 shadow-md hover:scale-105 transition-transform "
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-gray-300">{status}</p>
        )}
      </div>
      
      </BlurFade>
      
    </section>
    
  );
};

export default ContactSection;
