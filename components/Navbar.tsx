
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1128]/95 backdrop-blur-md border-b border-amber-900/10 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-full h-full text-[#c5a059]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4H22V36H18V4Z" fill="currentColor"/>
                <path d="M14 12H16V36H14V12Z" fill="currentColor" opacity="0.6"/>
                <path d="M24 12H26V36H24V12Z" fill="currentColor" opacity="0.6"/>
                <path d="M10 20H12V36H10V20Z" fill="currentColor" opacity="0.3"/>
                <path d="M28 20H30V36H28V20Z" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-[0.25em] text-white leading-none uppercase">Apex Urban</span>
              <span className="text-[10px] font-bold tracking-[0.5em] text-[#c5a059] uppercase mt-1.5">Estates</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {['Properties', 'Advisory', 'Market Intel', 'About Us'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-black text-slate-300 hover:text-[#c5a059] transition-all uppercase tracking-[0.3em]">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden xl:flex flex-col items-end mr-4">
              <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mb-1">Direct Concierge</p>
              <p className="text-sm font-black text-white tracking-widest">+1 (305) 555-8800</p>
            </div>
            <button className="hidden sm:block text-[10px] font-black text-white hover:text-[#c5a059] transition-all uppercase tracking-[0.3em]">Client Portal</button>
            <button className="bg-[#c5a059] text-[#0a1128] text-[10px] font-black px-10 py-4 rounded-sm hover:bg-white transition-all shadow-xl shadow-black/20 uppercase tracking-[0.3em]">Consult Agent</button>
            
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-24 left-0 right-0 bg-[#0a1128] border-t border-amber-900/10 p-8">
          <div className="flex flex-col gap-8">
            {['Properties', 'Advisory', 'Market Intel', 'About Us'].map((item) => (
              <a key={item} href="#" className="text-sm font-black text-white py-2 tracking-[0.3em] uppercase border-b border-white/5 pb-4">{item}</a>
            ))}
            <div className="pt-4">
              <p className="text-[10px] font-black text-[#c5a059] uppercase tracking-[0.4em] mb-2">Concierge Line</p>
              <p className="text-xl font-black text-white tracking-widest">+1 (305) 555-8800</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
