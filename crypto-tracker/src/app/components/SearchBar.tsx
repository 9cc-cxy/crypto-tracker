"use client";

import React from 'react';
import { useCryptoStore } from '../store/store';

export default function SearchBar() {
  const setSearchTerm = useCryptoStore((state) => state.setSearchTerm);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search..." 
        className="search-input" 
        onChange={handleSearchChange}
      />
    </div>
  );
}