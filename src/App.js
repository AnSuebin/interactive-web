import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carousel from './pages/carousel/Carousel';
import DandD from './pages/DandD/DandD';

function App() {
  return (
    <BrowserRouter basename="interactive-web">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/DandD" element={<DandD />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
