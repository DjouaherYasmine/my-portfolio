import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400 text-center md:text-start">
          
        </p>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/djouaher-yasmine-93a5a3296/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Icon icon="mdi:linkedin" width="24" height="24" />
          </a>
          <a
            href="https://github.com/DjouaherYasmine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Icon icon="mdi:github" width="24" height="24" />
          </a>
          <a
            href="https://www.credly.com/users/djouaher-yasmine#badge-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Icon icon="mdi:certificate" width="24" height="24" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
