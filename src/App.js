import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carousel from './pages/carousel/Carousel';
import DandD from './pages/DandD/DandD';
import Switch from './pages/switch/Switch';

function App() {
  return (
    <BrowserRouter basename="interactive-web">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/switch" element={<Switch />} />
          <Route path="/DandD" element={<DandD />} />
          <Route path="/carousel" element={<Carousel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
