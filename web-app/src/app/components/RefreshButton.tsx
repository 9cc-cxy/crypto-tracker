"use client";

import React from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useCryptoStore } from '../store/store';

export default function RefreshButton() {
  const fetchCryptoData = useCryptoStore((state) => state.fetchCryptoData);

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<RefreshIcon />}
      onClick={fetchCryptoData}
    >
      Refresh
    </Button>
  );
}