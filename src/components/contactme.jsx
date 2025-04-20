import React, { useRef, useState } from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';
import Footer from './myfooter';
import { ShineBorder } from './magicui/shine-border';

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('service_cgvlnap', 'template_fdg4ia7', form.current, 'tA7SPg_USOw6-DCl6')
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
