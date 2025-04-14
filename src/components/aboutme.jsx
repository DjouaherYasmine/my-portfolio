import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import esiLogo from "../assets/esi_logo1.svg";
import { motion } from "framer-motion";
import cselogo from "../assets/cselogo.svg";
import caalogo from "../assets/caalogo.svg";
import datahacklogo from "../assets/datahacklogo.svg";




export default function AboutMe() {

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
      </div>
    </section>
  );
}
