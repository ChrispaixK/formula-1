import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Drivers from './pages/DriversPage';
import Navbar from './components/Navbar';
import Constructors from './pages/ConstructorsPage';
import Home from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="constructors" element={<Constructors />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
