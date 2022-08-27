import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Drivers from './pages/Drivers';
import Navbar from './components/Navbar';
import Constructors from './pages/Constructors';
import Home from './pages/Home';
import About from './pages/about';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="constructors" element={<Constructors />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
