import React from 'react';
import { Icon } from '@iconify/react';

const skills = [
  { name: 'Flutter', icon: 'logos:flutter' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'Angular', icon: 'logos:angular-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'HTML5', icon: 'logos:html-5' },
  { name: 'CSS3', icon: 'logos:css-3' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'TensorFlow', icon: 'logos:tensorflow' },
  { name: 'PyTorch', icon: 'logos:pytorch-icon' },
  { name: 'Python', icon: 'logos:python' },
{ name: 'Tableau', icon: 'logos:tableau-icon' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'mdi:github' },
  { name: 'Numpy', icon :'devicon:numpy'},
  { name: 'Pandas', icon :'devicon:pandas'},
  { name: 'Scikit-learn', icon: 'devicon:scikitlearn' },
  { name: 'Kaggle', icon: 'devicon:kaggle' },
];


const SkillsWall = () => {
  const gridSize = 5; // number of columns
  const totalSlots = Math.ceil(skills.length / gridSize) * gridSize;
  const emptySlots = totalSlots - skills.length;

  const cards = [...skills.map(skill => ({ ...skill, empty: false }))];
  for (let i = 0; i < emptySlots; i++) {
    cards.push({ empty: true });
  }

  return (
    <div className="flex justify-center px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl flex items-center justify-center transition duration-300
              ${card.empty ? 'bg-gradient-to-br from-transparent via-[#111827] to-transparent opacity-10' : 'bg-[#1A1A2E] hover:scale-105'}`}
          >
            {!card.empty && (
              <Icon icon={card.icon} width="40" height="40" className="text-white" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsWall;
