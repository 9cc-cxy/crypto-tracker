import React from 'react';
import Typography from '@mui/material/Typography';
import CryptoTable from "./components/CrytoTable";
import RefreshButton from "./components/RefreshButton";
import SearchBar from "./components/SearchBar";

export default function Dashboard() {
  return (
    <main className="dashboard-container">
      <Typography variant="h2" component="h1" gutterBottom>
        Crypto Price Tracker
      </Typography>
      <div className="search-refresh-container">
        <SearchBar />
        <RefreshButton />
      </div>
      <CryptoTable />
    </main>
  );
}