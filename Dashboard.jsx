import React, { useState } from 'react';
import { Calendar, Clock, Target, Video, Briefcase, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay() === 0 || new Date().getDay() === 6 ? 1 : new Date().getDay());

  const weekDays = [
    { id: 1, name: "Segunda-feira", label: "Planejamento & Roteiros" },
    { id: 2, name: "Terça-feira", label: "Prospecção & Vendas" },
    { id: 3, name: "Quarta-feira", label: "Produção & Design" },
    { id: 4, name: "Quinta-feira", label: "Reuniões & Entregas" },
    { id: 5, name: "Sexta-feira", label: "Análise & Ajustes" }
  ];

  const schedule = {
    1: [
      { time: "09:00 - 10:00", title: "Alinhamento Estratégico", desc: "Revisar CRM, Caixa e prioridades da semana (Studio + Convites)" },
      { time: "10:00 - 12:00", title: "Fábrica de Conteúdo (IA)", desc: "Usar o Assistente IA para criar roteiros e cópias de Carrosséis e Reels da semana." },
      { time: "14:00 - 18:00", title: "Deep Work (Studio)", desc: "Foco total: Desenvolvimento de Landing Pages e programação." },
    ],
    2: [
      { time: "09:00 - 11:00", title: "Prospecção Ativa", desc: "Mapear clientes no Instagram/LinkedIn e enviar mensagens (SDR)." },
      { time: "11:00 - 12:00", title: "Follow-up", desc: "Cobrar orçamentos pendentes na aba CRM e tirar dúvidas." },
      { time: "14:00 - 18:00", title: "Deep Work (Convites)", desc: "Foco total: Criação de novos temas e layouts de convites interativos." },
    ],
    3: [
      { time: "09:00 - 12:00", title: "Gravação & Design", desc: "Gravar Reels e criar as artes baseadas nos roteiros de Segunda-feira." },
      { time: "14:00 - 18:00", title: "Deep Work (Studio)", desc: "Refinamento de projetos Web, ajustes mobile e otimização." },
    ],
    4: [
      { time: "09:00 - 12:00", title: "Reuniões & Briefing", desc: "Apresentação de propostas para clientes, fechamentos e alinhamentos." },
      { time: "14:00 - 18:00", title: "Deep Work (Convites)", desc: "Finalização de encomendas, testes de botões RSVP e aprovação final." },
    ],
    5: [
      { time: "09:00 - 11:00", title: "Análise de Métricas", desc: "Verificar engajamento no Instagram, visualizações e novas metas." },
      { time: "11:00 - 12:00", title: "Financeiro & Adm", desc: "Faturamento, pagamentos e organização da próxima semana." },
      { time: "14:00 - 17:00", title: "Estudo & Inovação", desc: "Pesquisar referências, testar novos prompts, UI/UX e automações." },
    ]
  };

  return (
    <div className="p-8 animate-in fade-in duration-500 h-full overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Visão Geral</h2>
        <p className="text-textMuted mt-1">Sua semana de trabalho meticulosamente calculada.</p>
      </div>

      {/* Routine Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Weekly Tabs */}
        <div className="col-span-1 glass-panel p-6 h-fit">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="text-primary" size={20} />
            <h3 className="text-xl font-bold text-white">O Mapa da Semana</h3>
          </div>
          
          <div className="space-y-3">
            {weekDays.map(day => (
              <button 
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`w-full text-left p-4 rounded-xl transition-all border ${
                  selectedDay === day.id 
                  ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(0,240,255,0.1)]' 
                  : 'bg-background/50 border-white/5 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div className={`font-bold text-sm ${selectedDay === day.id ? 'text-primary' : 'text-white'}`}>
                  {day.name}
                </div>
                <div className="text-xs text-textMuted mt-1">{day.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Daily Timeline */}
        <div className="col-span-2 glass-panel p-6">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="text-primary" size={20} />
            <h3 className="text-xl font-bold text-white">
              Sua rotina para: {weekDays.find(d => d.id === selectedDay)?.name}
            </h3>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {(schedule[selectedDay] || []).map((slot, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-background"></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface/50 border border-white/10 p-5 rounded-xl hover:border-primary/50 transition-colors shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#06060C] bg-primary px-2 py-1 rounded">
                      {slot.time}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-lg mb-1">{slot.title}</h4>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{slot.desc}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
