import React from 'react';
import { Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatMessage = ({ role, content }) => {
  const isBot = role === 'model';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${isBot ? 'bg-indigo-600 mr-3' : 'bg-slate-700 ml-3'}`}>
          {isBot ? <Bot size={20} className="text-white" /> : <User size={20} className="text-white" />}
        </div>
        
        <div className={`p-4 rounded-2xl ${
          isBot 
            ? 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700' 
            : 'bg-indigo-600 text-white rounded-tr-none'
        } shadow-lg shadow-black/20`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
