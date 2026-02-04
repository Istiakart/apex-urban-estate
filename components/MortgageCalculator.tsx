
import React, { useState, useMemo } from 'react';

const MortgageCalculator: React.FC<{ initialPrice: number }> = ({ initialPrice }) => {
  const [price, setPrice] = useState(initialPrice);
  const [downPayment, setDownPayment] = useState(initialPrice * 0.2);
  const [interestRate, setInterestRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const monthlyPayment = useMemo(() => {
    const principal = price - downPayment;
    const r = interestRate / 100 / 12;
    const n = years * 12;
    if (r === 0) return principal / n;
    return (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  }, [price, downPayment, interestRate, years]);

  return (
    <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
      <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 border-l-4 border-[#c5a059] pl-6 text-[#0a1128]">
        Investment Calculator
      </h3>
      
      <div className="space-y-8">
        <div>
          <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Portfolio Valuation (${price.toLocaleString()})</label>
          <input 
            type="range" min="100000" max="30000000" step="50000" 
            value={price} onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Down Capital (%)</label>
            <input 
              type="number" value={(downPayment / price * 100).toFixed(1)} 
              onChange={(e) => setDownPayment(price * (Number(e.target.value) / 100))}
              className="w-full p-4 bg-white border border-slate-200 rounded-sm text-xs font-bold tracking-widest focus:border-[#c5a059] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Interest Rate (%)</label>
            <input 
              type="number" step="0.1" value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-4 bg-white border border-slate-200 rounded-sm text-xs font-bold tracking-widest focus:border-[#c5a059] outline-none transition-colors"
            />
          </div>
        </div>

        <div className="p-8 bg-[#0a1128] text-white rounded-sm text-center shadow-2xl">
          <p className="text-[9px] font-black text-[#c5a059] uppercase tracking-[0.5em] mb-3">Estimated Monthly Offering</p>
          <p className="text-4xl font-black tracking-tighter">${Math.round(monthlyPayment).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
