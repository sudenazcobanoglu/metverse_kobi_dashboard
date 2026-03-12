
import React from 'react';
import { Search, Bell, ShieldCheck, User, Zap } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Zap size={14} className="text-met-secondary fill-met-secondary" />
          <span className="text-[10px] font-bold text-met-secondary uppercase tracking-widest">MetVerse Risk Bridge</span>
        </div>
        <h1 className="text-3xl font-display font-bold text-met-white">KOBİ Kontrol Paneli</h1>
        <p className="text-met-gray mt-1 text-xs">AI Denetimli Risk Yönetimi Aktif</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-met-gray" size={18} />
          <input 
            type="text" 
            placeholder="Influencer veya kampanya ara..."
            className="bg-met-card/50 border border-met-accent/20 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:border-met-accent transition-all text-sm text-met-white"
          />
        </div>

        <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.1)]">
          <ShieldCheck className="text-green-400" size={18} />
          <div className="flex flex-col">
            <span className="text-[9px] text-met-gray leading-none uppercase font-bold">Hukuki Durum</span>
            <span className="text-xs text-green-400 font-bold leading-none mt-1 uppercase tracking-tighter">UYUMLU %100</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 relative hover:text-met-accent transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-met-accent rounded-full border border-met-bg" />
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-met-accent/20">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold">MetVerse KOBİ</p>
              <p className="text-[10px] text-met-gray uppercase font-bold">Premium Plan</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-met-accent/20 border border-met-accent flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/id/10/100/100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
