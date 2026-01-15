
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { getGymAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to Cino Universal Gym! I am your AI coach. How can I help you reach your goals today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botResponse = await getGymAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] md:right-24">
      {isOpen ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-[calc(100vw-3rem)] sm:w-96 h-[500px] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-red-600 p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <Bot size={24} className="text-white" />
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-tight">GYM COACH AI</h3>
                <p className="text-red-100 text-[10px] font-semibold">Online 24/7</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/80 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-950">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm md:text-base ${
                  msg.role === 'user' ? 'bg-red-600 text-white rounded-tr-none shadow-lg' : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 text-zinc-100 rounded-2xl px-4 py-2 text-sm animate-pulse border border-zinc-700">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-zinc-800 bg-zinc-900 shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about programs..."
                className="flex-1 bg-zinc-800 border-none text-white rounded-xl px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-red-600 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-red-600 p-3 rounded-xl text-white hover:bg-red-700 transition-colors disabled:opacity-50 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group min-h-[56px] min-w-[56px] flex items-center justify-center"
        >
          <MessageSquare className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
