import { BrowserRouter as CreateElement, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quote';
import './style.css';

function App() {
  return (
    <CreateElement>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </CreateElement>
  );
}

export default App;
