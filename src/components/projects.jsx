import react from 'react';
import beaver from "/beaver.svg";
import foodieland from "/foodieland.svg";
import foodninja from "/foodninja.svg";
import dpi from "/dpi.svg";
import { Icon } from '@iconify/react';
import { BlurFade } from "@/components/magicui/blur-fade";
import { AuroraText } from "@/components/magicui/aurora-text";
import { g } from 'framer-motion/client';
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

export default function projects() {
    const projects = [
      {
  title: 'Memory-Centric Optimization for GPU Neural Network Training',
  description: 'A CUDA-based study of performance optimization strategies for shallow neural network training on GPUs. Explores shared-memory tiling, register-level computation, kernel fusion, and full GPU-resident training to eliminate CPU–GPU bottlenecks.',
  image: "/paper.png",
  techStack: [
  'logos:c-plusplus',
  'simple-icons:nvidia',
],
  liveLink: 'https://drive.google.com/file/d/1Lfai3KtGMl3cFwnXd7Q03BM4hQQDdWOU/view?usp=drive_link',
  githubLink: 'https://github.com/selssabilkadid/hwnas-with-metaheuristics-project.git',
},
      {
    title: 'Toxic Comment Detection with BERT',
    description: 'An interactive NLP application for toxic comment detection using a fine-tuned BERT model. Features real-time text classification, confidence scoring, and a full-stack pipeline with FastAPI backend and Streamlit interface for live inference.',
    image: "/toxic_comment_model.png",
    techStack: ['logos:python', 'logos:pytorch-icon', 'logos:hugging-face-icon', 'logos:fastapi-icon', 'logos:streamlit'],
    liveLink: 'https://djouaheryasmine-toxic-comments-model-app-msrkyo.streamlit.app/',
    githubLink: 'https://github.com/DjouaherYasmine/toxic_comments_model.git'
  },        
  {
    title: 'NYC Taxi Fare Prediction',
    description: 'An interactive machine learning application predicting NYC taxi fares using XGBoost models for both regression and classification. Features real-time fare estimation, fare range prediction, and dynamic inputs leveraging temporal, spatial, weather, and demand-based features.',
    image: "/taxi_fare_prediction.png",
    techStack: ['logos:python', 'logos:jupyter', 'devicon:scikitlearn', 'devicon:pandas', 'devicon:numpy', 'logos:streamlit'],
    liveLink: 'https://taxifarepredictionmodel-zzxpfhbqkerndvzp9iefua.streamlit.app/',
    githubLink: 'https://github.com/DjouaherYasmine/taxi_fare_prediction_model.git'
  },
  {
  title: 'Continual Learning on HAR Dataset',
  description: 'A research project studying catastrophic forgetting in neural networks using the UCI HAR dataset. Compares Fine-tuning, Experience Replay, LwF, and EWC under sequential task learning with a shared MLP architecture.',
  image: "/continual-learning.png",
  techStack: ['logos:python', 'devicon:pytorch', 'devicon:numpy', 'devicon:scikitlearn', 'simple-icons:jupyter'],
  liveLink: 'https://djouaheryasmine.github.io/Continual-Learning-UCI-HAR/',
  githubLink: 'https://github.com/DjouaherYasmine/Continual-Learning-UCI-HAR.git'
},
  {
    title: 'Healthcare Visual Analytics Tool',
    description: 'An interactive web dashboard analyzing 10,000+ healthcare records with D3.js visualizations and ArcGIS geospatial mapping. Features bar charts, box plots, heatmaps, and interactive hospital location maps.',
    image: "https://res.cloudinary.com/dzov9om6d/image/upload/v1769119523/map_dcu0gy.png",
    techStack: ['logos:react', 'devicon:d3js', 'logos:tailwindcss-icon', 'logos:javascript', 'simple-icons:arcgis'],
    liveLink: 'https://health-data-dashboard-ruddy.vercel.app/',
    githubLink: 'https://github.com/DjouaherYasmine/Health-Data-Dashboard.git'
  },
            {
              title: 'Beaver – Artisan Services Mobile App',
              description: 'Beaver is a Flutter-based mobile app that connects customers with local artisans for home services. I worked on the frontend, integrated it with the backend, and implemented geolocation features to enable location-based service filtering. The app streamlines service requests, enhancing accessibility and convenience for users.',
              image: "https://res.cloudinary.com/dzov9om6d/image/upload/v1746788292/beaver_yby2rg.svg", 
              techStack: ['logos:flutter', 'logos:mysql', 'logos:nodejs-icon', 'simple-icons:express'],
              liveLink: 'https://drive.google.com/drive/folders/1dLywkEk2zY_8QEUjjbUzPmS_6m3CZrzM?usp=sharing',
              githubLink: 'https://github.com/SarahGhecham/projet2cp.git'
            },
            {
              title: 'EHR – Electronic Health Record Web App',
              description: 'A full-stack medical records web application featuring frontend, backend, and database layers. I contributed to the frontend development and the integration between frontend and backend, ensuring a smooth and functional user experience for managing patient data.',
              image: "https://res.cloudinary.com/dzov9om6d/image/upload/v1746788290/dpi_xozduh.svg",
              techStack: ['logos:angular-icon',
  'logos:typescript-icon',
  'logos:tailwindcss-icon',
  'logos:django-icon',
'logos:python','logos:mysql'],
              liveLink: 'https://github.com/SarahSidAhmed/IGL_PROJECT.git',
              githubLink: 'https://github.com/SarahSidAhmed/IGL_PROJECT.git'
            },
            {
              title: 'Foodie Land – Recipe Website',
              description: 'Foodie Land is a frontend recipe website built with React, inspired by a Flowbase UI design. It features a responsive and visually appealing layout to showcase curated recipes. This project highlights my skills in component-based architecture, CSS styling, and UI integration using modern React practices.',
              image: "https://res.cloudinary.com/dzov9om6d/image/upload/v1746788302/foodieland_ltziuo.svg",
              techStack: ['logos:react', 'logos:javascript'],
              liveLink: 'https://foodieland-pi.vercel.app/',
              githubLink: 'https://github.com/DjouaherYasmine/foodieland.git'
            },

          ];

          return (
  <section
    id="projects"
    className="relative py-24 px-4 md:px-16 bg-[#000319] text-white"
  >
    <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
          <div className="orb orb-5" /> 
          
        </div>
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <BlurFade>
        <h2 className="text-4xl md:text-4xl font-bold">
          <AuroraText>Projects</AuroraText>
        </h2>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#1A1A2E] rounded-2xl p-6 max-w-lg w-full border border-white/10 shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105"
          >
            {/* MAIN LINK (optional: image + title click) */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt="Project"
                className="rounded-xl mb-4 w-full object-cover"
              />

              <h3 className="text-xl font-bold mb-2 text-start">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-start">
                {project.description}
              </p>
            </a>

            {/* TECH STACK */}
            <div className="flex justify-start items-center -space-x-4">
              {project.techStack.map((icon, index) => (
                <div
                  key={index}
                  className="rounded-full w-10 h-10 flex items-center justify-center border border-gray-600/30 bg-[#1A1A2E]"
                  style={{ zIndex: 10 - index }}
                >
                  <Icon icon={icon} className="text-white" width="20" height="20" style={{ color: icon === 'simple-icons:nvidia' ? '#76b900' : undefined }}/>
                </div>
              ))}
            </div>

            {/* BOTTOM RIGHT ICONS */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <Icon icon="simple-icons:github" width="22" height="22" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


}