import React, { useState, useMemo, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import { MOCK_PROPERTIES } from './constants';
import { Property, SearchFilters } from './types';

const INITIAL_FILTERS: SearchFilters = {
  query: '',
  minPrice: 0,
  maxPrice: 30000000,
  beds: 'any',
  type: 'any'
};

const App: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>(INITIAL_FILTERS);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const clearFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  const handleSelectProperty = useCallback((property: Property) => {
    setSelectedProperty(property);
  }, []);

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => {
      const q = filters.query.toLowerCase();
      const matchesQuery = !q || 
                          p.title.toLowerCase().includes(q) || 
                          p.city.toLowerCase().includes(q) || 
                          p.address.toLowerCase().includes(q);
      
      const matchesPrice = p.price >= filters.minPrice && p.price <= filters.maxPrice;
      
      const bedsCount = parseInt(filters.beds);
      const matchesBeds = filters.beds === 'any' || (!isNaN(bedsCount) && p.bedrooms >= bedsCount);
      
      const matchesType = filters.type === 'any' || p.type === filters.type;
      
      return matchesQuery && matchesPrice && matchesBeds && matchesType;
    });
  }, [filters]);

  const hasActiveFilters = useMemo(() => {
    return JSON.stringify(filters) !== JSON.stringify(INITIAL_FILTERS);
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-64 pb-48 md:pt-80 md:pb-64 bg-[#0a1128] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1600607687940-4e524cb3519a?auto=format&fit=crop&q=80&w=2000" 
             alt="Luxury Penthouse View" 
             className="w-full h-full object-cover scale-110" 
             onError={(e) => {
               (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000';
             }}
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/70 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-12 tracking-[0.15em] uppercase">
              Curated Estates <br />
              <span className="text-[#c5a059]">For The Discerning.</span>
            </h1>
            <p className="text-xs md:text-xl text-slate-300 mb-20 leading-relaxed max-w-2xl mx-auto font-medium uppercase tracking-[0.5em] opacity-80">
              Expert Local Market Knowledge. <br /> Personalized Brokerage Service.
            </p>
            
            {/* Search Bar Container */}
            <div className="bg-white p-3 rounded-sm border border-amber-900/10 shadow-2xl max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <svg className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <input 
                    type="text" 
                    placeholder="Search Portfolios..."
                    className="w-full pl-16 pr-8 py-6 bg-slate-50 rounded-sm text-slate-900 placeholder-slate-400 focus:outline-none text-xs font-black uppercase tracking-[0.4em] transition-all"
                    value={filters.query}
                    onChange={(e) => setFilters({...filters, query: e.target.value})}
                  />
                </div>
                <button className="bg-[#0a1128] text-[#c5a059] font-black px-16 py-6 rounded-sm hover:bg-[#c5a059] hover:text-[#0a1128] transition-all uppercase tracking-[0.4em] text-xs shadow-2xl">
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        
        {/* Filters Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl font-black text-[#0a1128] tracking-[0.15em] uppercase mb-4">Exclusive Portfolio</h2>
            <p className="text-[11px] font-bold text-[#c5a059] uppercase tracking-[0.6em]">Available Signature Residences</p>
          </div>
          <button 
            onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
            className={`lg:hidden flex items-center gap-4 px-10 py-5 rounded-sm font-black transition-all uppercase tracking-[0.4em] text-[11px] ${isFilterPanelOpen ? 'bg-[#0a1128] text-white shadow-2xl' : 'bg-slate-100 text-slate-600'}`}
          >
            Refine Search
          </button>
        </div>

        {/* Filters Panel */}
        <div className={`${isFilterPanelOpen ? 'flex' : 'hidden lg:flex'} flex-col lg:flex-row gap-12 p-14 bg-white border border-slate-100 shadow-[0_60px_100px_-40px_rgba(0,0,0,0.15)] mb-32 lg:items-end`}>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div className="flex flex-col gap-6">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-1">Maximum Offering</label>
              <select 
                className="text-[11px] font-black bg-slate-50 border-b-2 border-slate-200 px-3 py-5 focus:border-[#c5a059] focus:outline-none transition-all appearance-none cursor-pointer uppercase tracking-[0.3em]"
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: parseInt(e.target.value)})}
              >
                <option value="30000000">Unrestricted</option>
                <option value="5000000">Under $5.0M</option>
                <option value="10000000">Under $10M</option>
                <option value="20000000">Under $20M</option>
              </select>
            </div>

            <div className="flex flex-col gap-6">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-1">Beds Required</label>
              <select 
                className="text-[11px] font-black bg-slate-50 border-b-2 border-slate-200 px-3 py-5 focus:border-[#c5a059] focus:outline-none transition-all appearance-none cursor-pointer uppercase tracking-[0.3em]"
                value={filters.beds}
                onChange={(e) => setFilters({...filters, beds: e.target.value})}
              >
                <option value="any">Flexible</option>
                <option value="2">2+ Master Suites</option>
                <option value="3">3+ Master Suites</option>
                <option value="4">4+ Master Suites</option>
                <option value="5">Estate Grade (5+)</option>
              </select>
            </div>

            <div className="flex flex-col gap-6">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-1">Asset Class</label>
              <select 
                className="text-[11px] font-black bg-slate-50 border-b-2 border-slate-200 px-3 py-5 focus:border-[#c5a059] focus:outline-none transition-all appearance-none cursor-pointer uppercase tracking-[0.3em]"
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="any">All Assets</option>
                <option value="House">Detached Estates</option>
                <option value="Condo">Signature Penthouses</option>
                <option value="Apartment">Luxury Lofts</option>
                <option value="Townhouse">Row Residences</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-12 pt-10 lg:pt-0 lg:pl-12 lg:border-l-2 border-slate-100 min-w-[280px]">
            <div className="flex-1">
              <span className="text-[10px] font-black text-slate-400 uppercase block tracking-[0.5em] mb-3">Portfolio Size</span>
              <p className="text-4xl font-black text-[#0a1128] tracking-tighter">{filteredProperties.length} <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">Estates</span></p>
            </div>
            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="p-6 bg-slate-50 text-slate-400 hover:text-red-700 transition-all rounded-sm shadow-sm"
                title="Reset Selection"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </button>
            )}
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {filteredProperties.map(property => (
              <div 
                key={property.id} 
                className="group flex flex-col cursor-pointer"
                onClick={() => handleSelectProperty(property)}
              >
                <div className="relative h-[550px] overflow-hidden bg-slate-100 shadow-2xl">
                  <img 
                    src={property.imageUrl} 
                    alt={property.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s] ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600';
                    }}
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-[#0a1128] text-[#c5a059] px-7 py-2.5 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 border-[25px] border-white/0 group-hover:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none"></div>
                </div>
                <div className="pt-10">
                  <div className="flex justify-between items-end mb-6 gap-6">
                    <h3 className="text-3xl font-black text-[#0a1128] tracking-tight uppercase leading-none group-hover:text-[#c5a059] transition-colors">{property.title}</h3>
                    <span className="text-2xl font-black text-[#0a1128] tracking-tighter whitespace-nowrap">${(property.price / 1000000).toFixed(1)}M</span>
                  </div>
                  <p className="text-[11px] font-black text-slate-400 mb-10 uppercase tracking-[0.3em] flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#c5a059]"></span>
                    {property.address}, {property.city}
                  </p>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 border-t border-slate-100 pt-10">
                    <span>{property.bedrooms} Beds</span>
                    <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                    <span>{property.bathrooms} Baths</span>
                    <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                    <span>{property.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-48 bg-slate-50 border border-slate-200">
            <h3 className="text-4xl font-black text-[#0a1128] mb-8 tracking-[0.2em] uppercase">No Assets Matched</h3>
            <p className="text-slate-400 text-sm font-bold max-w-lg mx-auto mb-14 uppercase tracking-[0.4em] leading-relaxed">Our current portfolio does not contain a property matching these specific criteria. Contact a private associate for off-market listings.</p>
            <button 
              onClick={clearFilters}
              className="px-16 py-6 bg-[#0a1128] text-[#c5a059] font-black rounded-sm hover:bg-[#c5a059] hover:text-[#0a1128] transition-all uppercase tracking-[0.4em] text-xs shadow-xl"
            >
              Reset Search Experience
            </button>
          </div>
        )}
      </main>

      <Footer />

      {/* Overlays */}
      <AnimatePresence>
        {selectedProperty && (
          <PropertyModal 
            property={selectedProperty} 
            onClose={() => setSelectedProperty(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;