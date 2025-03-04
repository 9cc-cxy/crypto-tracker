# Crypto Price Tracker Documentation
## Project Setup Guide

1. Install dependencies
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

## API Integration Details
### How Data is Fetched and Updated
I use the CoinGecko API to fetch cryptocurrency data. The API endpoint is:

```
https://api.coingecko.com/api/v3/coins/markets
```
The parameters used are:

  * ```vs_currency```: The target currency (e.g., usd).\
  * ```order```: The order of the results (e.g., market_cap_desc).\
  * ```per_page```: The number of results per page (e.g., 5).\
  * ```page```: The page number (e.g., 1).\
  * ```sparkline```: Whether to include sparkline data (e.g., false).\
  * ```price_change_percentage```: The intervals for price change percentage (e.g., 1h,24h,7d).\

Example request URL:
``` 
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=1h,24h,7d
```

## State Management Explanation
### Why Zustand
I chose Zustand for state management because it is a small, fast, and scalable state-management solution that works great with React. Zustand allows tge management of the state of the cryptocurrency data efficiently and provides a simple API for updating the state.

## Challenges & Solutions
### Challenges Faced

1. **Hydration Mismatch**: Encountered a hydration mismatch error when the server-rendered HTML didn't match the client-rendered HTML.

* **Solution**: Ensured consistent data fetching and rendering on both the server and client.

2. **API Rate Limiting**: Faced rate limiting issues with the CoinGecko API.

* **Solution**: Implemented caching and debouncing to reduce the number of API requests.

3. **Responsive Design**: Ensuring the application was responsive

* **Solution**: Used CSS media queries and flexible layout techniques to create a responsive design.