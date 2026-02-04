
export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'House' | 'Condo' | 'Apartment' | 'Townhouse';
  imageUrl: string;
  description: string;
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SearchFilters {
  query: string;
  minPrice: number;
  maxPrice: number;
  beds: string;
  type: string;
}

// Added ChatMessage interface to resolve import error in AIConsultant.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
