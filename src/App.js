import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carousel from './pages/Carousel';
import DandD from './pages/DandD';
import DropList from './pages/DropList';
import Switch from './pages/Switch';

function App() {
  return (
    <BrowserRouter basename="interactive-web">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/switch" element={<Switch />} />
          <Route path="/DandD" element={<DandD />} />
          <Route path="/dropList" element={<DropList />} />
          <Route path="/carousel" element={<Carousel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
