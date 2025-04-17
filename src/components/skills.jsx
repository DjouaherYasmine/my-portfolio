import React from 'react';
import { Icon } from '@iconify/react';

const skills = [
  { name: 'Flutter', icon: 'logos:flutter' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'Angular', icon: 'logos:angular-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'HTML5', icon: 'logos:html-5' },
  { name: 'CSS3', icon: 'logos:css-3' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'mdi:github' },
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
