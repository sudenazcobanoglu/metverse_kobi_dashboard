
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { Target } from 'lucide-react';

const data = [
  { name: 'Pzt', er: 4.2, cpe: 0.12 },
  { name: 'Sal', er: 5.1, cpe: 0.10 },
  { name: 'Çar', er: 4.8, cpe: 0.11 },
  { name: 'Per', er: 6.2, cpe: 0.08 },
  { name: 'Cum', er: 5.8, cpe: 0.09 },
  { name: 'Cmt', er: 7.1, cpe: 0.07 },
  { name: 'Paz', er: 6.5, cpe: 0.08 },
];

const ROIOverview: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-3xl h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-display font-bold">Performans & ROI Genel Bakış</h2>
          <p className="text-met-gray text-sm">Gerçek zamanlı erişim ve verimlilik matrisi</p>
        </div>
        <div className="flex gap-2">
          <span className="flex items-center gap-1 text-xs bg-met-accent/20 text-met-accent px-3 py-1 rounded-full border border-met-accent/30">
            <Target size={14} /> Verimlilik Endeksi: 98.4
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-2xl bg-met-bg/40 border border-met-accent/10">
          <p className="text-met-gray text-xs uppercase tracking-wider font-semibold">Erişim Tabanlı ER</p>
          <div className="flex items-end gap-2 mt-1">
            <span className="text-2xl font-bold text-met-white">6.2%</span>
            <span className="text-xs text-met-accent mb-1 font-medium">+1.4%</span>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-met-bg/40 border border-met-accent/10">
          <p className="text-met-gray text-xs uppercase tracking-wider font-semibold">CPE Optimizasyonu</p>
          <div className="flex items-end gap-2 mt-1">
            <span className="text-2xl font-bold text-met-white">$0.08</span>
            <span className="text-xs text-met-secondary mb-1 font-medium">-12%</span>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-met-bg/40 border border-met-accent/10">
          <p className="text-met-gray text-xs uppercase tracking-wider font-semibold">Kampanya ROI</p>
          <div className="flex items-end gap-2 mt-1">
            <span className="text-2xl font-bold text-met-white">4.8x</span>
            <span className="text-xs text-green-400 mb-1 font-medium">+0.3x</span>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorER" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(232, 133, 202)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="rgb(232, 133, 202)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCPE" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(254, 255, 152)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="rgb(254, 255, 152)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#B0B0B0" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="#B0B0B0" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgb(30, 0, 34)', border: '1px solid rgba(232, 133, 202, 0.3)', borderRadius: '12px' }}
              itemStyle={{ color: '#fffffe' }}
              labelStyle={{ color: 'rgb(254, 255, 152)' }}
            />
            <Area 
              type="monotone" 
              dataKey="er" 
              stroke="rgb(232, 133, 202)" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorER)" 
              name="Etkileşim Oranı %"
            />
            <Area 
              type="monotone" 
              dataKey="cpe" 
              stroke="rgb(254, 255, 152)" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorCPE)" 
              name="Etkileşim Başına Maliyet"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ROIOverview;
