import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import esiLogo from "/esi_logo1.svg";
import { motion } from "framer-motion";
import cselogo from "/cselogo.svg";
import caalogo from "/caalogo.svg";
import datahacklogo from "/datahacklogo.svg";
import ciscoai from "/cisco_AI.svg";
import ibmai from "/ibm_AI.svg";
import ibmreact from "/ibm_react.svg";
import ciscobadge from "/cisco_AI_badge.png";
import ibmaibadge from "/ibm_AI_badge.png";
import reactbadge from "/ibm_react_badge.png";
import SkillsWall from "./skills";
import beaver from "/beaver.svg";
import foodieland from "/foodieland.svg";
import foodninja from "/foodninja.svg";
import dpi from "/dpi.svg";
import { Icon } from '@iconify/react';





export default function AboutMe() {
    const projects = [
        {
          title: '3D Solar System Planets to Explore',
          description: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
          image: beaver, // Update with the correct relative path to your image
          techStack: ['logos:react', 'logos:tailwindcss-icon', 'logos:typescript-icon', 'logos:threejs'],
          liveLink: '#'
        },
        // Add 3 more project objects to fill the 2x2 grid
        {
          title: 'Another Cool Project',
          description: 'Brief description of another amazing project.',
          image: foodieland,
          techStack: ['logos:flutter', 'logos:nodejs-icon'],
          liveLink: '#'
        },
        {
          title: 'Beaver App',
          description: 'Une application mobile de services de maintenance à domicile eco-respectueuse.',
          image: foodninja,
          techStack: ['logos:dart', 'logos:firebase'],
          liveLink: '#'
        },
        {
          title: 'Creative Portfolio',
          description: 'A portfolio showcasing web design and frontend projects.',
          image: dpi,
          techStack: ['logos:html-5', 'logos:css-3', 'logos:javascript'],
          liveLink: '#'
        }
      ];

    const certificates = [
        {
            badgelink:'https://www.credly.com/badges/5077c127-63eb-4d70-b791-0c17a2cfb16b/public_url',
          image: ciscoai,
          badge:ciscobadge,
          title: 'Cisco Networking Academy – AI Fundamentals',
          description: 'Certifies my foundational knowledge of AI concepts and applications through the Cisco–IBM AI Fundamentals course',
          link: 'https://drive.google.com/file/d/12RaMMZPah6D-G9MbjDEnO5oCCnA6EebG/view?usp=sharing',
        },
        {
            badgelink: 'https://www.credly.com/badges/19a2966e-87c0-4a49-9a62-6d8b80dee6e2/public_url',
            image: ibmai,
            badge: ibmaibadge ,
            title: 'IBM – AI Fundamentals Certificate',
            description: 'Earned via IBM SkillsBuild, this certificate confirms my practical understanding of AI tools like Watson Studio, covering model training, data analysis, and ethical tech use.',
            link: 'https://drive.google.com/file/d/1Ef0dNFvtms8qtqqyIyMJPGGZM1NT1DW3/view?usp=sharing',
          },
          {
            badgelink: 'https://www.credly.com/badges/ae14460e-b654-455e-bd2d-46932acf651e/public_url',
            image: ibmreact,
            badge: reactbadge,
            title: 'Developing Front-End Apps with React',
            description: 'Credential earned through edX confirms my ability to develop responsive UIs using React, JavaScript, and modern front-end tools, following IBM’s industry standards.',
            link: 'https://courses.edx.org/certificates/a5cb5e2aedb441dea458957044672e96',
          },
      ];
      const isOdd = certificates.length % 2 !== 0;

    const timelineData = [
        {
          date: "September 2024",
          role: "Relev Department Assistant, CSE Club",
          details: [
            "Coordinated departmental communications and event organization",
            "Prepared comprehensive reports, descriptive files, and sponsorship documentation",
            "Enhanced department efficiency through streamlined operations and improved outreach initiatives",
            "Provided technical and logistical support for department projects",
          ],
          logo: cselogo,
        },
        {
          date: "Avril 2024",
          role: "Project Lead, CSE Around Algeria 2",
          details: [
            "Led national project expanding CSE community engagement across multiple wilayas",
            "Orchestrated international workshop collaboration with USA partners",
            "Managed comprehensive event planning, partnership development, and logistics",
            "Scaled project impact through diverse student activities and community initiatives",
          ],
          logo: caalogo,
        },
        {
          date: "March 2024",
          role: "Event Organizer, DataHack",
          details: [
            "Contributed to organizing a data-focused hackathon connecting research and industry",
            "Created engaging environment for data enthusiasts, researchers, and professionals",
            "Supported event logistics and operations",
            "Facilitated knowledge sharing and skill development activities",
          ],
          logo: datahacklogo,
        },
      ];
    
      
      
  return (
    <section
      id="about"
      className="relative py-24 px-4 md:px-16 bg-[#000319] text-white"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <BlurFade>
          <h2 className="text-4xl md:text-4xl font-bold">
            <AuroraText>Description</AuroraText>
          </h2>
        </BlurFade>

        <BlurFade>
        <div className="p-6 bg-[#0f0f23] rounded-3xl shadow-lg relative overflow-hidden mb-10">
        <ShineBorder />
          <p className="text-lg md:text-xl text-white leading-relaxed">
          I'm a third-year Computer Science student passionate about solving real-world problems through technology. With hands-on experience in mobile and web development, event leadership, and community building, I thrive on creating impactful solutions. From leading national projects to designing user-friendly applications, my journey is driven by curiosity, creativity, and a desire to make a difference.
          </p>
          </div>
        </BlurFade>

        <BlurFade>
          <h2 className="text-4xl md:text-4xl font-bold">
            <AuroraText>Education</AuroraText>
          </h2>
        </BlurFade>
        <BlurFade>
        <div className="text-white flex flex-col md:flex-row items-center justify-between p-6 rounded-xl shadow-md max-w-5xl mx-auto lg:gap-80 mb-10">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img src={esiLogo} alt="ESI Logo" className="max-w-[300px] w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold">
        Engineering Degree in<br />Computer Science 
        </h2>
        <p className="text-sm mt-2">2022 - 2027</p>
      </div>
    </div>
    </BlurFade>
    <BlurFade>
          <h2 className="text-4xl md:text-4xl font-bold">
            <AuroraText>Experience</AuroraText>
          </h2>
        </BlurFade>
        <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 h-full w-1 bg-[#CBACF9] opacity-50 rounded" />

        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-10 flex flex-col md:flex-row items-start md:items-center relative"
          >
            {/* Dot */}
            <div className="z-10 w-5 h-5 rounded-full bg-[#000319] border-4 border-[#CBACF9] absolute left-6 top-2 shadow-md" />

            {/* Text Section */}
            <div className="ml-16 md:flex-1 mr-10">
              <h3 className="text-xl font-semibold text-white text-start">{item.date}</h3>
              <h4 className="text-sm text-white mt-1 text-start">{item.role}</h4>
              <ul className="text-sm text-gray-300 mt-2 list-disc list-inside space-y-1 text-start">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

           
            <div className="mt-4 md:mt-0 md:ml-auto w-full md:w-auto flex md:block justify-center md:justify-end">
              <img src={item.logo} alt="logo"  className={`object-contain ${item.logo.includes('cselogo') ? 'w-50 h-50' : 'w-40 h-40'}`} />
            </div>
          </motion.div>
        ))}
      </div>
      <BlurFade>
          <h2 className="text-4xl md:text-4xl font-bold">
            <AuroraText>Certificates</AuroraText>
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {certificates.map((item, index) => {
  const isOdd = certificates.length % 2 !== 0;
  const isLast = index === certificates.length - 1;

  return (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[#1A1A2E] rounded-2xl p-6 max-w-lg w-full border border-white/10 shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105
        ${isOdd && isLast ? 'md:col-span-2 md:mx-auto' : ''}`}
    >
    
      <img
        src={item.image}
        alt="Certificate"
        className="rounded-lg object-contain mb-6"
      />

      {/* Title with badge */}
      <div className="flex items-start w-full gap-3 mb-4">
  

  {/* Text content on the right */}
  <div>
    <h3 className="text-white text-xl font-semibold mb-1 text-start">
      {item.title}
    </h3>
    <p className="text-gray-300 text-sm text-start">
      {item.description}
    </p>
  </div>
  <img src={item.badge} alt="Badge" className="w-20 h-20 mt-1" onClick={() => window.open(item.badgelink, '_blank')} />
</div>

    
    </a>
  );
})}

      </div>
      <BlurFade>
          <h2 className="text-4xl md:text-4xl font-bold">
            <AuroraText>Skills</AuroraText>
          </h2>
        </BlurFade>
      <SkillsWall />
      
        
      </div>
    </section>
  );
}
