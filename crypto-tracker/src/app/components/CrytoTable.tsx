"use client";

import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useCryptoStore } from '../store/store';

export default function CryptoTable() {
  const { cryptoData, loading, fetchCryptoData, searchTerm } = useCryptoStore();

  useEffect(() => {
    fetchCryptoData();
  }, [fetchCryptoData]);

  const filteredData = cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="crypto-table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((crypto) => (
            <tr key={crypto.id}>
              <td><img src={crypto.image} alt={crypto.name} width="24" height="24" /></td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price.toFixed(2)}</td>
              <td style={{ color: crypto.price_change_percentage_1h_in_currency >= 0 ? 'green' : 'red' }}>
                {Math.abs(crypto.price_change_percentage_1h_in_currency).toFixed(2)}%
              </td>
              <td style={{ color: crypto.price_change_percentage_24h_in_currency >= 0 ? 'green' : 'red' }}>
                {Math.abs(crypto.price_change_percentage_24h_in_currency).toFixed(2)}%
              </td>
              <td style={{ color: crypto.price_change_percentage_7d_in_currency >= 0 ? 'green' : 'red' }}>
                {Math.abs(crypto.price_change_percentage_7d_in_currency).toFixed(2)}%
              </td>
              <td>${crypto.market_cap.toLocaleString()}</td>
              <td>${crypto.total_volume.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}