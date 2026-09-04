import React from 'react';
import { LayoutDashboard, Kanban, Users, Bot, Settings } from 'lucide-react';
import clsx from 'clsx';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Painel Central' },
    { id: 'kanban', icon: Kanban, label: 'Conteúdo' },
    { id: 'crm', icon: Users, label: 'Leads & Vendas' },
    { id: 'ai', icon: Bot, label: 'Assistente IA' },
  ];

  return (
    <aside className="w-64 bg-surface border-r border-white/5 h-screen flex flex-col z-10 relative">
      <div className="p-6">
        <h1 className="text-2xl font-black text-white tracking-tighter">
          ED<span className="text-primary">CRIA</span> <span className="text-xs text-textMuted font-normal tracking-widest uppercase">OS</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={clsx(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium outline-none",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]" 
                  : "text-textMuted hover:text-white hover:bg-white/5"
              )}
            >
              <Icon size={18} className={isActive ? "text-primary" : "text-textMuted"} />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-textMuted hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
          <Settings size={18} />
          Configurações
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
