import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Kanban from './components/Kanban';
import CRM from './components/CRM';
import AIChat from './components/AIChat';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'kanban': return <Kanban />;
      case 'crm': return <CRM />;
      case 'ai': return <AIChat />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden selection:bg-primary/30">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto relative z-0">
        {/* Subtle Neon Glows in the background */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
