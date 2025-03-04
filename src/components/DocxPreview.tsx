import React from 'react';
import { motion } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface DocxPreviewProps {
  markdown: string;
}

const DocxPreview: React.FC<DocxPreviewProps> = ({ markdown }) => {
  // Simple markdown to HTML conversion for preview purposes
  const convertMarkdownToHtml = (md: string) => {
    let html = md;
    
    // Headers
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gm, '<li>$1</li>');
    html = html.replace(/<\/li>\n<li>/g, '</li><li>');
    html = html.replace(/<li>(.*)<\/li>/g, '<ul><li>$1</li></ul>');
    html = html.replace(/<\/ul>\n<ul>/g, '');
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>');
    
    // Paragraphs
    html = html.replace(/^(?!<[a-z])(.*$)/gm, '<p>$1</p>');
    html = html.replace(/<p><\/p>/g, '');
    
    return html;
  };

  return (
    <div className="h-[500px] overflow-auto p-4 bg-white text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="docx-preview"
        dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(markdown) }}
      />
    </div>
  );
};

export default DocxPreview;