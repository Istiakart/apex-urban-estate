
import React from 'react';
import { motion } from 'framer-motion';
import { Property } from '../types';
import MortgageCalculator from './MortgageCalculator';

const PropertyModal: React.FC<{ property: Property; onClose: () => void }> = ({ property, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0a1128]/95 backdrop-blur-xl"
      />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 bg-black/40 hover:bg-[#c5a059] rounded-full text-white z-20 transition-all shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="lg:w-1/2 relative min-h-[300px] lg:h-auto">
          <img 
            src={property.imageUrl} 
            alt={property.title} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <span className="border border-[#c5a059] text-[#c5a059] px-6 py-2 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] mb-6 inline-block bg-[#0a1128]/40">
              {property.type}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mb-4 uppercase tracking-[0.05em] leading-tight">{property.title}</h2>
            <p className="text-slate-300 font-bold flex items-center gap-3 text-xs uppercase tracking-[0.3em] italic">
              <span className="w-8 h-[1px] bg-[#c5a059]"></span>
              {property.address}, {property.city}
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 overflow-y-auto p-12 lg:p-16 bg-white">
          <div className="flex justify-between items-center mb-14 pb-14 border-b border-slate-100">
            <div>
              <p className="text-[10px] font-black text-[#c5a059] uppercase tracking-[0.4em] mb-3">Portfolio Listing</p>
              <p className="text-5xl font-black text-[#0a1128] tracking-tighter">${property.price.toLocaleString()}</p>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] mb-8 border-l-4 border-[#c5a059] pl-6">The Narrative</h3>
              <p className="text-slate-600 leading-relaxed text-xl font-medium tracking-[0.02em]">{property.description}</p>
            </section>

            <section>
              <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] mb-8 border-l-4 border-[#c5a059] pl-6">Signature Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {property.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-800 bg-slate-50 p-5 border border-slate-100">
                    <div className="text-[#c5a059]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="font-black text-[10px] uppercase tracking-[0.25em]">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-10 bg-[#0a1128] text-white rounded-sm shadow-2xl">
              <h3 className="text-[11px] font-black text-[#c5a059] uppercase tracking-[0.4em] mb-8">Executive Profile</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium tracking-[0.05em] mb-8">
                Our senior market advisors have verified this residence for its exceptional architectural value and investment potential. We provide end-to-end advisory for seamless high-value acquisitions.
              </p>
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c5a059] hover:text-white transition-all underline underline-offset-8">Request Full Disclosure Brief</button>
            </section>

            <MortgageCalculator initialPrice={property.price} />
            
            <div className="flex flex-col sm:flex-row gap-6 pt-12 border-t border-slate-100">
              <button className="flex-[2] bg-[#0a1128] text-white font-black py-6 rounded-sm hover:bg-[#c5a059] hover:text-[#0a1128] transition-all uppercase tracking-[0.4em] text-[10px] shadow-2xl">Request Private Tour</button>
              <button className="flex-1 border-2 border-slate-200 text-slate-900 font-black py-6 rounded-sm hover:border-[#0a1128] transition-all uppercase tracking-[0.3em] text-[10px]">E-Mail Broker</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyModal;
