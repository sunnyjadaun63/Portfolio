import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 py-10 pb-24">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-white mb-6">Let's Connect</h2>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/sunnyjadaun63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/sunny-jadaun-5a09b3245"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:sunnyjadaun63@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
        </div>

        {/* Developer Credit */}
        <div className="text-gray-400">
          <p className="mb-2">Developed by <span className=" ">Sunny Jadaun</span></p>
          <p className="text-sm text-gray-500">Powered by <span className="font-semibold">React + Vite</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
