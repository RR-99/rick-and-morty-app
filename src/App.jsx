import { Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import CharacterDetail from './assets/pages/CharacterDetail';
import Navbar from './assets/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </>
  );
}

export default App;
