import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CryptoDetail from './pages/CryptoDetail';
import SymbolOverviewPage from './pages/SymbolOverviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto-detail" element={<CryptoDetail />} />
        <Route path="/symbol-overview" element={<SymbolOverviewPage />} />
      </Routes>
    </Router>
  );
}

export default App
