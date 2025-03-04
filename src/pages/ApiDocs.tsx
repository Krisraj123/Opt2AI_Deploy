import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Eye, EyeOff, Code, Terminal, Zap } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ApiDocs = () => {
  const [copied, setCopied] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [activeTab, setActiveTab] = useState('node');

  const apiKey = "opt2-AW271BMFPBzyac4cRuj1";
  const maskedApiKey = apiKey.substring(0, 8) + "•".repeat(apiKey.length - 8);

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeExamples = {
    node: `const axios = require('axios');

const convertMarkdownToDocx = async (markdown) => {
  try {
    const response = await axios.post(
      'https://nameisjack-krishna-mdtodocx.hf.space/convert/',
      { md_text: markdown },
      {
        headers: {
          'X-API-Key': '${apiKey}',
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        responseType: 'arraybuffer'
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error converting markdown:', error);
    throw error;
  }
};`,

    python: `import requests

def convert_markdown_to_docx(markdown):
    url = "https://nameisjack-krishna-mdtodocx.hf.space/convert/"
    headers = {
        "X-API-Key": "${apiKey}",
        "Content-Type": "application/json",
        "accept": "application/json"
    }
    payload = {"md_text": markdown}

    response = requests.post(url, json=payload, headers=headers)

    if response.status_code == 200:
        return response.content
    else:
        raise Exception(f"Error: {response.status_code}, {response.text}")`,

    curl: `curl -X POST \\
  'https://nameisjack-krishna-mdtodocx.hf.space/convert/' \\
  -H "X-API-Key: ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -H "accept: application/json" \\
  -d '{"md_text": "# Hello World\\n\\nThis is a test."}'
  `
};

  return (
    <div className="py-10">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Opt2AI <span className="text-purple-400">API</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Integrate our powerful Markdown to DOCX conversion directly into your applications.
        </p>
      </motion.section>

      {/* API Key Section */}
      <section className="mb-16">
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-gray-700 p-8">
          <div className="flex items-center mb-6">
            <Zap size={24} className="text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Your API Key</h2>
          </div>

          <p className="text-gray-300 mb-6">
            Use this API key to authenticate your requests to the Opt2AI API. Keep this key secure and do not expose it in client-side code.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <div className="bg-slate-900 border border-gray-700 rounded-lg p-4 font-mono text-gray-300 flex items-center justify-between">
                <span>{showApiKey ? apiKey : maskedApiKey}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={showApiKey ? "Hide API key" : "Show API key"}
                  >
                    {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  <button
                    onClick={copyApiKey}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Copy API key"
                  >
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium"
            >
              Your API Key
            </motion.button>
          </div>

          <div className="bg-yellow-900 bg-opacity-20 border border-yellow-700 rounded-lg p-4 text-yellow-300">
            <p className="text-sm">
              <strong>Important:</strong> This API key grants full access to the Opt2AI API. Do not share it publicly or commit it to version control.
            </p>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Integration Examples</h2>

        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-gray-700">
          <div className="border-b border-gray-700 p-4">
            <div className="flex space-x-4">
              <TabButton
                active={activeTab === 'node'}
                onClick={() => setActiveTab('node')}
                icon={<Code size={16} />}
                label="Node.js"
              />
              <TabButton
                active={activeTab === 'python'}
                onClick={() => setActiveTab('python')}
                icon={<Code size={16} />}
                label="Python"
              />
              <TabButton
                active={activeTab === 'curl'}
                onClick={() => setActiveTab('curl')}
                icon={<Terminal size={16} />}
                label="cURL"
              />
            </div>
          </div>

          <div className="p-4 relative">
            <SyntaxHighlighter
              language={activeTab === 'curl' ? 'bash' : activeTab === 'python' ? 'python' : 'javascript'}
              style={atomOneDark}
              customStyle={{ background: 'transparent', padding: '1rem' }}
            >
              {codeExamples[activeTab as keyof typeof codeExamples]}
            </SyntaxHighlighter>

            <button
              onClick={() => {
                navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
              }}
              className="absolute top-6 right-6 bg-slate-700 hover:bg-slate-600 p-2 rounded-md transition-colors"
              aria-label="Copy code"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">API Reference</h2>

        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-gray-700 p-8">
          <h3 className="text-xl font-semibold mb-4">POST /v1/convert</h3>

          <div className="mb-6">
            <p className="text-gray-300 mb-4">
              Converts Markdown content to a DOCX document.
            </p>

            <div className="bg-purple-900 bg-opacity-20 border border-purple-700 rounded-lg p-4 text-purple-300 mb-6">
              <p className="text-sm">
                <strong>Endpoint:</strong> https://nameisjack-krishna-mdtodocx.hf.space/convert/
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Request Headers</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Header</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono">Authorization</td>
                    <td className="px-4 py-3 text-sm">{'{your_api_key}'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono">Content-Type</td>
                    <td className="px-4 py-3 text-sm">application/json</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Request Body</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Parameter</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono">md_text</td>
                    <td className="px-4 py-3 text-sm">string</td>
                    <td className="px-4 py-3 text-sm">The Markdown content to convert</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Response</h4>
            <p className="text-gray-300 mb-4">
              Returns a binary DOCX file with Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Error Codes</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Status Code</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 text-sm">400</td>
                    <td className="px-4 py-3 text-sm">Bad Request - Invalid parameters</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">401</td>
                    <td className="px-4 py-3 text-sm">Unauthorized - Invalid API key</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">429</td>
                    <td className="px-4 py-3 text-sm">Too Many Requests - Rate limit exceeded</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">500</td>
                    <td className="px-4 py-3 text-sm">Internal Server Error</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
      active ? 'bg-purple-900 bg-opacity-50 text-white' : 'text-gray-400 hover:text-white hover:bg-slate-700'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default ApiDocs;
