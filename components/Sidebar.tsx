
import React from 'react';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Users, 
  Wallet,
  Truck,
  ChevronLeft, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Genel Bakış' },
    { id: 'catalog', icon: Users, label: 'Akıllı Katalog' },
    { id: 'risk', icon: ShieldCheck, label: 'Risk & Hukuk' },
    { id: 'finance', icon: Wallet, label: 'Finans (Escrow)' },
    { id: 'logistics', icon: Truck, label: 'Lojistik Takip' },
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 h-screen bg-met-card/90 backdrop-blur-xl border-r border-met-accent/20 transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-20'}`}
    >
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-met-accent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(232,133,202,0.4)]">
            <span className="text-met-bg font-bold text-xl">M</span>
          </div>
          {isOpen && <span className="text-met-white font-display font-bold text-lg tracking-wider">METVERSE</span>}
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-md hover:bg-met-accent/20 transition-colors text-met-gray"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <nav className="mt-8 px-2 space-y-2">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group relative
                ${isActive 
                  ? 'bg-met-accent/10 text-met-white' 
                  : 'text-met-gray hover:bg-met-nav-hover-bg hover:text-met-nav-hover-text'
                }`}
            >
              {/* Aktif İndikatör Çizgisi */}
              {isActive && (
                <div className="absolute left-0 w-1 h-6 bg-met-active-line rounded-r-full shadow-[0_0_15px_rgba(250,139,255,0.8)]" />
              )}
              
              <item.icon size={22} className={`${isActive ? 'text-met-accent' : 'group-hover:text-met-nav-hover-text'}`} />
              {isOpen && <span className="font-semibold text-sm">{item.label}</span>}
              
              {/* Tooltip for collapsed sidebar */}
              {!isOpen && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-met-nav-hover-bg text-met-nav-hover-text text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60] font-bold">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-8 left-0 w-full px-4">
        <div className={`p-4 rounded-2xl glass-card bg-gradient-to-br from-met-accent/10 to-transparent flex flex-col items-center text-center ${!isOpen && 'hidden'}`}>
          <ShieldAlert size={24} className="text-met-secondary mb-2" />
          <p className="text-[10px] text-met-gray font-semibold uppercase tracking-widest mb-1">Risk Bridge</p>
          <span className="text-[11px] text-met-white font-bold leading-tight">Güvenli Köprü Kuruldu</span>
          <div className="mt-3 w-full h-1 bg-met-bg/50 rounded-full overflow-hidden">
            <div className="h-full bg-met-secondary w-full shadow-[0_0_8px_rgba(254,255,152,0.5)]" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
