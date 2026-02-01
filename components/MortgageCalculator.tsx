
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
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
        Mortgage Calculator
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Home Price (${price.toLocaleString()})</label>
          <input 
            type="range" min="100000" max="10000000" step="50000" 
            value={price} onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Down Payment (%)</label>
            <input 
              type="number" value={(downPayment / price * 100).toFixed(1)} 
              onChange={(e) => setDownPayment(price * (Number(e.target.value) / 100))}
              className="w-full p-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Interest Rate (%)</label>
            <input 
              type="number" step="0.1" value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-xl text-center">
          <p className="text-xs font-medium text-blue-600 uppercase mb-1">Estimated Monthly Payment</p>
          <p className="text-3xl font-bold text-blue-900">${Math.round(monthlyPayment).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
