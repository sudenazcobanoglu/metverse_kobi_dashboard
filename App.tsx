
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import ROIOverview from './components/ROIOverview';
import LegalShield from './components/LegalShield';
import AIAuditPanel from './components/AIAuditPanel';
import InfluencerCatalog from './components/InfluencerCatalog';
import LogisticsTracker from './components/LogisticsTracker';
import CampaignPredictor from './components/CampaignPredictor';
import FinanceView from './components/FinanceView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-12 gap-6 mt-8 animate-in fade-in duration-500">
            <div className="col-span-12 lg:col-span-8">
              <ROIOverview />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <CampaignPredictor />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <AIAuditPanel />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="glass-card p-6 rounded-3xl h-full flex flex-col justify-center items-center text-center group">
                <div className="w-16 h-16 bg-met-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-met-accent rounded-full animate-ping opacity-20" />
                  <div className="absolute w-8 h-8 bg-met-accent rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(232,133,202,0.5)]">
                    <span className="text-met-bg font-bold text-xs">ROI</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-met-white">ROI Garantisi Aktif</h3>
                <p className="text-met-gray text-sm mt-2 max-w-xs">
                  MetVerse akıllı kontratları sayesinde yatırımınız kampanya hedeflerine ulaşana kadar Escrow havuzunda güvendedir.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-met-secondary uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-met-secondary animate-pulse" />
                  Blockchain Onaylı
                </div>
              </div>
            </div>
          </div>
        );
      case 'catalog':
        return (
          <div className="mt-8 animate-in slide-in-from-right-4 duration-500">
            <InfluencerCatalog />
          </div>
        );
      case 'risk':
        return (
          <div className="grid grid-cols-12 gap-6 mt-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="col-span-12 lg:col-span-8">
              <LegalShield />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-met-card to-met-bg flex flex-col items-center justify-center text-center border-met-accent/30 overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-met-accent/5 blur-3xl" />
                <div className="w-24 h-24 mb-6 relative">
                  <svg className="w-full h-full text-met-accent" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" className="animate-[spin_20s_linear_infinite]" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" className="animate-[spin_15s_linear_infinite_reverse]" />
                    <path d="M35 50 L45 60 L65 40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-met-white mb-2">Resmi Sertifika</h3>
                <p className="text-met-gray text-sm mb-6 font-medium">
                  Bu işletme MetVerse "Güvenli Reklam" protokolü ile korunmaktadır.
                </p>
                <div className="px-4 py-2 bg-met-accent/10 border border-met-accent/20 rounded-xl text-met-accent font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(232,133,202,0.1)]">
                  Lisans: MV-2024-SME
                </div>
              </div>
            </div>
          </div>
        );
      case 'finance':
        return (
          <div className="mt-8 animate-in fade-in duration-500">
            <FinanceView />
          </div>
        );
      case 'logistics':
        return (
          <div className="mt-8 animate-in slide-in-from-left-4 duration-500">
            <LogisticsTracker />
          </div>
        );
      default:
        return <ROIOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-met-bg text-met-white font-sans selection:bg-met-accent selection:text-white overflow-x-hidden">
      {/* Arka Plan Katmanları */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Noktalı Arka Plan Katmanı */}
        <div className="absolute inset-0 dotted-background opacity-40" />
        
        {/* Neon Işık Hüzmeleri */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-glow-pink blur-[140px] opacity-40" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(254,255,152,0.08)_0%,transparent_70%)] blur-[140px] opacity-30" />
      </div>

      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
      />

      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-8 relative z-10`}>
        <DashboardHeader />
        
        {renderContent()}

        <footer className="mt-12 py-6 border-t border-met-accent/10 flex justify-between items-center text-met-gray text-xs">
          <p className="font-medium">© 2024 MetVerse AI • KOBİ Risk Yönetim Köprüsü v4.2</p>
          <div className="flex gap-6">
             <div className="flex items-center gap-2 px-3 py-1 bg-met-secondary/10 text-met-secondary rounded-full border border-met-secondary/20">
              <span className="text-[10px] font-bold uppercase tracking-wider">AI Analitik Denetim: Aktif</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-bold">Escrow Güvencesi</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
