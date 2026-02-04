
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1128] text-slate-400 py-32 border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-5 mb-12">
              <svg viewBox="0 0 40 40" className="w-12 h-12 text-[#c5a059]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4H22V36H18V4Z" fill="currentColor"/>
                <path d="M14 12H16V36H14V12Z" fill="currentColor" opacity="0.6"/>
                <path d="M24 12H26V36H24V12Z" fill="currentColor" opacity="0.6"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[0.2em] text-white leading-none uppercase">Apex Urban</span>
                <span className="text-[10px] font-bold tracking-[0.5em] text-[#c5a059] uppercase mt-2">Estates</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h5 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-4">Miami HQ</h5>
                <p className="text-xs text-slate-500 leading-loose tracking-wide font-medium">
                  800 Brickell Avenue, Suite 1200<br />
                  Miami, FL 33131, United States<br />
                  <span className="text-slate-400 font-bold">+1 (305) 555-8800</span>
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-4">London Office</h5>
                <p className="text-xs text-slate-500 leading-loose tracking-wide font-medium">
                  25 Savile Row, Mayfair<br />
                  London W1S 2ER, United Kingdom<br />
                  <span className="text-slate-400 font-bold">+44 20 7946 0000</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 border-l-2 border-[#c5a059] pl-6">Portfolio</h4>
            <ul className="space-y-6 text-[10px] font-black tracking-[0.25em] uppercase">
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Coastal Residences</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Urban Penthouse Series</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Historic Manors</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Private Islands</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 border-l-2 border-[#c5a059] pl-6">Advisory</h4>
            <ul className="space-y-6 text-[10px] font-black tracking-[0.25em] uppercase">
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Acquisition Strategy</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Concierge Services</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Private Viewing</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] font-black uppercase tracking-[0.5em]">
          <p className="text-slate-600">© 2024 Apex Urban Estates • The Standard of Urban Excellence</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
