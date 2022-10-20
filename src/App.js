import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carousel from './pages/carousel/Carousel';

function App() {
  return (
    <BrowserRouter basename="interactive-web">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/carousel" element={<Carousel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
