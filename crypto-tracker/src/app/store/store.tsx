import { create } from 'zustand';
import axios from 'axios';

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

interface CryptoState {
  cryptoData: CryptoData[];
  loading: boolean;
  searchTerm: string;
  fetchCryptoData: () => void;
  setSearchTerm: (term: string) => void;
}

export const useCryptoStore = create<CryptoState>((set) => ({
  cryptoData: [],
  loading: true,
  searchTerm: '',
  fetchCryptoData: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 5,
          page: 1,
          sparkline: false,
          price_change_percentage: '1h,24h,7d',
        },
      });
      set({ cryptoData: response.data, loading: false });
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      set({ loading: false });
    }
  },
  setSearchTerm: (term: string) => set({ searchTerm: term }),
}));