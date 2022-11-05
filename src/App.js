import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Archive from './page/Archive';
import LandingPage from './page/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* LandingPage route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
