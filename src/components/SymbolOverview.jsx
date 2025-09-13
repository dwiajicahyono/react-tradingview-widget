import React, { useEffect, useRef } from 'react';

const SymbolOverview = ({ 
  symbols = [["Bitcoin", "CRYPTO:BTCUSD|1D"]], 
  colorTheme = "light",
  backgroundColor = "#ffffff",
  chartType = "area",
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
      "lineWidth": 2,
      "lineType": 0,
      "chartType": chartType,
      "fontColor": "rgb(106, 109, 120)",
      "gridLineColor": "rgba(46, 46, 46, 0.06)",
      "volumeUpColor": "rgba(34, 171, 148, 0.5)",
      "volumeDownColor": "rgba(247, 82, 95, 0.5)",
      "backgroundColor": backgroundColor,
      "widgetFontColor": "#0F0F0F",
      "upColor": "#22ab94",
      "downColor": "#f7525f",
      "borderUpColor": "#22ab94",
      "borderDownColor": "#f7525f",
      "wickUpColor": "#22ab94",
      "wickDownColor": "#f7525f",
      "colorTheme": colorTheme,
      "isTransparent": false,
      "locale": "en",
      "chartOnly": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "symbols": symbols,
      "dateRanges": ["1d|1"],
      "fontSize": "10",
      "headerFontSize": "medium",
      "autosize": true,
      "width": "100%",
      "height": "100%",
      "noTimeScale": false,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false
    };

    // Gabungkan konfigurasi default dengan custom config
    const config = { ...defaultConfig, ...customConfig };

    // Buat script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
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
  }, [symbols, colorTheme, backgroundColor, chartType, customConfig]);

  return (
    <div 
      ref={containerRef}
      className="tradingview-widget-container"
      style={{ 
        height: '100%', 
        width: '100%',
        minHeight: '300px' // Minimum height agar widget terlihat
      }}
    />
  );
};

// export const AppleOverview = () => (
//   <SymbolOverview 
//     symbols={[["Apple", "AAPL|1D"]]}
//   />
// );

// export const BitcoinOverview = () => (
//   <SymbolOverview 
//     symbols={[["Bitcoin", "CRYPTO:BTCUSD|1D"]]}
//     colorTheme="dark"
//     backgroundColor="#0F0F0F"
//   />
// );

// export const MultiSymbolOverview = () => (
//   <SymbolOverview 
//     symbols={[
//       ["Apple", "AAPL|1D"],
//       ["Microsoft", "MSFT|1D"],
//       ["Google", "GOOGL|1D"]
//     ]}
//     chartType="line"
//   />
// );

export default SymbolOverview;