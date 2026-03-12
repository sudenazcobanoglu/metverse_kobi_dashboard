
import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, FileCheck, Gavel, CheckCircle } from 'lucide-react';

const LegalShield: React.FC = () => {
  const steps = [
    { label: 'Örtülü Reklam Denetimi', status: 'Temiz', icon: Gavel, color: 'text-met-accent' },
    { label: 'Emanet (Escrow) Sistemi', status: 'Aktif', icon: Lock, color: 'text-met-secondary' },
    { label: 'KVKK & Regülasyon Uyumu', status: 'Uyumlu', icon: FileCheck, color: 'text-met-white' },
    { label: 'Yapay Zeka Sözleşme Kontrolü', status: 'Onaylandı', icon: ShieldCheck, color: 'text-green-400' },
  ];

  return (
    <div className="glass-card p-6 rounded-3xl h-full flex flex-col bg-gradient-to-br from-met-card to-[rgba(232,133,202,0.05)] border-met-accent/20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-met-accent/20 rounded-2xl text-met-accent">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold">Risk & Hukuk Merkezi</h2>
            <p className="text-met-gray text-sm">MetVerse Mevzuat Uyumluluk Motoru</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-met-bg/60 rounded-2xl border border-met-accent/20">
          <CheckCircle size={16} className="text-green-400" />
          <span className="text-xs font-bold text-met-white">Escrow Güvencesi</span>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <div className="relative p-6 rounded-3xl border border-met-accent/30 bg-met-bg/40 overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-met-accent/10 blur-3xl group-hover:bg-met-accent/20 transition-all" />
          <p className="text-met-gray text-xs uppercase font-bold tracking-widest mb-3">Güncel Güvenlik Matrisi</p>
          
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-display font-black text-met-white tracking-tighter">0%</span>
              <span className="text-met-accent font-black text-lg uppercase">RİSK</span>
            </div>
            <p className="text-sm font-bold text-met-white/90">Örtülü Reklam Cezası Risk Durumu: <span className="text-met-accent uppercase tracking-wider">Korumalı</span></p>
          </div>

          <p className="text-[11px] text-met-gray mt-6 leading-relaxed flex items-start gap-2">
            <AlertTriangle size={14} className="text-met-secondary shrink-0 mt-0.5" /> 
            AI algoritmalarımız tüm paylaşımları Ticaret Bakanlığı mevzuatına göre gerçek zamanlı denetler, ceza riskini ortadan kaldırır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-met-white/5 border border-white/5 hover:border-met-accent/20 transition-all cursor-default">
              <div className="flex items-center gap-3">
                <step.icon size={20} className={step.color} />
                <span className="text-xs font-semibold">{step.label}</span>
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-met-bg/80 border border-white/5 ${step.color}`}>
                {step.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="flex-1 py-4 bg-met-accent hover:bg-met-hover text-met-bg font-bold rounded-2xl transition-all shadow-[0_10px_20px_rgba(232,133,202,0.2)]">
          Hukuki Rapor Al
        </button>
        <button className="px-6 py-4 bg-met-card border border-met-accent/20 hover:border-met-accent text-met-accent font-bold rounded-2xl transition-all">
          Sözleşme Taslakları
        </button>
      </div>
    </div>
  );
};

export default LegalShield;
