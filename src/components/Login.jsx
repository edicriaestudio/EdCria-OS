import React from 'react';
import { motion } from 'framer-motion';
import { Key, Mail, Fingerprint } from 'lucide-react';

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen w-full bg-[#06060C] flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background WebGL/Gradients simulation */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#06B6D4]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#0A3D4A]/40 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 p-8 relative z-10 items-center">
        
        {/* Left Side: Branding (Dynamo Aesthetic) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A3D4A]/30 border border-[#06B6D4]/30 text-[#06B6D4] text-xs font-mono font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse shadow-[0_0_10px_#06B6D4]"></span>
            EDCRIA OS v1.0
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-medium text-white leading-[1.04] tracking-tight">
            Central de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-white">
              Comando.
            </span>
          </h1>
          
          <p className="text-[#A1A1AA] text-lg max-w-md leading-[1.6]">
            A inteligência do seu estúdio de alto ticket centralizada em um só lugar. Automação, vendas e entrega em tempo real.
          </p>

          <div className="flex gap-6 pt-4">
            <div className="flex flex-col">
              <span className="text-[#FFFFFF] text-2xl font-medium">10x</span>
              <span className="text-[#A1A1AA] text-xs font-mono mt-1">Workflow Speed</span>
            </div>
            <div className="w-px bg-[#27272A]"></div>
            <div className="flex flex-col">
              <span className="text-[#FFFFFF] text-2xl font-medium">AI</span>
              <span className="text-[#A1A1AA] text-xs font-mono mt-1">Native Engine</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Auth Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-md ml-auto"
        >
          <div className="bg-[#0A3D4A]/20 backdrop-blur-xl border border-[#27272A] p-10 rounded-[16px] shadow-2xl shadow-black/50 relative overflow-hidden">
            {/* Subtle glow inside card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#06B6D4]/10 blur-[50px] rounded-full"></div>

            <h2 className="text-2xl font-medium text-white mb-2">Acesso Restrito</h2>
            <p className="text-[#A1A1AA] text-sm mb-8">Faça login para entrar na área de operações do estúdio.</p>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA]" size={18} />
                  <input type="email" placeholder="ceo@edcria.com.br" className="w-full bg-[#06060C]/50 border border-[#27272A] rounded-[8px] py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">Senha</label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA]" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full bg-[#06060C]/50 border border-[#27272A] rounded-[8px] py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#06B6D4] hover:bg-[#06B6D4]/80 text-[#06060C] font-semibold py-3 rounded-[8px] transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-0.5">
                <Fingerprint size={18} /> Acessar Sistema
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#27272A]">
              <button onClick={() => onLogin()} className="w-full bg-white hover:bg-gray-200 text-black font-semibold py-3 rounded-[8px] transition-all flex items-center justify-center gap-3 hover:-translate-y-0.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                Continuar com Google
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
