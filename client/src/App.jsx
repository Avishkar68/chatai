import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Sparkles, Trash2, AlertCircle } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import LoadingDots from './components/LoadingDots';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const sessionId = 'default-user-session'; // In a real app, this would be dynamic

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (text) => {
    setError(null);
    const newUserMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/chat`, {
        message: text,
        history: messages
      });
      
      const aiMessage = { role: 'model', content: response.data.message };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to connect to the AI service');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#0b0d11] text-slate-100 overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800/50 bg-[#0b0d11]/80 backdrop-blur-md z-10">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Sparkles size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">Gemini AI</h1>
        </div>
        <button 
          onClick={() => setMessages([])}
          className="p-2 text-slate-400 hover:text-red-400 transition-colors"
          title="Clear Chat"
        >
          <Trash2 size={20} />
        </button>
      </header>

      {/* Chat Container */}
      <main className="flex-1 overflow-y-auto px-4 py-8 md:px-0">
        <div className="max-w-4xl mx-auto w-full">
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700/50">
                <Sparkles size={48} className="text-indigo-500 mb-2 mx-auto opacity-50" />
                <h2 className="text-2xl font-medium text-slate-300">How can I help you today?</h2>
                <p className="text-slate-500 mt-2 max-w-sm">
                  Start a conversation with Gemini. Ask questions, get help with code, or just chat.
                </p>
              </div>
            </div>
          )}

          {messages.map((msg, idx) => (
            <ChatMessage key={idx} role={msg.role} content={msg.content} />
          ))}

          {isLoading && (
            <div className="flex justify-start mb-6">
              <div className="flex flex-row">
                <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center bg-indigo-600 mr-3">
                  <Sparkles size={20} className="text-white" />
                </div>
                <LoadingDots />
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center p-4 mb-6 bg-red-900/20 border border-red-500/30 rounded-xl text-red-400 text-sm space-x-2">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="p-4 md:pb-8 bg-gradient-to-t from-[#0b0d11] via-[#0b0d11] to-transparent">
        <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
        <p className="text-center text-[10px] text-slate-600 mt-3">
          Gemini may display inaccurate info, so double-check its responses.
        </p>
      </footer>
    </div>
  );
}

export default App;
