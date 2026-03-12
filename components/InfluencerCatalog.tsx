
import React, { useState } from 'react';
import { CheckCircle2, Star, Filter, ArrowUpRight, Search, Zap, UserCheck } from 'lucide-react';
import { Influencer } from '../types';

const influencerData: Influencer[] = [
  { 
    id: '1', 
    name: 'Aylin Yılmaz', 
    avatar: 'https://picsum.photos/id/101/100/100', 
    type: 'Micro', 
    reputationScore: 98, 
    authenticityScore: 96, 
    reach: '45B', 
    tags: ['Teknoloji', 'Yaşam Tarzı'] 
  },
  { 
    id: '2', 
    name: 'Can Demir', 
    avatar: 'https://picsum.photos/id/102/100/100', 
    type: 'Nano', 
    reputationScore: 92, 
    authenticityScore: 99, 
    reach: '12B', 
    tags: ['Oyun', 'Donanım'] 
  },
  { 
    id: '3', 
    name: 'Selin Aras', 
    avatar: 'https://picsum.photos/id/103/100/100', 
    type: 'Micro', 
    reputationScore: 95, 
    authenticityScore: 91, 
    reach: '82B', 
    tags: ['Moda', 'Sürdürülebilirlik'] 
  },
  { 
    id: '4', 
    name: 'Emre Yıldız', 
    avatar: 'https://picsum.photos/id/104/100/100', 
    type: 'Nano', 
    reputationScore: 89, 
    authenticityScore: 98, 
    reach: '8.5B', 
    tags: ['Yemek', 'Vegan'] 
  },
];

const InfluencerCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredInfluencers = influencerData.filter(inf => 
    inf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inf.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="glass-card p-8 rounded-3xl border-met-accent/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-met-accent" />
            <span className="text-xs font-bold text-met-accent uppercase tracking-[0.2em]">Akıllı Keşif Modülü</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-met-white">Akıllı Influencer Kataloğu</h2>
          <p className="text-met-gray text-sm mt-1">AI Audit onaylı, sahte takipçi analizi tamamlanmış "Dijital CV" portföyü</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-met-gray" size={18} />
            <input 
              type="text" 
              placeholder="Niş veya isim ara (Örn: Sürdürülebilirlik)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-met-bg/60 border border-met-accent/20 rounded-2xl py-3 pl-12 pr-4 w-full text-sm focus:outline-none focus:border-met-accent transition-all text-met-white placeholder:text-met-gray/50"
            />
          </div>
          <button className="p-3 bg-met-card border border-met-accent/20 rounded-2xl hover:bg-met-accent/10 transition-colors">
            <Filter size={24} className="text-met-accent" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredInfluencers.map((inf) => (
          <div key={inf.id} className="p-6 rounded-3xl bg-met-bg/40 border border-met-accent/10 hover:border-met-accent/40 group cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col h-full">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-met-accent opacity-0 group-hover:opacity-10 blur-2xl transition-opacity pointer-events-none" />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl border-2 border-met-accent/20 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img src={inf.avatar} alt={inf.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-met-bg rounded-xl flex items-center justify-center border border-met-accent/30 shadow-lg">
                  <UserCheck size={16} className="text-met-accent" />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${inf.type === 'Micro' ? 'bg-met-accent/20 text-met-accent' : 'bg-met-secondary/20 text-met-secondary'}`}>
                  {inf.type}
                </span>
                <div className="mt-3 flex flex-col items-end">
                  <span className="text-[10px] text-met-gray uppercase font-bold tracking-tighter">İtibar Puanı</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-met-secondary fill-met-secondary" />
                    <span className="text-lg font-bold font-display text-met-white">{inf.reputationScore}</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-display font-bold text-xl mb-1 group-hover:text-met-accent transition-colors relative z-10">{inf.name}</h3>
            <p className="text-xs text-met-gray mb-6 flex items-center gap-2 relative z-10">
              Erişim: <span className="font-bold text-met-white">{inf.reach}</span>
              <span className="w-1 h-1 rounded-full bg-met-gray/30" />
              AI Audit: <span className="font-bold text-met-secondary">Onaylı</span>
            </p>

            <div className="flex flex-wrap gap-2 mb-auto relative z-10">
              {inf.tags.map(tag => (
                <span key={tag} className="text-[10px] px-3 py-1.5 bg-met-card/80 rounded-xl text-met-gray border border-met-accent/5 group-hover:border-met-accent/20 transition-all font-bold">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-met-accent/10 relative z-10">
              <div className="flex flex-col">
                <span className="text-[9px] text-met-gray uppercase font-bold tracking-widest">Orijinallik</span>
                <span className="text-sm font-bold text-met-secondary">%{inf.authenticityScore} Puan</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-met-accent/10 text-met-accent hover:bg-met-accent hover:text-met-bg transition-all font-bold text-xs">
                CV Gör <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerCatalog;
