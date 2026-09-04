import React from 'react';
import { Mail, Phone, MoreVertical } from 'lucide-react';

const CRM = () => {
  const leads = [
    { name: "Juliana Silva", project: "Convite Casamento", status: "Novo Lead", value: "R$ 450" },
    { name: "Agência XYZ", project: "Landing Page SaaS", status: "Negociação", value: "R$ 3.500" },
    { name: "Dr. Roberto", project: "Site Institucional", status: "Fechado", value: "R$ 2.800" },
  ];

  return (
    <div className="p-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Pipeline de Vendas</h2>
        <p className="text-textMuted">Gerencie os orçamentos do Studio e dos Convites.</p>
      </div>

      <div className="glass-panel overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="p-4 font-semibold text-textMuted">Cliente</th>
              <th className="p-4 font-semibold text-textMuted">Projeto</th>
              <th className="p-4 font-semibold text-textMuted">Valor Estimado</th>
              <th className="p-4 font-semibold text-textMuted">Status</th>
              <th className="p-4 font-semibold text-textMuted">Ação</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, idx) => (
              <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium text-white">{lead.name}</td>
                <td className="p-4 text-textMuted">{lead.project}</td>
                <td className="p-4 text-secondary font-bold">{lead.value}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    lead.status === 'Fechado' ? 'bg-green-500/20 text-green-400' :
                    lead.status === 'Novo Lead' ? 'bg-primary/20 text-primary' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="p-4 flex gap-3 text-textMuted">
                  <button className="hover:text-primary transition-colors"><Mail size={18} /></button>
                  <button className="hover:text-primary transition-colors"><Phone size={18} /></button>
                  <button className="hover:text-white transition-colors"><MoreVertical size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRM;
