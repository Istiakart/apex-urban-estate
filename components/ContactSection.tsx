
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] font-black text-[#c5a059] uppercase tracking-[0.5em] mb-6 block">Inquiry & Advisory</span>
            <h2 className="text-5xl lg:text-7xl font-black text-[#0a1128] uppercase tracking-luxury leading-tight mb-12">
              Begin Your <br /> 
              <span className="text-[#c5a059]">Acquisition.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg mb-16 tracking-[0.02em]">
              Connect with our senior partners for a confidential consultation regarding off-market assets and global portfolio management.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-full border border-amber-900/10 flex items-center justify-center text-[#c5a059] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">Private Line</p>
                  <p className="text-2xl font-black text-[#0a1128] tracking-tighter">+1 (305) 555-8800</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-full border border-amber-900/10 flex items-center justify-center text-[#c5a059] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">Confidential Email</p>
                  <p className="text-2xl font-black text-[#0a1128] tracking-tighter lowercase">private@apexestates.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1128] p-16 rounded-sm shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/5 rounded-full -mr-32 -mt-32"></div>
             <div className="relative z-10">
               <div className="space-y-12">
                 <div className="group border-b border-white/10 pb-4 focus-within:border-[#c5a059] transition-all">
                   <label className="block text-[9px] font-black text-[#c5a059] uppercase tracking-[0.5em] mb-4">Client Identification</label>
                   <input 
                     type="text" 
                     placeholder="Your Full Name"
                     className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 font-black text-xl focus:ring-0 uppercase tracking-[0.1em]"
                   />
                 </div>
                 <div className="group border-b border-white/10 pb-4 focus-within:border-[#c5a059] transition-all">
                   <label className="block text-[9px] font-black text-[#c5a059] uppercase tracking-[0.5em] mb-4">Direct Contact</label>
                   <input 
                     type="email" 
                     placeholder="Email or Phone Number"
                     className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 font-black text-xl focus:ring-0 uppercase tracking-[0.1em]"
                   />
                 </div>
                 <div className="group border-b border-white/10 pb-4 focus-within:border-[#c5a059] transition-all">
                   <label className="block text-[9px] font-black text-[#c5a059] uppercase tracking-[0.5em] mb-4">Portfolio Interest</label>
                   <textarea 
                     rows={3}
                     placeholder="Asset Type or Specific Property ID"
                     className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 font-black text-xl focus:ring-0 uppercase tracking-[0.1em] resize-none"
                   ></textarea>
                 </div>
                 <button className="w-full bg-[#c5a059] text-[#0a1128] font-black py-8 rounded-sm hover:bg-white transition-all uppercase tracking-[0.5em] text-[10px] shadow-2xl">
                   Submit Private Inquiry
                 </button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
