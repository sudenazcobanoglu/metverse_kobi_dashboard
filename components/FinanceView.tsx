
import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, ShieldCheck, History, DollarSign } from 'lucide-react';

const FinanceView: React.FC = () => {
  const transactions = [
    { id: 'T1', recipient: 'Aylin Yılmaz', amount: 1200, status: 'Escrow Havuzunda', date: '12.04.2024' },
    { id: 'T2', recipient: 'Can Demir', amount: 850, status: 'Ödendi', date: '10.04.2024' },
    { id: 'T3', recipient: 'Selin Aras', amount: 3200, status: 'Onay Bekliyor', date: '08.04.2024' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-display font-bold">Finansal Yönetim</h2>
          <p className="text-met-gray text-sm">Escrow havuzu ve bütçe planlama</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-met-secondary/10 border border-met-secondary/20 rounded-2xl flex items-center gap-2">
            <ShieldCheck size={18} className="text-met-secondary" />
            <span className="text-xs font-bold text-met-secondary">Tüm Ödemeler Escrow Güvencesinde</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Wallet size={80} />
          </div>
          <p className="text-xs text-met-gray font-bold uppercase tracking-wider mb-2">Escrow Havuzu</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-display font-black text-met-white">$12,450</h3>
            <span className="text-xs text-met-accent">+ $2,100 bu ay</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-full bg-met-bg/50 h-1.5 rounded-full">
              <div className="bg-met-accent h-full w-3/4 rounded-full" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
          <p className="text-xs text-met-gray font-bold uppercase tracking-wider mb-2">Toplam Harcama</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-display font-black text-met-white">$45,800</h3>
            <span className="text-xs text-green-400">ROI: 4.2x</span>
          </div>
          <button className="mt-4 text-xs font-bold text-met-accent flex items-center gap-1 hover:underline">
            Raporu İndir <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="glass-card p-6 rounded-3xl bg-gradient-to-br from-met-accent/20 to-transparent">
          <p className="text-xs text-met-white font-bold uppercase tracking-wider mb-2">Kalan Bütçe</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-display font-black text-met-white">$7,550</h3>
          </div>
          <button className="mt-4 w-full py-2 bg-met-accent text-met-bg font-bold rounded-xl text-xs hover:bg-met-nav-hover-bg transition-colors">
            Bütçe Ekle
          </button>
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl">
        <div className="flex items-center gap-2 mb-6">
          <History size={20} className="text-met-accent" />
          <h3 className="font-bold">Son İşlemler</h3>
        </div>
        <div className="space-y-4">
          {transactions.map((t) => (
            <div key={t.id} className="flex items-center justify-between p-4 rounded-2xl bg-met-bg/40 border border-met-accent/5 hover:border-met-accent/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-met-accent/10 flex items-center justify-center text-met-accent">
                  <DollarSign size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">{t.recipient}</p>
                  <p className="text-[10px] text-met-gray">{t.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display font-bold text-met-white">${t.amount}</p>
                <p className={`text-[10px] font-bold ${t.status === 'Ödendi' ? 'text-green-400' : 'text-met-secondary'}`}>
                  {t.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceView;
