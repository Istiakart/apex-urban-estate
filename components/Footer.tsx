
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1128] text-slate-400 py-32 border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-5 mb-12">
              <svg viewBox="0 0 40 40" className="w-12 h-12 text-[#c5a059]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2L4 16H8V36H16V26H24V36H32V16H36L20 2Z" fill="currentColor"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[0.2em] text-white leading-none uppercase">Apex Urban</span>
                <span className="text-[10px] font-bold tracking-[0.5em] text-[#c5a059] uppercase mt-2">Estates</span>
              </div>
            </div>
            <p className="max-w-md text-slate-500 text-sm leading-relaxed font-medium tracking-[0.05em]">
              Apex Urban Estates represents the highest standard of luxury real estate representation. Our commitment to discretion, expertise, and personalized service ensures your legacy is handled with absolute care.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 border-l-2 border-[#c5a059] pl-6">Exclusive Collections</h4>
            <ul className="space-y-6 text-[10px] font-black tracking-[0.25em] uppercase">
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Coastal Residences</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Urban Penthouse Series</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Historic Manors</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Private Islands</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 border-l-2 border-[#c5a059] pl-6">Support & Legal</h4>
            <ul className="space-y-6 text-[10px] font-black tracking-[0.25em] uppercase">
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Private Concierge</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Privacy Charter</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Terms of Engagement</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Market Analysis</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] font-black uppercase tracking-[0.5em]">
          <p className="text-slate-600">© 2024 Apex Urban Estates • The Standard of Urban Luxury</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Journal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
