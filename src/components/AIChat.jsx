import React, { useState } from 'react';
import { Send, Bot, Key, Loader2 } from 'lucide-react';

const AIChat = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [isConfigured, setIsConfigured] = useState(!!apiKey);
  const [messages, setMessages] = useState([{ 
    role: 'model', 
    text: 'Olá! Eu sou a Inteligência da EdCria rodando diretamente no seu CRM. O que vamos criar ou planejar hoje?' 
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const saveApiKey = (e) => {
    e.preventDefault();
    if (apiKey.trim()) {
      localStorage.setItem('gemini_api_key', apiKey);
      setIsConfigured(true);
    }
  };

  const clearApiKey = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey('');
    setIsConfigured(false);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    const newMessages = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Fazendo a chamada direta para a API do Google Gemini (Versão 2026)
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Você é o estrategista de marketing e design do Estúdio EdCria. Responda de forma direta e profissional. Pergunta do usuário: ${userText}` }] }]
        })
      });
      
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      
      const botResponse = data.candidates[0].content.parts[0].text;
      setMessages([...newMessages, { role: 'model', text: botResponse }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'model', text: `Erro de Conexão: ${error.message}. Verifique se a sua Chave de API está correta.` }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isConfigured) {
    return (
      <div className="p-8 h-full flex flex-col items-center justify-center animate-in fade-in">
        <div className="glass-panel p-10 max-w-lg w-full text-center space-y-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Key className="text-primary" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white">Conecte o Cérebro da IA</h2>
          <p className="text-textMuted text-sm">Para ativar o assistente dentro do EdCria OS, você precisa colar a sua chave de API gratuita do Google Gemini abaixo.</p>
          <form onSubmit={saveApiKey} className="space-y-4">
            <input 
              type="password" 
              value={apiKey} 
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Cole sua API Key (Ex: AIzaSy...)" 
              className="w-full bg-surface border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors"
            />
            <button type="submit" className="w-full bg-primary text-black font-bold py-3 rounded-xl hover:bg-primary/80 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              Ativar Inteligência
            </button>
          </form>
          <a href="https://aistudio.google.com/app/apikey" target="_blank" className="block text-xs text-secondary hover:underline mt-4">
            Não sabe como pegar? Clique aqui para gerar no Google AI Studio.
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 h-full flex flex-col animate-in fade-in max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Bot className="text-primary" size={28} />
          <h2 className="text-2xl font-bold text-white">Assistente EdCria</h2>
        </div>
        <button onClick={clearApiKey} className="text-xs text-textMuted hover:text-red-400 border border-white/5 px-3 py-1 rounded-lg">
          Trocar API Key
        </button>
      </div>

      <div className="flex-1 glass-panel flex flex-col overflow-hidden">
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-primary text-black font-semibold' 
                : 'bg-background border border-white/5 text-white'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-background border border-white/5 p-4 rounded-2xl text-primary flex items-center gap-2 text-sm">
                <Loader2 className="animate-spin" size={16} /> Processando...
              </div>
            </div>
          )}
        </div>
        
        <form onSubmit={sendMessage} className="p-4 border-t border-white/5 flex gap-3 bg-background/50">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Comande a IA para gerar um roteiro de reels, ideia de post..."
            className="flex-1 bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary placeholder:text-gray-600"
          />
          <button type="submit" disabled={loading} className="bg-primary text-black p-3 rounded-xl hover:bg-primary/80 transition-colors disabled:opacity-50">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
