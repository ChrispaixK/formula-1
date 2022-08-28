import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import { useSelector } from 'react-redux';
import Drivers from './pages/DriversPage';
import Navbar from './components/Navbar';
import Constructors from './pages/ConstructorsPage';
import Home from './pages/HomePage';

function App() {
  const season = useSelector((state) => state.home);
  const actualYear = new Date().getFullYear().toString();

  return (
    <>
      <Navbar season={season} actualYear={actualYear} />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home season={season} actualYear={actualYear} />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="constructors" element={<Constructors />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
