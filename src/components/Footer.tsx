import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 py-10 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <Zap size={24} className="text-purple-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Opt2AI
            </span>
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Transform your Markdown to DOCX with AI-powered precision and ease.
          </p>
          <div className="flex space-x-4 mt-6">
            <SocialIcon icon={<Github size={20} />} />
            <SocialIcon icon={<Twitter size={20} />} />
            <SocialIcon icon={<Linkedin size={20} />} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-3">
            <FooterLink label="Features" />
            <FooterLink label="Integrations" />
            <FooterLink label="API" to="/api" />
            <FooterLink label="Documentation" to="/docs" />
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <FooterLink label="Blog" />
            <FooterLink label="Community" />
            <FooterLink label="Support" />
            <FooterLink label="Status" />
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <FooterLink label="About" />
            <FooterLink label="Careers" />
            <FooterLink label="Privacy" />
            <FooterLink label="Terms" />
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Opt2AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ label, to = "#" }: { label: string; to?: string }) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-white transition-colors">
      {label}
    </Link>
  </li>
);

export default Footer;