import { useNavigate } from 'react-router-dom';
import MiniSymbolOverview from '../components/MiniSymbolOverview';
import AdvanceChart from '../components/AdvanceChart';

const CryptoDetail = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-4 bg-[#1F1F1F] p-4'>
      {/* Back Button */}
      <div className='w-full max-w-4xl mb-4'>
        <button
          onClick={() => navigate('/')}
          className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'
        >
          ← Kembali ke Home
        </button>
      </div>

      {/* MiniSymbolOverview */}
      <div className='w-full max-w-4xl h-32 rounded-lg'>
        <MiniSymbolOverview/>
      </div>

      {/* AdvanceChart */}
      <div className='w-full max-w-4xl h-96 rounded-lg'>
        <AdvanceChart/>
      </div>
    </div>
  );
};

export default CryptoDetail;