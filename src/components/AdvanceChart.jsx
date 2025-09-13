import React, { useEffect, useRef } from 'react';

const AdvanceChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Hapus widget yang sudah ada jika ada
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Buat script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "allow_symbol_change": true,
      "calendar": false,
      "details": false,
      "hide_side_toolbar": true,
      "hide_top_toolbar": false,
      "hide_legend": false,
      "hide_volume": false,
      "hotlist": false,
      "interval": "D",
      "locale": "en",
      "save_image": true,
      "style": "1",
      "symbol": "CRYPTO:BTCUSD",
      "theme": "dark",
      "timezone": "Etc/UTC",
      "backgroundColor": "#0F0F0F",
      "gridColor": "rgba(242, 242, 242, 0.06)",
      "watchlist": [],
      "withdateranges": false,
      "compareSymbols": [],
      "studies": [],
      "autosize": true
    });

    // Buat container untuk widget
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';
    widgetContainer.style.height = 'calc(100% - 32px)';
    widgetContainer.style.width = '100%';


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
  }, []);

  return (
    <div 
      ref={containerRef}
      className="tradingview-widget-container"
      style={{ 
        height: '100%', 
        width: '100%',
        minHeight: '400px' // Tambahkan minimum height agar terlihat
      }}
    />
  );
};

export default AdvanceChart;