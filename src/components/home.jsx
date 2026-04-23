import React, { useEffect, useRef } from "react";
import profileImg from "/profile_pic.svg";
import arrow from "/arrow1.svg";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');


       

        /* --- Background layers --- */
        .hero-bg {
          position: absolute; inset: 0; overflow: hidden; pointer-events: none;
        }

        /* Static grid */
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,.07) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%);
        }

        /* Radial ambient glow */
        .hero-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 50% at 65% 40%,
            rgba(99,102,241,.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 20% 70%,
            rgba(167,139,250,.12) 0%, transparent 60%);
        }

        /* Floating orbs */
        .orb {
          position: absolute; border-radius: 50%;
          filter: blur(60px); will-change: transform;
        }
        .orb-1 {
          width: 400px; height: 400px;
          background: rgba(99,102,241,.15);
          top: -80px; right: 5%;
          animation: float1 8s ease-in-out infinite;
        }
        .orb-2 {
          width: 250px; height: 250px;
          background: rgba(167,139,250,.12);
          bottom: 5%; left: 8%;
          animation: float2 10s ease-in-out infinite;
        }
        .orb-3 {
          width: 180px; height: 180px;
          background: rgba(56,189,248,.1);
          top: 40%; right: 20%;
          animation: float3 7s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(-30px, 40px) scale(1.05); }
        }
        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(20px,-30px); }
        }
        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(-15px, 20px); }
        }

        /* --- Avatar ring --- */
        .avatar-wrap {
          position: relative; display: inline-block;
        }
        .avatar-ring {
          position: absolute; inset: -6px; border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #6366f1, #a78bfa, #38bdf8, #6366f1
          );
          animation: spin 6s linear infinite;
          z-index: 0;
        }
        .avatar-ring::after {
          content: ''; position: absolute; inset: 4px;
          background: #000319; border-radius: 50%;
          z-index: 1;
        }
        .avatar-img {
          position: relative; z-index: 2;
          border-radius: 50%; display: block;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Floating dots around avatar */
        .dot {
          position: absolute; border-radius: 50%; will-change: transform;
        }
        .dot-1 {
          width: 8px; height: 8px; background: #6366f1;
          top: 10%; right: -12px;
          animation: orbit1 4s ease-in-out infinite;
        }
        .dot-2 {
          width: 5px; height: 5px; background: #38bdf8;
          bottom: 15%; left: -10px;
          animation: orbit2 5s ease-in-out infinite;
        }
        .dot-3 {
          width: 6px; height: 6px; background: #a78bfa;
          top: 55%; right: -14px;
          animation: orbit3 6s ease-in-out infinite;
        }
        @keyframes orbit1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(6px,-8px)} }
        @keyframes orbit2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-6px,6px)} }
        @keyframes orbit3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(8px,4px)} }

        /* --- Text & badge --- */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border-radius: 9999px;
          border: 1px solid rgba(99,102,241,.35);
          background: rgba(99,102,241,.08);
          backdrop-filter: blur(8px);
          font-size: .78rem; font-weight: 500; color: #a5b4fc;
          letter-spacing: .04em; text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #6366f1;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100%{ box-shadow: 0 0 0 0 rgba(99,102,241,.6); }
          50%    { box-shadow: 0 0 0 5px rgba(99,102,241,0); }
        }

        .hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #fff;
          margin: 0 0 1.25rem;
        }
        .hero-title .accent {
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #38bdf8 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-size: 1.05rem; line-height: 1.75;
          color: rgba(255,255,255,.65);
          max-width: 500px; margin: 0 0 2rem;
        }

        /* --- Pill tags --- */
        .tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 2rem; }
        .tag {
          font-size: .78rem; padding: 4px 12px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.55); background: rgba(255,255,255,.04);
          transition: border-color .2s, color .2s;
        }
        .tag:hover { border-color: rgba(99,102,241,.5); color: #a5b4fc; }

        /* --- CTA button --- */
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 26px; border-radius: 12px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          color: #fff; font-size: .95rem; font-weight: 500;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: background .25s, border-color .25s, transform .2s;
          position: relative; overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(99,102,241,.25), rgba(167,139,250,.15));
          opacity: 0; transition: opacity .25s;
        }
        .cta-btn:hover { transform: translateY(-2px); border-color: rgba(99,102,241,.4); }
        .cta-btn:hover::before { opacity: 1; }

        /* --- Scroll hint --- */
        .scroll-hint {
          position: absolute; bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          color: rgba(255,255,255,.3); font-size: .72rem; letter-spacing: .08em;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, rgba(99,102,241,.6), transparent);
          animation: scroll-drop 2s ease-in-out infinite;
        }
        @keyframes scroll-drop {
          0%  { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100%{ transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }

        /* --- Reveal animations --- */
        .reveal { opacity: 0; transform: translateY(20px); animation: reveal .6s ease forwards; }
        .reveal-right { opacity: 0; transform: translateX(24px); animation: reveal-right .7s ease forwards; }
        @keyframes reveal       { to { opacity:1; transform:translateY(0); } }
        @keyframes reveal-right { to { opacity:1; transform:translateX(0); } }

        .d0 { animation-delay: .1s; }
        .d1 { animation-delay: .25s; }
        .d2 { animation-delay: .4s; }
        .d3 { animation-delay: .55s; }
        .d4 { animation-delay: .7s; }
        .d5 { animation-delay: .85s; }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen pt-24 bg-[#000319] flex items-center justify-center px-6 md:px-16"
      >
        {/* Background */}
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
          
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12 md:gap-0">

          {/* ---- Left: Text ---- */}
          <div className="md:w-1/2 text-center md:text-left">

            {/* Headline */}
            <h1 className="hero-title reveal d1">
              Turning Data into<br />
              <span className="accent">Intelligent Solutions</span>
            </h1>

            {/* Description */}
            <p className="hero-desc reveal d2">
              Hi, I'm <strong style={{color:'#fff',fontWeight:500}}>Yasmine Djouaher</strong> a CS student specialising in Data Science & AI.
              I build machine learning systems and analytical tools that create real-world impact.
            </p>

            {/* CTA */}
            <div className="reveal d4">
              <a
                href="https://drive.google.com/file/d/1N23kDK19v1HWrU3DGtjDwMlQAHMJOqlM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                View Resume
                <img src={arrow} alt="" aria-hidden="true" style={{width:'11px',height:'11px',opacity:.75}} />
              </a>
            </div>
          </div>

          {/* ---- Right: Avatar ---- */}
          <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 reveal-right d2">
            <div className="avatar-wrap">
              <div className="avatar-ring" aria-hidden="true" />
              <img
                src={profileImg}
                fetchpriority="high"
                loading="eager"
                alt="Yasmine Djouaher — profile photo"
                className="avatar-img"
                style={{width:'clamp(220px,28vw,340px)', height:'clamp(220px,28vw,340px)', objectFit:'cover'}}
              />
              {/* floating accent dots */}
              <span className="dot dot-1" aria-hidden="true" />
              <span className="dot dot-2" aria-hidden="true" />
              <span className="dot dot-3" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}