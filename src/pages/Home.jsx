import { useNavigate } from 'react-router-dom';
import CryptoScreener from '../components/CryptoScreener';

const Home = () => {
  const navigate = useNavigate();

  const handleCryptoClick = () => {
    navigate('/crypto-detail');
  };

  const handleSymbolOverviewClick = () => {
    navigate('/symbol-overview');
  };

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-[#1F1F1F] p-4'>
      <div className='w-full max-w-6xl mb-4'>
        <h1 className='text-white text-3xl font-bold text-center mb-4'>
          Trading Widget Dashboard
        </h1>
        <p className='text-gray-300 text-center mb-6'>
          Pilih widget yang ingin Anda jelajahi
        </p>
      </div>

      {/* Navigation Cards */}
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        {/* Card untuk Crypto Screener */}
        <div
          className='bg-[#2A2A2A] rounded-lg p-6 cursor-pointer hover:bg-[#3A3A3A] transition-colors border border-gray-700'
          onClick={handleCryptoClick}
        >
          <h2 className='text-white text-xl font-semibold mb-2'>📊 Crypto Screener</h2>
          <p className='text-gray-400 mb-4'>
            Lihat overview pasar crypto dan akses advanced chart
          </p>
          <div className='text-blue-400 text-sm'>
            Klik untuk melihat detail →
          </div>
        </div>

        {/* Card untuk Symbol Overview */}
        <div
          className='bg-[#2A2A2A] rounded-lg p-6 cursor-pointer hover:bg-[#3A3A3A] transition-colors border border-gray-700'
          onClick={handleSymbolOverviewClick}
        >
          <h2 className='text-white text-xl font-semibold mb-2'>📈 Symbol Overview</h2>
          <p className='text-gray-400 mb-4'>
            Dashboard dark mode dengan multiple trading symbols
          </p>
          <div className='text-green-400 text-sm'>
            Klik untuk melihat dashboard →
          </div>
        </div>
      </div>

      {/* CryptoScreener Preview */}
      <div className='w-full max-w-6xl'>
        <h3 className='text-white text-lg font-semibold mb-4 text-center'>
          Preview: Crypto Market Screener
        </h3>
        <div
          className='cursor-pointer hover:opacity-80 transition-opacity'
          onClick={handleCryptoClick}
        >
          <CryptoScreener/>
        </div>
      </div>
    </div>
  );
};

export default Home;