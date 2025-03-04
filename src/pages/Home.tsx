import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Wand2, Layers, Workflow } from 'lucide-react';
import MarkdownEditor from '../components/MarkdownEditor';
import DocxPreview from '../components/DocxPreview';
import IntegrationSlider from '../components/IntegrationSlider';

const Home = () => {
  const [markdown, setMarkdown] = useState<string>('# Hello Opt2AI\n\nThis is a **markdown** document that will be converted to DOCX format in real-time.\n\n## Features\n\n- Real-time conversion\n- AI-powered formatting\n- Easy to use\n\n> Transform your content effortlessly');

  return (
    <div className="py-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-center"
>
  Transform Markdown to DOCX
  <br />
  <span className="block mt-4 text-lg md:text-xl font-normal italic text-white">
    Empower AI Agents with Seamless Markdown to DOCX Conversion!
  </span>
</motion.h1>

<div className="mb-16"></div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.1, duration: 0.8 }}
  className="mb-6 flex justify-center"
>
  <a
    href="https://www.linkedin.com/in/krishnarajr01"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-lg"
    >
      Connect with Me on LinkedIn
    </motion.button>
  </a>
</motion.div>



        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="/api" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium text-lg flex items-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </motion.button>
          </a>
          <Link to="/api">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gray-800 text-white font-medium text-lg"
            >
              API Access
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Converter Demo */}
      <section className="py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Real-Time Conversion</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Type or paste your Markdown and watch it transform instantly into a DOCX preview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-gray-700">
            <div className="p-4 bg-slate-800 border-b border-gray-700 flex justify-between items-center">
              <h3 className="font-medium">Markdown Input</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <MarkdownEditor value={markdown} onChange={setMarkdown} />
          </div>

          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-gray-700">
            <div className="p-4 bg-slate-800 border-b border-gray-700 flex justify-between items-center">
              <h3 className="font-medium">DOCX Preview</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <DocxPreview markdown={markdown} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powered by Advanced AI</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI engine ensures perfect formatting and conversion every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Wand2 className="text-purple-400" size={32} />}
            title="AI-Powered Conversion"
            description="Our advanced AI understands context and formatting nuances to deliver perfect DOCX files."
          />
          <FeatureCard
            icon={<Zap className="text-cyan-400" size={32} />}
            title="Real-Time Processing"
            description="See changes instantly as you type with our lightning-fast conversion engine."
          />
          <FeatureCard
            icon={<Layers className="text-pink-400" size={32} />}
            title="Format Preservation"
            description="Maintain all your formatting, styles, and document structure during conversion."
          />
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect Opt2AI with your favorite automation tools and workflows.
          </p>
        </div>

        <IntegrationSlider />
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Documents?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Get started with Opt2AI today and experience the future of document conversion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://youtube.com/@kyleautomates01?si=Hp-GmH1N8GAMXZmo" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-white text-purple-900 font-medium text-lg"
                >
                  Watch Demo
                </motion.button>
              </a>
              <Link to="/api">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gray-800 bg-opacity-50 text-white font-medium text-lg flex items-center gap-2"
                >
                  API Documentation <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-slate-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Home;
