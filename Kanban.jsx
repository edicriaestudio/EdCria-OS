import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';

const Kanban = () => {
  const columns = [
    { title: "Ideias (Backlog)", color: "border-gray-500", cards: ["Por que o Glassmorphism vende?", "3 Dicas Convites 15 anos", "Interativo vs PDF"] },
    { title: "Roteirizando", color: "border-secondary", cards: ["Reels: Botão RSVP Batman"] },
    { title: "Produção (Design/Vídeo)", color: "border-primary", cards: ["Carrossel: O erro de começar do zero"] },
    { title: "Agendado", color: "border-green-500", cards: ["Reels: Convite Moana"] }
  ];

  return (
    <div className="p-8 animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Quadro de Conteúdo</h2>
          <p className="text-textMuted">Acompanhe a esteira de produção do Estúdio e Convites.</p>
        </div>
        <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/80 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <Plus size={20} /> Novo Post
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 flex-1">
        {columns.map((col, idx) => (
          <div key={idx} className="min-w-[300px] flex flex-col bg-surface/30 rounded-xl p-4 border border-white/5">
            <div className={`flex justify-between items-center mb-4 border-l-4 ${col.color} pl-3`}>
              <h3 className="font-bold text-white">{col.title}</h3>
              <MoreHorizontal size={18} className="text-textMuted" />
            </div>
            
            <div className="space-y-3 flex-1">
              {col.cards.map((card, cIdx) => (
                <div key={cIdx} className="glass-panel p-4 cursor-pointer hover:border-primary/50 transition-colors">
                  <p className="text-sm font-semibold text-white mb-2">{card}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-1 rounded text-textMuted">EdCria</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
