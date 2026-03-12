
import React from 'react';
import { Brain, Smile, Meh, Frown, ShieldAlert } from 'lucide-react';

const AIAuditPanel: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-3xl h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-met-secondary/10 rounded-2xl text-met-secondary">
            <Brain size={24} />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold">AI Denetim Paneli</h2>
            <p className="text-met-gray text-sm">Duygu & Orijinallik Matrisi</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-met-gray uppercase font-bold">Ort. Orijinallik</p>
          <p className="text-xl font-display font-bold text-met-secondary">94.2</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* NLP Duygu Analizi */}
        <div className="p-5 rounded-2xl bg-met-bg/40 border border-met-accent/10">
          <h3 className="text-xs font-bold text-met-gray uppercase mb-4">Yorum Kalitesi (NLP)</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-bold">
                <span className="flex items-center gap-1"><Smile size={10} className="text-green-400" /> POZİTİF</span>
                <span className="text-met-white">78%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-bold">
                <span className="flex items-center gap-1"><Meh size={10} className="text-met-secondary" /> NÖTR</span>
                <span className="text-met-white">18%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-met-secondary rounded-full" style={{ width: '18%' }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-bold">
                <span className="flex items-center gap-1"><Frown size={10} className="text-met-accent" /> NEGATİF</span>
                <span className="text-met-white">4%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-met-accent rounded-full" style={{ width: '4%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Orijinallik Puanı */}
        <div className="p-5 rounded-2xl bg-met-bg/40 border border-met-accent/10 flex flex-col items-center justify-center">
          <div className="relative w-24 h-24 mb-3">
             <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="rgb(250, 139, 255)"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={2 * Math.PI * 40 * (1 - 0.94)}
                  fill="transparent"
                  strokeLinecap="round"
                />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-display font-bold">94%</span>
                <span className="text-[8px] text-met-gray uppercase">Gerçek</span>
             </div>
          </div>
          <p className="text-center text-[10px] text-met-gray leading-tight mt-2 px-2">
            Etkileşim orijinalliği <span className="text-met-hover font-bold">Yüksek</span>. 
            Son 30 günde bot farm deseni saptanmadı.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-met-accent/5 border border-met-accent/10 rounded-2xl flex items-start gap-3">
        <ShieldAlert size={18} className="text-met-accent mt-0.5 shrink-0" />
        <div>
          <p className="text-xs font-bold text-met-white">AI Uyarısı: Profil Anomalisi</p>
          <p className="text-[10px] text-met-gray mt-0.5">12/04 tarihinde takipçi sayısında ani artış. Kaynak IP'ler inceleniyor...</p>
        </div>
      </div>
    </div>
  );
};

export default AIAuditPanel;
