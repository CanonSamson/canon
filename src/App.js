import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Archive from './page/Archive';
import LandingPage from './page/LandingPage';
import HomeRoute from './page/route/HomeRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LandingPage route */}
        <Route path="/" element={<HomeRoute />} >
          <Route path="/" element={<LandingPage />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
