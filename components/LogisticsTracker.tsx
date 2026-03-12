
import React from 'react';
import { Truck, Package, Clock, CheckCircle } from 'lucide-react';
import { Shipment } from '../types';

// Fix: Updated status values to match the Shipment type definition ('In Transit' | 'Delivered' | 'Pending')
const shipments: Shipment[] = [
  { id: '1', influencer: 'Aylin Y.', product: 'V-PRO Kulaklık', status: 'In Transit', progress: 65 },
  { id: '2', influencer: 'Can D.', product: 'Hyper-X Mouse', status: 'Delivered', progress: 100 },
  { id: '3', influencer: 'Selin A.', product: 'Luxe Cilt Kiti', status: 'Pending', progress: 15 },
];

const LogisticsTracker: React.FC = () => {
  // Fix: Added a mapping for displaying statuses in Turkish to maintain the localized UI
  const statusLabels: Record<Shipment['status'], string> = {
    'In Transit': 'Yolda',
    'Delivered': 'Teslim Edildi',
    'Pending': 'Hazırlanıyor'
  };

  return (
    <div className="glass-card p-6 rounded-3xl h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-met-accent/10 rounded-2xl text-met-accent">
            <Truck size={24} />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold">Lojistik Takipçisi</h2>
            <p className="text-met-gray text-sm">Ürün Gönderim Hattı</p>
          </div>
        </div>
        <button className="text-xs font-bold text-met-accent hover:text-met-hover underline underline-offset-4">
          Haritayı Aç
        </button>
      </div>

      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="p-4 rounded-2xl bg-met-bg/40 border border-met-accent/10">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                {/* Fix: Updated comparisons to use 'Delivered' to match the Shipment type */}
                <div className={`p-2 rounded-lg ${shipment.status === 'Delivered' ? 'bg-green-500/10 text-green-400' : 'bg-met-accent/10 text-met-accent'}`}>
                  {shipment.status === 'Delivered' ? <CheckCircle size={16} /> : <Package size={16} />}
                </div>
                <div>
                  <h4 className="text-sm font-bold">{shipment.product}</h4>
                  <p className="text-[10px] text-met-gray">Alıcı: <span className="text-met-white">{shipment.influencer}</span></p>
                </div>
              </div>
              <div className="text-right">
                {/* Fix: Updated comparison and displayed mapped Turkish label */}
                <span className={`text-[10px] font-bold uppercase ${shipment.status === 'Delivered' ? 'text-green-400' : 'text-met-accent'}`}>
                  {statusLabels[shipment.status]}
                </span>
                <p className="text-[10px] text-met-gray mt-0.5 flex items-center justify-end gap-1">
                  {/* Fix: Updated comparison to use 'Pending' to match the Shipment type */}
                  <Clock size={10} /> {shipment.status === 'Pending' ? 'Tah. 3 gün' : 'Bugün Teslimat'}
                </p>
              </div>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold">
                <span className="text-met-gray">Sevkiyat İlerlemesi</span>
                <span className="text-met-white">%{shipment.progress}</span>
              </div>
              <div className="h-1.5 w-full bg-met-white/5 rounded-full overflow-hidden">
                {/* Fix: Updated progress bar color logic to use 'Delivered' status */}
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${shipment.status === 'Delivered' ? 'bg-green-500' : 'bg-met-accent'}`}
                  style={{ width: `${shipment.progress}%` }} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogisticsTracker;
