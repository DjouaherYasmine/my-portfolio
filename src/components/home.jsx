import React from "react";
import profileImg from "../assets/profile_pic.svg";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";
import arrow from "../assets/arrow1.svg";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen bg-[#000319] bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 md:px-16"
    >
      <AnimatedGridPattern />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Side (Text) */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          <BlurFade>
          Shaping Ideas<AuroraText>into  Impactful Ideas</AuroraText>
          </BlurFade>
          </h1>
          <BlurFade>
          <p className="text-lg md:text-lg text-white/80">
          Hi, I’m Djouaher Yasmine, a Passionate Computer Science Student. I love to create and innovate, and I'm always eager to learn new things. My goal is to make a positive impact through technology.
          </p>
          </BlurFade>
          <BlurFade>
          <a
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-[#0f0f23] to-[#15162e] text-white text-md font-small border border-white/10 shadow-md hover:scale-105 transition-transform"
    >
      My resume <img src={arrow} alt="Arrow" className="w-2.5 h-2.5 mt-1" />
    </a>
    </BlurFade>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
        <BlurFade>
        <img
            src={profileImg}
            alt="Profile"
            className="w-80 h-80 md:w-100 md:h-100 rounded-full object-cover"
          />
        </BlurFade>
        </div>
      </div>
    </section>
  );
}
