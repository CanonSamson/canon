import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './page/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* LandingPage route */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
