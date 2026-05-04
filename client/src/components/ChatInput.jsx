import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal } from 'lucide-react';

const ChatInput = ({ onSend, isLoading }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div className="relative flex items-end w-full max-w-4xl mx-auto p-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl">
      <textarea
        ref={textareaRef}
        rows="1"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask Gemini anything..."
        className="w-full bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none resize-none py-2 px-1 max-h-40"
        disabled={isLoading}
      />
      <button
        onClick={handleSend}
        disabled={!message.trim() || isLoading}
        className={`p-2 ml-2 rounded-xl transition-all ${
          message.trim() && !isLoading
            ? 'bg-indigo-600 text-white hover:bg-indigo-500 scale-100'
            : 'bg-slate-700 text-slate-500 scale-95 opacity-50 cursor-not-allowed'
        }`}
      >
        <SendHorizontal size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
