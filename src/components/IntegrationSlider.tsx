import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  {
    name: 'Zapier',
    icon: '🔄',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'n8n',
    icon: '🔌',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Make',
    icon: '⚙️',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'IFTTT',
    icon: '🔗',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    name: 'Pipedream',
    icon: '📊',
    color: 'from-green-500 to-teal-500'
  },
  {
    name: 'Automate.io',
    icon: '🤖',
    color: 'from-yellow-500 to-amber-600'
  }
];

const IntegrationSlider = () => {
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex space-x-8"
      >
        {[...integrations, ...integrations].map((integration, index) => (
          <IntegrationCard key={index} integration={integration} />
        ))}
      </motion.div>
    </div>
  );
};

const IntegrationCard = ({ integration }: { integration: { name: string; icon: string; color: string } }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`flex-shrink-0 w-64 h-40 rounded-xl bg-gradient-to-br ${integration.color} p-6 flex flex-col justify-between`}
  >
    <div className="text-4xl">{integration.icon}</div>
    <div>
      <h3 className="text-xl font-bold text-white">{integration.name}</h3>
      <p className="text-white text-opacity-80 text-sm">Connect and automate</p>
    </div>
  </motion.div>
);

export default IntegrationSlider;