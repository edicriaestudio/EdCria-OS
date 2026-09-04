import React from 'react';
import { Calendar, Target, Video, Briefcase, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Bem-vindo de volta.</h2>
        <p className="text-textMuted">Aqui está o resumo da sua operação hoje.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Target size={24} />
            </div>
            <h3 className="font-semibold">Leads Ativos</h3>
          </div>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="glass-panel p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
              <Briefcase size={24} />
            </div>
            <h3 className="font-semibold">Projetos em Andamento</h3>
          </div>
          <p className="text-3xl font-bold">4</p>
        </div>

        <div className="glass-panel p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
              <Video size={24} />
            </div>
            <h3 className="font-semibold">Conteúdos na Fila</h3>
          </div>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>

      {/* Agenda Section */}
      <div className="glass-panel p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="text-primary" size={24} />
          <h3 className="text-xl font-bold">Sua Agenda de Hoje (Segunda-Feira)</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-primary rounded-full"></div>
              <div>
                <p className="font-semibold text-white">Reunião de Pauta (IA)</p>
                <p className="text-sm text-textMuted">09:00 - 10:00 • EdCria Studio & Convites</p>
              </div>
            </div>
            <ChevronRight className="text-textMuted" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-secondary rounded-full"></div>
              <div>
                <p className="font-semibold text-white">Geração de Imagens & Roteiros</p>
                <p className="text-sm text-textMuted">10:00 - 12:00 • Google Flow</p>
              </div>
            </div>
            <ChevronRight className="text-textMuted" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-purple-500 rounded-full"></div>
              <div>
                <p className="font-semibold text-white">Edição no CapCut (Foco Absoluto)</p>
                <p className="text-sm text-textMuted">14:00 - 17:00 • Montagem Final</p>
              </div>
            </div>
            <ChevronRight className="text-textMuted" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
