import { useNavigate } from 'react-router-dom';
import SymbolOverview from '../components/SymbolOverview';

const SymbolOverviewPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-4 bg-[#0F0F0F] p-4'>
      {/* Back Button */}
      <div className='w-full max-w-4xl mb-4'>
        <button
          onClick={() => navigate('/')}
          className='bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors'
        >
          ← Kembali ke Home
        </button>
      </div>

      {/* Title */}
      <div className='w-full max-w-4xl mb-4'>
        <h1 className='text-white text-2xl font-bold text-center mb-2'>
          Symbol Overview Dashboard
        </h1>
        <p className='text-gray-400 text-center'>
          Dark Mode Trading View dengan Multiple Symbols
        </p>
      </div>

      {/* Multiple SymbolOverview dengan dark theme */}
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Bitcoin Overview */}
        <div className='bg-[#1A1A1A] rounded-lg p-4 h-80'>
          <h3 className='text-white text-lg font-semibold mb-2'>Bitcoin (BTC/USD)</h3>
          <SymbolOverview
            symbols={[["Bitcoin", "CRYPTO:BTCUSD|1D"]]}
            colorTheme="dark"
            backgroundColor="#1A1A1A"
            chartType="area"
          />
        </div>

        {/* Ethereum Overview */}
        <div className='bg-[#1A1A1A] rounded-lg p-4 h-80'>
          <h3 className='text-white text-lg font-semibold mb-2'>Ethereum (ETH/USD)</h3>
          <SymbolOverview
            symbols={[["Ethereum", "CRYPTO:ETHUSD|1D"]]}
            colorTheme="dark"
            backgroundColor="#1A1A1A"
            chartType="area"
          />
        </div>

        {/* Apple Stock */}
        <div className='bg-[#1A1A1A] rounded-lg p-4 h-80'>
          <h3 className='text-white text-lg font-semibold mb-2'>Apple Inc. (AAPL)</h3>
          <SymbolOverview
            symbols={[["Apple", "AAPL|1D"]]}
            colorTheme="dark"
            backgroundColor="#1A1A1A"
            chartType="candles"
          />
        </div>

        {/* Microsoft Stock */}
        <div className='bg-[#1A1A1A] rounded-lg p-4 h-80'>
          <h3 className='text-white text-lg font-semibold mb-2'>Microsoft Corp. (MSFT)</h3>
          <SymbolOverview
            symbols={[["Microsoft", "MSFT|1D"]]}
            colorTheme="dark"
            backgroundColor="#1A1A1A"
            chartType="candles"
          />
        </div>
      </div>

      {/* Multi-Symbol Overview */}
      <div className='w-full max-w-6xl mt-4'>
        <div className='bg-[#1A1A1A] rounded-lg p-4 h-96'>
          <h3 className='text-white text-lg font-semibold mb-2'>Multi-Symbol Comparison</h3>
          <SymbolOverview
            symbols={[
              ["Bitcoin", "CRYPTO:BTCUSD|1D"],
              ["Ethereum", "CRYPTO:ETHUSD|1D"],
              ["Apple", "AAPL|1D"],
              ["Tesla", "TSLA|1D"]
            ]}
            colorTheme="dark"
            backgroundColor="#1A1A1A"
            chartType="line"
          />
        </div>
      </div>
    </div>
  );
};

export default SymbolOverviewPage;