import React from 'react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-[500px] overflow-hidden">
      <textarea
        className="w-full h-full p-4 bg-transparent text-gray-200 font-mono resize-none focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your Markdown here..."
        spellCheck="false"
      />
    </div>
  );
};

export default MarkdownEditor;