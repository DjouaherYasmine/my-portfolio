import react from 'react';
import beaver from "/beaver.svg";
import foodieland from "/foodieland.svg";
import foodninja from "/foodninja.svg";
import dpi from "/dpi.svg";
import { Icon } from '@iconify/react';
import { BlurFade } from "@/components/magicui/blur-fade";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function projects() {
    const projects = [
            {
              title: 'Beaver – Artisan Services Mobile App',
              description: 'Beaver is a Flutter-based mobile app that connects customers with local artisans for home services. I worked on the frontend, integrated it with the backend, and implemented geolocation features to enable location-based service filtering. The app streamlines service requests, enhancing accessibility and convenience for users.',
              image: beaver, 
              techStack: ['logos:flutter', 'logos:mysql', 'logos:nodejs-icon', 'simple-icons:express'],
              liveLink: 'https://drive.google.com/drive/folders/1dLywkEk2zY_8QEUjjbUzPmS_6m3CZrzM?usp=sharing'
            },
            
            {
              title: 'Foodie Land – Recipe Website',
              description: 'Foodie Land is a frontend recipe website built with React, inspired by a Flowbase UI design. It features a responsive and visually appealing layout to showcase curated recipes. This project highlights my skills in component-based architecture, CSS styling, and UI integration using modern React practices.',
              image: foodieland,
              techStack: ['logos:react', 'logos:javascript'],
              liveLink: 'https://foodielandproject-git-master-djouaher-yasmines-projects.vercel.app'
            },
            {
              title: 'Food Delivery App – Frontend mobile app',
              description: 'A mobile app frontend for food delivery developed with Flutter, based on a UI from TruePixel. The project focuses on clean UI implementation, user-friendly navigation, and a polished mobile-first design, showcasing my ability to translate high-fidelity designs into functional Flutter interfaces.',
              image: foodninja,
              techStack: ['logos:flutter', 'logos:dart'],
              liveLink: 'https://github.com/DjouaherYasmine/food_delivery_app.git'
            },
            {
              title: 'EHR – Electronic Health Record Web App',
              description: 'A full-stack medical records web application featuring frontend, backend, and database layers. I contributed to the frontend development and the integration between frontend and backend, ensuring a smooth and functional user experience for managing patient data.',
              image: dpi,
              techStack: ['logos:angular-icon',
  'logos:typescript-icon',
  'logos:tailwindcss-icon',
  'logos:django-icon',
'logos:python','logos:mysql'],
              liveLink: 'https://github.com/SarahSidAhmed/IGL_PROJECT.git'
            }
          ];

          return(
            <section
      id="projects"
      className="relative py-24 px-4 md:px-16 bg-[#000319] text-white"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <BlurFade>
                  <h2 className="text-4xl md:text-4xl font-bold">
                    <AuroraText>Projects</AuroraText>
                  </h2>
                </BlurFade>
                
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
                {projects.map((project, index) => (
                    <a
                    key={index}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A2E] rounded-2xl p-6 max-w-lg w-full border border-white/10 shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105"
                  >
                  
                    <img
                      src={project.image}
                      alt="Project"
                      className="rounded-xl mb-4 w-full object-cover"
                    />
        
                    <h3 className="text-xl font-bold mb-2 text-start">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-start">{project.description}</p>
        
                    <div className="flex justify-start items-center -space-x-4">
  {project.techStack.map((icon, index) => (
    <div
      key={index}
      className="rounded-full w-10 h-10 flex items-center justify-center border border-gray-600/30 bg-[#1A1A2E]"
      style={{ zIndex: 10 - index }} 
    >
      <Icon icon={icon} className="text-white" width="20" height="20" />
    </div>
  ))}
</div>
        
                    
                  
                  </a>
                ))}
              </div>

      </div>
      </section>

          );


}