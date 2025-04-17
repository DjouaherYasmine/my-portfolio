import react from 'react';
import beaver from "../assets/beaver.svg";
import foodieland from "../assets/foodieland.svg";
import foodninja from "../assets/foodninja.svg";
import dpi from "../assets/dpi.svg";
import { Icon } from '@iconify/react';
import { BlurFade } from "@/components/magicui/blur-fade";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function projects() {
    const projects = [
            {
              title: '3D Solar System Planets to Explore',
              description: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
              image: beaver, 
              techStack: ['logos:flutter', 'logos:mysql', 'logos:nodejs-icon', 'simple-icons:express'],
              liveLink: 'https://drive.google.com/drive/folders/1dLywkEk2zY_8QEUjjbUzPmS_6m3CZrzM?usp=sharing'
            },
            
            {
              title: 'Another Cool Project',
              description: 'Brief description of another amazing project.',
              image: foodieland,
              techStack: ['logos:react', 'logos:javascript'],
              liveLink: 'https://foodielandproject-git-master-djouaher-yasmines-projects.vercel.app'
            },
            {
              title: 'Beaver App',
              description: 'Une application mobile de services de maintenance à domicile eco-respectueuse.',
              image: foodninja,
              techStack: ['logos:flutter', 'logos:dart'],
              liveLink: '#'
            },
            {
              title: 'Creative Portfolio',
              description: 'A portfolio showcasing web design and frontend projects.',
              image: dpi,
              techStack: ['logos:angular-icon',
  'logos:typescript-icon',
  'logos:tailwindcss-icon',
  'logos:django-icon',
'logos:python','logos:mysql'],
              liveLink: 'https://github.com/DjouaherYasmine/dpi_project'
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
        
                    <div className="flex justify-start items-center mt-6 -space-x-4">
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