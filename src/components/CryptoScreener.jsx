import React, { useEffect, useRef } from 'react';

const CryptoScreener = ({ 
  screenerType = "crypto_mkt",
  defaultColumn = "performance",
  displayCurrency = "USD",
  colorTheme = "dark",
  height = 550,
  isTransparent = false,
  locale = "en",
  width = "100%",
  ...customConfig 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Hapus widget yang sudah ada jika ada
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Konfigurasi default widget
    const defaultConfig = {
      "defaultColumn": defaultColumn,
      "screener_type": screenerType,
      "displayCurrency": displayCurrency,
      "colorTheme": colorTheme,
      "isTransparent": isTransparent,
      "locale": locale,
      "width": width,
      "height": height
    };

    // Gabungkan konfigurasi default dengan custom config
    const config = { ...defaultConfig, ...customConfig };

    // Buat script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    // Buat container untuk widget
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';

    // Tambahkan ke container utama
    if (containerRef.current) {
      containerRef.current.appendChild(widgetContainer);
      containerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [screenerType, defaultColumn, displayCurrency, colorTheme, height, isTransparent, locale, width, customConfig]);

  return (
    <div 
      ref={containerRef}
      className="tradingview-widget-container"
      style={{ 
        height: typeof height === 'number' ? `${height}px` : height,
        width: width,
        minHeight: '400px'
      }}
    />
  );
};

// Preset Components untuk berbagai jenis screener
export const CryptoMarketScreener = ({ colorTheme = "light", height = 550 }) => (
  <CryptoScreener 
    screenerType="crypto_mkt"
    defaultColumn="overview"
    colorTheme={colorTheme}
    height={height}
  />
);

export const ForexScreener = ({ colorTheme = "light", height = 550 }) => (
  <CryptoScreener 
    screenerType="forex"
    defaultColumn="overview"
    displayCurrency="USD"
    colorTheme={colorTheme}
    height={height}
  />
);

export const USStockScreener = ({ colorTheme = "light", height = 550 }) => (
  <CryptoScreener 
    screenerType="america_stocks"
    defaultColumn="overview"
    displayCurrency="USD"
    colorTheme={colorTheme}
    height={height}
  />
);

export const CompactCryptoScreener = () => (
  <CryptoScreener 
    screenerType="crypto_mkt"
    height={400}
    defaultColumn="performance"
    colorTheme="dark"
  />
);

// Component dengan multiple currency display
export const MultiCurrencyCryptoScreener = ({ currency = "USD" }) => (
  <CryptoScreener 
    screenerType="crypto_mkt"
    displayCurrency={currency}
    defaultColumn="performance"
    height={600}
  />
);

export default CryptoScreener;