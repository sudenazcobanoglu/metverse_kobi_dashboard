
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, TrendingUp, AlertCircle } from 'lucide-react';

const CampaignPredictor: React.FC = () => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [budget, setBudget] = useState(5000);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `MetVerse platformu için bir influencer risk uzmanı olarak, Türkiye pazarında Nano ve Mikro influencer'lara odaklanan $${budget} bütçeli bir kampanyanın ROI ve risk tahminini yap. Erişim tabanlı ER% ve spesifik risk faktörleri hakkında kısa bir analiz sun. Yanıtını tamamen Türkçe ve 100 kelimenin altında tut.`,
      });
      setPrediction(response.text || "Tahmin oluşturulamadı.");
    } catch (error) {
      console.error(error);
      setPrediction("Tahmin motoru çevrimdışı. Lütfen bağlantınızı kontrol edin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card p-6 rounded-3xl h-full border-l-4 border-l-met-accent flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-met-accent/20 rounded-2xl text-met-accent">
          <Sparkles size={24} />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold">ROI Öngörücü</h2>
          <p className="text-met-gray text-sm">Gemini Simülasyon Motoru</p>
        </div>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        <div>
          <label className="text-[10px] text-met-gray font-bold uppercase block mb-2">Kampanya Bütçesi ($)</label>
          <input 
            type="range" 
            min="1000" 
            max="50000" 
            step="1000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-1.5 bg-met-bg rounded-full appearance-none cursor-pointer accent-met-accent"
          />
          <div className="flex justify-between mt-2 text-met-white font-bold">
            <span className="text-xs">$1B</span>
            <span className="text-met-accent font-display font-bold">${budget.toLocaleString()}</span>
            <span className="text-xs">$50B</span>
          </div>
        </div>

        <button 
          onClick={handlePredict}
          disabled={loading}
          className="w-full py-3 bg-met-accent/10 border border-met-accent/30 hover:bg-met-accent text-met-accent hover:text-met-bg font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <TrendingUp size={18} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />}
          {loading ? "Hesaplanıyor..." : "Tahmini Çalıştır"}
        </button>

        <div className="mt-4 flex-1">
          {prediction ? (
            <div className="p-4 rounded-2xl bg-met-bg/60 border border-met-accent/10 animate-in fade-in slide-in-from-bottom-2 h-full overflow-y-auto max-h-[150px]">
              <div className="flex items-center gap-2 mb-2 text-met-secondary">
                <AlertCircle size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">AI Stratejik Öngörüler</span>
              </div>
              <p className="text-[11px] text-met-gray leading-relaxed">
                {prediction}
              </p>
            </div>
          ) : (
            <div className="h-full border border-dashed border-met-accent/10 rounded-2xl flex items-center justify-center p-6 text-center">
              <p className="text-[10px] text-met-gray/40 uppercase font-bold tracking-widest leading-relaxed">
                Tahmin analizi oluşturmak için bütçeyi ayarlayın ve motoru başlatın
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignPredictor;
