import React, { useEffect, useRef } from 'react';

const MiniSymbolOverview = ({ 
  symbol = "BITSTAMP:BTCUSD",
  chartOnly = false,
  dateRange = "12M",
  noTimeScale = false,
  colorTheme = "dark",
  isTransparent = false,
  locale = "en",
  width = "100%",
  autosize = true,
  height = "100%",
  showCopyright = false,
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
      "symbol": symbol,
      "chartOnly": chartOnly,
      "dateRange": dateRange,
      "noTimeScale": noTimeScale,
      "colorTheme": colorTheme,
      "isTransparent": isTransparent,
      "locale": locale,
      "width": width,
      "autosize": autosize,
      "height": height
    };

    // Gabungkan konfigurasi default dengan custom config
    const config = { ...defaultConfig, ...customConfig };

    // Buat script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    // Buat container untuk widget
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';

    // Tambahkan ke container utama
    if (containerRef.current) {
      containerRef.current.appendChild(widgetContainer);
      
      // Tambahkan copyright jika diperlukan
      if (showCopyright) {
        const copyrightContainer = document.createElement('div');
        copyrightContainer.className = 'tradingview-widget-copyright';
        copyrightContainer.innerHTML = `
          <a href="https://www.tradingview.com/symbols/${symbol.replace(':', '-')}/?exchange=${symbol.split(':')[0]}" 
             rel="noopener nofollow" 
             target="_blank">
            <span style="color: #2962FF;">${symbol} chart by TradingView</span>
          </a>
        `;
        containerRef.current.appendChild(copyrightContainer);
      }
      
      containerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [symbol, chartOnly, dateRange, noTimeScale, colorTheme, isTransparent, locale, width, autosize, height, customConfig]);

  return (
    <div 
      ref={containerRef}
      className="tradingview-widget-container"
      style={{ 
        height: height === "100%" ? "100%" : height,
        width: width,
        minHeight: '200px'
      }}
    />
  );
};

// Preset Components untuk berbagai simbol populer
export const BitcoinMiniOverview = ({ colorTheme = "dark", height = "100%" }) => (
  <MiniSymbolOverview 
    symbol="BITSTAMP:BTCUSD"
    colorTheme={colorTheme}
    height={height}
    dateRange="12M"
  />
);

export const EthereumMiniOverview = ({ colorTheme = "dark", height = "100%" }) => (
  <MiniSymbolOverview 
    symbol="BITSTAMP:ETHUSD"
    colorTheme={colorTheme}
    height={height}
    dateRange="12M"
  />
);

export const AppleMiniOverview = ({ colorTheme = "dark", height = "100%" }) => (
  <MiniSymbolOverview 
    symbol="NASDAQ:AAPL"
    colorTheme={colorTheme}
    height={height}
    dateRange="12M"
  />
);

export const TeslaMiniOverview = ({ colorTheme = "dark", height = "100%" }) => (
  <MiniSymbolOverview 
    symbol="NASDAQ:TSLA"
    colorTheme={colorTheme}
    height={height}
    dateRange="12M"
  />
);

export const SPYMiniOverview = ({ colorTheme = "dark", height = "100%" }) => (
  <MiniSymbolOverview 
    symbol="AMEX:SPY"
    colorTheme={colorTheme}
    height={height}
    dateRange="12M"
  />
);

// Chart-only versions (tanpa data tambahan)
export const BitcoinChartOnly = ({ colorTheme = "dark" }) => (
  <MiniSymbolOverview 
    symbol="BITSTAMP:BTCUSD"
    chartOnly={true}
    colorTheme={colorTheme}
    height="300px"
  />
);

// Light theme versions
export const BitcoinMiniLight = () => (
  <MiniSymbolOverview 
    symbol="BITSTAMP:BTCUSD"
    colorTheme="light"
    dateRange="12M"
  />
);

// Custom timeframe versions
export const BitcoinWeekly = () => (
  <MiniSymbolOverview 
    symbol="BITSTAMP:BTCUSD"
    dateRange="1W"
    colorTheme="dark"
  />
);

export const BitcoinDaily = () => (
  <MiniSymbolOverview 
    symbol="BITSTAMP:BTCUSD"
    dateRange="1D"
    colorTheme="dark"
  />
);

export default MiniSymbolOverview;